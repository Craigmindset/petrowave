"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";
import { isSupabaseConfigured, supabase } from "@/lib/supabase";

type CareerPost = {
  id: string;
  title: string;
  description: string;
  closing_date: string;
};

export default function CareerPostPreviewPage() {
  const [posts, setPosts] = useState<CareerPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDeletingId, setIsDeletingId] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  const loadPosts = async () => {
    if (!isSupabaseConfigured) {
      setToast("Supabase is not configured.");
      setIsLoading(false);
      return;
    }

    const { data, error } = await supabase
      .from("career_posts")
      .select("id,title,description,closing_date")
      .order("created_at", { ascending: false });

    if (error) {
      setToast(`Failed to load posts: ${error.message}`);
      setIsLoading(false);
      return;
    }

    setPosts(data ?? []);
    setIsLoading(false);
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const handleDelete = async (id: string) => {
    setIsDeletingId(id);

    const { error } = await supabase.from("career_posts").delete().eq("id", id);

    if (error) {
      setToast(`Delete failed: ${error.message}`);
      setIsDeletingId(null);
      setTimeout(() => setToast(null), 2400);
      return;
    }

    setPosts((prev) => prev.filter((post) => post.id !== id));
    setIsDeletingId(null);
    setToast("Post deleted successfully");
    setTimeout(() => setToast(null), 1800);
  };

  return (
    <article className="min-w-0 overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="min-w-0 max-w-full">
          <h2 className="text-2xl font-semibold tracking-tight text-[#132640]">
            Career Post Preview
          </h2>
          <p className="mt-2 text-sm leading-7 tracking-tight text-slate-600 sm:text-base">
            Review published entries and remove any post instantly from the
            database.
          </p>
        </div>

        <Link
          href="/admin/dashboard/career-post"
          className="inline-flex w-full items-center justify-center rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold tracking-tight text-slate-700 transition hover:bg-slate-50 sm:w-auto"
        >
          Back to Career Form
        </Link>
      </div>

      {toast ? (
        <p className="mt-4 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium tracking-tight text-slate-700">
          {toast}
        </p>
      ) : null}

      {isLoading ? (
        <p className="mt-6 text-sm tracking-tight text-slate-600">Loading posts...</p>
      ) : null}

      {!isLoading && posts.length === 0 ? (
        <article className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <h3 className="text-lg font-semibold tracking-tight text-[#132640]">
            No career posts yet
          </h3>
          <p className="mt-2 text-sm leading-6 tracking-tight text-slate-600">
            Once you create career posts, they will appear here for preview and
            deletion.
          </p>
        </article>
      ) : null}

      {!isLoading && posts.length > 0 ? (
        <div className="mt-6 grid gap-4">
          {posts.map((post) => (
            <article
              key={post.id}
              className="max-w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <h3
                    className="text-base font-semibold tracking-tight text-[#132640] sm:text-lg"
                    style={{ overflowWrap: "anywhere", wordBreak: "break-word" }}
                  >
                    {post.title}
                  </h3>
                  <p
                    className="mt-2 line-clamp-3 text-sm leading-6 tracking-tight text-slate-700"
                    style={{ overflowWrap: "anywhere", wordBreak: "break-word" }}
                  >
                    {post.description}
                  </p>
                  <p
                    className="mt-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500 sm:text-xs sm:tracking-[0.12em]"
                    style={{ overflowWrap: "anywhere", wordBreak: "break-word" }}
                  >
                    Closing Date: {new Date(post.closing_date).toLocaleDateString()}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => handleDelete(post.id)}
                  disabled={isDeletingId === post.id}
                  className="inline-flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm font-semibold tracking-tight text-red-700 transition hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <Trash2 className="h-4 w-4" />
                  {isDeletingId === post.id ? "Deleting..." : "Delete"}
                </button>
              </div>
            </article>
          ))}
        </div>
      ) : null}
    </article>
  );
}
