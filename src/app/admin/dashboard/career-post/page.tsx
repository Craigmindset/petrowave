"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { isSupabaseConfigured, supabase } from "@/lib/supabase";

type CareerPost = {
  title: string;
  description: string;
  closingDate: string;
};

const initialForm: CareerPost = {
  title: "",
  description: "",
  closingDate: "",
};

export default function CareerPostPage() {
  const [form, setForm] = useState<CareerPost>(initialForm);
  const [toast, setToast] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const previewDescription = form.description
    .trim()
    .split(/\s+/)
    .slice(0, 20)
    .join(" ");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isSupabaseConfigured) {
      setToast("Supabase is not configured.");
      setTimeout(() => setToast(null), 2200);
      return;
    }

    setIsSubmitting(true);

    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { error } = await supabase.from("career_posts").insert({
      title: form.title,
      description: form.description,
      closing_date: form.closingDate,
      created_by: user?.id ?? null,
    });

    if (error) {
      setToast(`Failed: ${error.message}`);
      setIsSubmitting(false);
      setTimeout(() => setToast(null), 2600);
      return;
    }

    window.dispatchEvent(new Event("admin-posts-updated"));

    setToast("Submitted Successfully");
    setForm(initialForm);
    setIsSubmitting(false);
    setTimeout(() => setToast(null), 1800);
  };

  return (
    <article>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-[#132640]">
            Career Post
          </h2>
          <p className="mt-3 text-sm leading-7 tracking-tight text-slate-600 sm:text-base">
            Create a new vacancy with a live thumbnail preview before
            submission.
          </p>
        </div>

        <Link
          href="/admin/dashboard/career-post/preview"
          className="inline-flex items-center rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold tracking-tight text-slate-700 transition hover:bg-slate-50"
        >
          Preview Posts
        </Link>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block space-y-2 text-sm font-medium tracking-tight text-slate-700">
            Career Title
            <input
              required
              value={form.title}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, title: event.target.value }))
              }
              className="h-11 w-full rounded-xl border border-slate-300 bg-white px-3 text-sm text-slate-900 outline-none transition focus:border-slate-500"
            />
          </label>

          <label className="block space-y-2 text-sm font-medium tracking-tight text-slate-700">
            Career Description
            <textarea
              required
              rows={5}
              value={form.description}
              onChange={(event) =>
                setForm((prev) => ({
                  ...prev,
                  description: event.target.value,
                }))
              }
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-slate-500"
            />
          </label>

          <label className="block space-y-2 text-sm font-medium tracking-tight text-slate-700">
            Closing Date
            <input
              required
              type="date"
              value={form.closingDate}
              onChange={(event) =>
                setForm((prev) => ({
                  ...prev,
                  closingDate: event.target.value,
                }))
              }
              className="h-11 w-full rounded-xl border border-slate-300 bg-white px-3 text-sm text-slate-900 outline-none transition focus:border-slate-500"
            />
          </label>

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center rounded-xl bg-black px-5 py-3 text-sm font-semibold tracking-tight text-white transition hover:bg-slate-800"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>

          {toast ? (
            <p className="rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm font-medium tracking-tight text-emerald-700">
              {toast}
            </p>
          ) : null}
        </form>

        <aside className="w-full self-start justify-self-start rounded-2xl border border-slate-200 bg-slate-50 p-4 lg:max-w-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
            Thumbnail Preview
          </p>
          <article className="mt-3 h-75 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="h-24 bg-[linear-gradient(125deg,#132640,#1d4ed8)]" />
            <div className="space-y-2 p-4">
              <h3 className="line-clamp-2 text-base font-semibold tracking-tight text-[#132640]">
                {form.title || "Senior Operations Engineer"}
              </h3>
              <p className="line-clamp-3 text-sm leading-6 tracking-tight text-slate-600">
                {previewDescription ||
                  "Career description preview will appear here as you type."}
              </p>
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-slate-500">
                Closing: {form.closingDate || "Not set"}
              </p>
            </div>
          </article>
        </aside>
      </div>
    </article>
  );
}
