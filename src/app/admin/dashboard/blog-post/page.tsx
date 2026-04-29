"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { isSupabaseConfigured, supabase } from "@/lib/supabase";

type BlogPost = {
  title: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
};

const initialForm: BlogPost = {
  title: "",
  image: "",
  shortDescription: "",
  fullDescription: "",
};

export default function BlogPostPage() {
  const [form, setForm] = useState<BlogPost>(initialForm);
  const [toast, setToast] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

    const { error } = await supabase.from("blog_posts").insert({
      title: form.title,
      image_url: form.image,
      short_description: form.shortDescription,
      full_description: form.fullDescription,
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
      <h2 className="text-2xl font-semibold tracking-tight text-[#132640]">
        Blog Post
      </h2>
      <p className="mt-3 text-sm leading-7 tracking-tight text-slate-600 sm:text-base">
        Draft and publish blog entries with a structured preview.
      </p>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block space-y-2 text-sm font-medium tracking-tight text-slate-700">
            Blog Title
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
            Blog Image (URL)
            <input
              required
              value={form.image}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, image: event.target.value }))
              }
              placeholder="https://..."
              className="h-11 w-full rounded-xl border border-slate-300 bg-white px-3 text-sm text-slate-900 outline-none transition focus:border-slate-500"
            />
          </label>

          <label className="block space-y-2 text-sm font-medium tracking-tight text-slate-700">
            Short Description
            <textarea
              required
              rows={3}
              value={form.shortDescription}
              onChange={(event) =>
                setForm((prev) => ({
                  ...prev,
                  shortDescription: event.target.value,
                }))
              }
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-slate-500"
            />
          </label>

          <label className="block space-y-2 text-sm font-medium tracking-tight text-slate-700">
            Full Description
            <textarea
              required
              rows={5}
              value={form.fullDescription}
              onChange={(event) =>
                setForm((prev) => ({
                  ...prev,
                  fullDescription: event.target.value,
                }))
              }
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-slate-500"
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

        <aside className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
            Preview
          </p>
          <article className="mt-3 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="relative h-44 w-full bg-slate-200">
              {form.image ? (
                <Image
                  src={form.image}
                  alt={form.title || "Blog preview"}
                  fill
                  className="object-cover"
                />
              ) : null}
            </div>
            <div className="space-y-2 p-4">
              <h3 className="line-clamp-2 text-base font-semibold tracking-tight text-[#132640]">
                {form.title || "Blog post title"}
              </h3>
              <p className="line-clamp-2 text-sm leading-6 tracking-tight text-slate-600">
                {form.shortDescription || "Short description preview"}
              </p>
            </div>
          </article>
        </aside>
      </div>
    </article>
  );
}
