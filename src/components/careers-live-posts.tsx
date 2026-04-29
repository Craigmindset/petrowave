"use client";

import { useEffect, useState } from "react";
import { CareersPostsGrid } from "@/components/careers-posts-grid";
import { isSupabaseConfigured, supabase } from "@/lib/supabase";

type CareerPost = {
  id: string;
  title: string;
  description: string;
  closing_date: string;
};

type CareersLivePostsProps = {
  initialRoles: CareerPost[];
  initialError?: string | null;
};

export function CareersLivePosts({
  initialRoles,
  initialError = null,
}: CareersLivePostsProps) {
  const [roles, setRoles] = useState<CareerPost[]>(initialRoles);
  const [loadError, setLoadError] = useState<string | null>(initialError);

  useEffect(() => {
    if (!isSupabaseConfigured) {
      setLoadError("Supabase is not configured.");
      return;
    }

    let mounted = true;

    const fetchRoles = async () => {
      const { data, error } = await supabase
        .from("career_posts")
        .select("id,title,description,closing_date")
        .order("created_at", { ascending: false });

      if (!mounted) {
        return;
      }

      if (error) {
        setLoadError(error.message);
        return;
      }

      setLoadError(null);
      setRoles(data ?? []);
    };

    const channel = supabase
      .channel("career-posts-live-channel")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "career_posts" },
        () => {
          fetchRoles();
        },
      )
      .subscribe();

    fetchRoles();

    return () => {
      mounted = false;
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <>
      {loadError ? (
        <article className="mb-5 rounded-2xl border border-amber-300 bg-amber-50 p-4">
          <h2 className="text-sm font-semibold tracking-tight text-amber-800">
            Unable to load career posts
          </h2>
          <p className="mt-1 text-sm leading-6 tracking-tight text-amber-700">
            {loadError}
          </p>
        </article>
      ) : null}

      {roles.length > 0 ? (
        <CareersPostsGrid roles={roles} />
      ) : (
        <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-lg font-semibold tracking-[-0.02em] text-[#11253f]">
            No open roles yet
          </h2>
          <p className="mt-2 text-sm leading-6 tracking-[-0.01em] text-slate-700">
            New opportunities will appear here as soon as they are published.
          </p>
        </article>
      )}
    </>
  );
}
