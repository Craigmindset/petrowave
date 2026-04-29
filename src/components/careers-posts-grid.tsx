"use client";

import { useEffect, useMemo, useState } from "react";
import { X } from "lucide-react";
import { AnimatedReveal } from "@/components/animated-reveal";

type CareerPost = {
  id: string;
  title: string;
  description: string;
  closing_date: string;
};

function truncateToWords(text: string, limit: number): string {
  const words = text.trim().split(/\s+/);
  if (words.length <= limit) {
    return text;
  }

  return `${words.slice(0, limit).join(" ")}...`;
}

export function CareersPostsGrid({ roles }: { roles: CareerPost[] }) {
  const [selectedRoleId, setSelectedRoleId] = useState<string | null>(null);

  const selectedRole = useMemo(
    () => roles.find((role) => role.id === selectedRoleId) ?? null,
    [roles, selectedRoleId],
  );

  useEffect(() => {
    if (!selectedRole) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedRoleId(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedRole]);

  return (
    <>
      <div className="grid items-stretch gap-5 md:grid-cols-2">
        {roles.map((role, index) => (
          <AnimatedReveal key={role.id} delay={index * 0.06}>
            <button
              type="button"
              onClick={() => setSelectedRoleId(role.id)}
              className="flex h-full min-w-0 w-full max-w-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-4 text-left transition hover:border-slate-300 hover:bg-slate-100 sm:p-5"
            >
              <h2
                className="text-base font-semibold tracking-[-0.015em] text-[#11253f] sm:text-lg sm:tracking-[-0.02em]"
                style={{ overflowWrap: "anywhere", wordBreak: "break-word" }}
              >
                {role.title}
              </h2>
              <p
                className="mt-2 max-h-24 overflow-hidden text-sm leading-6 tracking-[-0.01em] text-slate-700"
                style={{ overflowWrap: "anywhere", wordBreak: "break-word" }}
              >
                {truncateToWords(role.description, 20)}
              </p>
              <p
                className="mt-auto pt-4 text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500 sm:text-xs sm:tracking-[0.12em]"
                style={{ overflowWrap: "anywhere", wordBreak: "break-word" }}
              >
                Closing Date: {new Date(role.closing_date).toLocaleDateString()}
              </p>
            </button>
          </AnimatedReveal>
        ))}
      </div>

      {selectedRole ? (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center bg-black/55 px-4 py-6 backdrop-blur-[2px]"
          onClick={() => setSelectedRoleId(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Career role details"
        >
          <article
            className="max-h-[85vh] w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <header className="sticky top-0 flex items-start justify-between gap-4 border-b border-slate-200 bg-white px-5 py-4 sm:px-6">
              <h3 className="text-xl font-semibold tracking-tight text-[#11253f] sm:text-2xl">
                {selectedRole.title}
              </h3>
              <button
                type="button"
                onClick={() => setSelectedRoleId(null)}
                aria-label="Close role details"
                className="rounded-md p-1 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
              >
                <X className="h-5 w-5" />
              </button>
            </header>

            <div className="max-h-[calc(85vh-76px)] overflow-y-auto px-5 py-5 sm:px-6 sm:py-6">
              <p
                className="whitespace-pre-line text-sm leading-7 tracking-tight text-slate-700 sm:text-base"
                style={{ overflowWrap: "anywhere", wordBreak: "break-word" }}
              >
                {selectedRole.description}
              </p>

              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                Closing Date:{" "}
                {new Date(selectedRole.closing_date).toLocaleDateString()}
              </p>
            </div>
          </article>
        </div>
      ) : null}
    </>
  );
}
