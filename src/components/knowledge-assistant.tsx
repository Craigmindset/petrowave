"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageSquare, Send, X } from "lucide-react";
import { navGroups, subPageContent, topLevelLinks } from "@/lib/site-data";

type KnowledgeEntry = {
  id: number;
  question: string;
  keywords: string[];
  answer: string;
};

type ChatMessage = {
  id: number;
  role: "bot" | "user";
  text: string;
  ctaHref?: string;
  ctaLabel?: string;
};

type SearchDocument = {
  id: string;
  title: string;
  body: string;
  href?: string;
  tokens: string[];
};

const PETROWAVE_KNOWLEDGE_BASE: KnowledgeEntry[] = [
  {
    id: 1,
    question: "What are your core services?",
    keywords: [
      "services",
      "do",
      "upstream",
      "downstream",
      "offshore",
      "procurement",
      "what",
    ],
    answer:
      "PetroWave is a fully integrated energy firm in Port Harcourt specializing in upstream technical services, midstream logistics, and downstream procurement.",
  },
  {
    id: 2,
    question: "Where are you located?",
    keywords: [
      "location",
      "office",
      "address",
      "ph",
      "port harcourt",
      "rivers",
    ],
    answer:
      "Our headquarters are strategically located in Port Harcourt, Rivers State, Nigeria. You can find our full address on the Contact page.",
  },
  {
    id: 3,
    question: "How can I invest?",
    keywords: [
      "invest",
      "partner",
      "portfolio",
      "equity",
      "growth",
      "governance",
    ],
    answer:
      "We welcome strategic partnerships and investment. Please navigate to our 'Investors' section to view our Portfolio and Corporate Governance frameworks.",
  },
  {
    id: 4,
    question: "ESG and Sustainability",
    keywords: ["environment", "social", "esg", "green", "community"],
    answer:
      "Sustainability is at our core. We focus on Social Investment and Environmental protection through our dedicated ESG goals.",
  },
  {
    id: 5,
    question: "Job Opportunities",
    keywords: ["jobs", "careers", "hiring", "work", "application"],
    answer:
      "We are always looking for industry talent. Please check our 'Careers' page for current openings in engineering and administration.",
  },
];

const QUICK_ACTIONS = [
  { label: "Our Services", prompt: "What do you do?" },
  { label: "Investment Info", prompt: "How can I invest?" },
  { label: "Contact Office", prompt: "Where are you located?" },
] as const;

const INITIAL_MESSAGE: ChatMessage = {
  id: 1,
  role: "bot",
  text: "Hello, I am PetroWave Assistant. Ask me about our services, location, investments, ESG, or careers.",
};

const STOP_WORDS = new Set([
  "a",
  "an",
  "and",
  "are",
  "at",
  "be",
  "can",
  "for",
  "from",
  "how",
  "i",
  "in",
  "is",
  "me",
  "my",
  "of",
  "on",
  "or",
  "our",
  "please",
  "the",
  "to",
  "we",
  "what",
  "where",
  "you",
  "your",
]);

function normalizeText(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenize(value: string): string[] {
  return normalizeText(value)
    .split(" ")
    .filter((token) => token.length > 1 && !STOP_WORDS.has(token));
}

const SITE_SEARCH_DOCUMENTS: SearchDocument[] = [
  ...PETROWAVE_KNOWLEDGE_BASE.map((entry) => ({
    id: `kb-${entry.id}`,
    title: entry.question,
    body: `${entry.answer} ${entry.keywords.join(" ")}`,
    tokens: tokenize(
      `${entry.question} ${entry.answer} ${entry.keywords.join(" ")}`,
    ),
  })),
  ...Object.entries(subPageContent).map(([href, content]) => {
    const title = content.title.replace(" | PetrolLink", "");
    const body = `${content.heading}. ${content.intro} ${content.highlights.join(" ")}`;

    return {
      id: `page-${href}`,
      title,
      body,
      href,
      tokens: tokenize(`${title} ${body}`),
    };
  }),
  ...navGroups.flatMap((group) =>
    group.items.map((item) => ({
      id: `nav-${item.href}`,
      title: item.label,
      body: `${group.label} ${item.label}`,
      href: item.href,
      tokens: tokenize(`${group.label} ${item.label}`),
    })),
  ),
  ...topLevelLinks.map((link) => ({
    id: `top-${link.href}`,
    title: link.label,
    body: link.label,
    href: link.href,
    tokens: tokenize(link.label),
  })),
];

function buildBotReply(input: string): ChatMessage {
  const normalizedInput = input.toLowerCase();
  const queryTokens = tokenize(input);

  const match = PETROWAVE_KNOWLEDGE_BASE.find((entry) =>
    entry.keywords.some((keyword) => normalizedInput.includes(keyword)),
  );

  if (match) {
    return {
      id: Date.now() + 1,
      role: "bot",
      text: match.answer,
    };
  }

  const ranked = SITE_SEARCH_DOCUMENTS.map((doc) => {
    let score = 0;
    const normalizedTitle = normalizeText(doc.title);
    const normalizedBody = normalizeText(doc.body);
    const titleTokens = new Set(tokenize(doc.title));

    queryTokens.forEach((token) => {
      if (titleTokens.has(token)) {
        score += 4;
      }

      if (doc.tokens.includes(token)) {
        score += 2;
      }

      if (normalizedBody.includes(token)) {
        score += 1;
      }
    });

    if (
      normalizedInput.length > 7 &&
      normalizedBody.includes(normalizedInput)
    ) {
      score += 5;
    }

    if (
      normalizedInput.length > 7 &&
      normalizedTitle.includes(normalizedInput)
    ) {
      score += 6;
    }

    return { doc, score };
  }).sort((a, b) => b.score - a.score);

  const best = ranked[0];
  const minimumScore = queryTokens.length >= 3 ? 3 : 2;

  if (best && best.score >= minimumScore) {
    const shortAnswer =
      best.doc.body.length > 220
        ? `${best.doc.body.slice(0, 220).trimEnd()}...`
        : best.doc.body;

    return {
      id: Date.now() + 1,
      role: "bot",
      text: `I found a likely match: ${best.doc.title}. ${shortAnswer}`,
      ctaHref: best.doc.href,
      ctaLabel: best.doc.href ? "Open related page" : undefined,
    };
  }

  return {
    id: Date.now() + 1,
    role: "bot",
    text: "I couldn't find a specific match for that. Would you like me to redirect you to our Contact Team?",
    ctaHref: "/contact",
    ctaLabel: "Go to Contact Team",
  };
}

export function KnowledgeAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasEverOpened, setHasEverOpened] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const endRef = useRef<HTMLDivElement | null>(null);

  const hasUserInteraction = useMemo(
    () => messages.some((message) => message.role === "user"),
    [messages],
  );

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, isOpen]);

  const sendMessage = (rawInput: string) => {
    const trimmedInput = rawInput.trim();
    if (!trimmedInput) {
      return;
    }

    const userMessage: ChatMessage = {
      id: Date.now(),
      role: "user",
      text: trimmedInput,
    };

    const botReply = buildBotReply(trimmedInput);
    setMessages((prev) => [...prev, userMessage, botReply]);
    setInput("");
  };

  return (
    <>
      <motion.button
        type="button"
        onClick={() => {
          setIsOpen((prev) => {
            const next = !prev;
            if (next && !hasEverOpened) {
              setHasEverOpened(true);
            }
            return next;
          });
        }}
        aria-label="Toggle PetroWave Assistant"
        animate={
          hasEverOpened
            ? { y: 0, scale: 1 }
            : { y: [0, -2, 0], scale: [1, 1.03, 1] }
        }
        transition={
          hasEverOpened
            ? { duration: 0.2 }
            : {
                duration: 1.8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }
        }
        className="fixed bottom-5 left-4 z-70 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#f47a30] text-white shadow-lg transition hover:bg-[#dc6d29] sm:bottom-6 sm:left-6"
      >
        <MessageSquare className="h-6 w-6" />
      </motion.button>

      <AnimatePresence>
        {isOpen ? (
          <motion.section
            key="assistant-window"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed bottom-24 left-4 z-70 flex h-[min(70dvh,34rem)] w-[min(22rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-2xl sm:bottom-24 sm:left-6 sm:h-[min(36rem,calc(100dvh-8rem))] sm:w-[min(24rem,calc(100vw-3rem))]"
          >
            <header className="flex items-center justify-between bg-[#132640] px-4 py-3 text-white">
              <div className="flex items-center gap-2">
                <span className="relative h-7 w-7 overflow-hidden rounded-full border border-white/20 bg-white/10">
                  <Image
                    src="/petrowave-logo.png"
                    alt="PetroWave logo symbol"
                    fill
                    className="object-cover"
                    sizes="28px"
                  />
                </span>
                <h3 className="text-sm font-semibold tracking-tight">
                  PetroWave Assistant
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close assistant"
                className="rounded-md p-1 text-white/85 transition hover:bg-white/10 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </header>

            <div className="flex-1 overflow-y-auto px-3 py-3">
              {!hasUserInteraction ? (
                <div className="mb-3 flex gap-2 overflow-x-auto pb-1">
                  {QUICK_ACTIONS.map((chip) => (
                    <button
                      key={chip.label}
                      type="button"
                      onClick={() => sendMessage(chip.prompt)}
                      className="shrink-0 rounded-full border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold tracking-tight text-slate-700 transition hover:border-slate-400 hover:bg-slate-100"
                    >
                      {chip.label}
                    </button>
                  ))}
                </div>
              ) : null}

              <div className="space-y-2">
                {messages.map((message) => (
                  <article
                    key={message.id}
                    className={
                      message.role === "user"
                        ? "ml-auto max-w-[85%] rounded-xl bg-[#132640] px-3 py-2 text-sm tracking-tight text-white"
                        : "mr-auto max-w-[90%] rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm tracking-tight text-slate-800"
                    }
                  >
                    <p>{message.text}</p>
                    {message.ctaHref && message.ctaLabel ? (
                      <Link
                        href={message.ctaHref}
                        onClick={() => setIsOpen(false)}
                        className="mt-2 inline-flex text-xs font-semibold text-[#132640] underline underline-offset-2"
                      >
                        {message.ctaLabel}
                      </Link>
                    ) : null}
                  </article>
                ))}
                <div ref={endRef} />
              </div>
            </div>

            <form
              className="border-t border-slate-200 bg-white p-3"
              onSubmit={(event) => {
                event.preventDefault();
                sendMessage(input);
              }}
            >
              <div className="flex items-center gap-2">
                <input
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Ask about services, ESG, careers..."
                  className="h-10 w-full rounded-xl border border-slate-300 bg-slate-50 px-3 text-sm tracking-tight text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-500"
                />
                <button
                  type="submit"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white transition hover:bg-slate-800"
                  aria-label="Send message"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </form>
          </motion.section>
        ) : null}
      </AnimatePresence>
    </>
  );
}
