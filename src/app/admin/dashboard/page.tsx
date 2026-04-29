"use client";

import { useEffect, useState } from "react";
import { isSupabaseConfigured, supabase } from "@/lib/supabase";

type Counts = {
  career: number;
  blog: number;
  media: number;
};

const initialCounts: Counts = {
  career: 0,
  blog: 0,
  media: 0,
};

export default function AdminDashboardHomePage() {
  const [counts, setCounts] = useState<Counts>(initialCounts);
  const [countError, setCountError] = useState<string | null>(null);

  useEffect(() => {
    const updateCounts = async () => {
      if (!isSupabaseConfigured) {
        setCountError("Supabase is not configured.");
        setCounts(initialCounts);
        return;
      }

      const [careerResult, blogResult, mediaResult] = await Promise.all([
        supabase
          .from("career_posts")
          .select("id", { count: "exact", head: true }),
        supabase
          .from("blog_posts")
          .select("id", { count: "exact", head: true }),
        supabase
          .from("media_posts")
          .select("id", { count: "exact", head: true }),
      ]);

      if (careerResult.error || blogResult.error || mediaResult.error) {
        setCountError(
          careerResult.error?.message ||
            blogResult.error?.message ||
            mediaResult.error?.message ||
            "Unable to load dashboard counts.",
        );
        return;
      }

      setCountError(null);
      setCounts({
        career: careerResult.count ?? 0,
        blog: blogResult.count ?? 0,
        media: mediaResult.count ?? 0,
      });
    };

    updateCounts();
    window.addEventListener(
      "admin-posts-updated",
      updateCounts as EventListener,
    );

    return () => {
      window.removeEventListener(
        "admin-posts-updated",
        updateCounts as EventListener,
      );
    };
  }, []);

  const cards = [
    {
      label: "Career Posts",
      count: counts.career,
      tone: "from-[#1d4ed8] to-[#3b82f6]",
    },
    {
      label: "Blog Posts",
      count: counts.blog,
      tone: "from-[#7c3aed] to-[#a855f7]",
    },
    {
      label: "Media Posts",
      count: counts.media,
      tone: "from-[#ea580c] to-[#f97316]",
    },
  ];

  return (
    <article>
      <h2 className="text-2xl font-semibold tracking-tight text-[#132640]">
        Dashboard Overview
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-7 tracking-tight text-slate-600 sm:text-base">
        Track your publishing activity.
      </p>

      {countError ? (
        <p className="mt-4 rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm font-medium tracking-tight text-red-700">
          {countError}
        </p>
      ) : null}

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {cards.map((card) => (
          <article
            key={card.label}
            className={`rounded-2xl bg-linear-to-br ${card.tone} p-px`}
          >
            <div className="rounded-2xl bg-white/95 p-5 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                {card.label}
              </p>
              <p className="mt-3 text-4xl font-semibold tracking-tight text-[#132640]">
                {card.count}
              </p>
            </div>
          </article>
        ))}
      </div>
    </article>
  );
}
