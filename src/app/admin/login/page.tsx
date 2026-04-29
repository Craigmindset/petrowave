"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { isSupabaseConfigured, supabase } from "@/lib/supabase";

type LoginState = {
  email: string;
  password: string;
};

const initialState: LoginState = {
  email: "",
  password: "",
};

export default function AdminLoginPage() {
  const router = useRouter();
  const [form, setForm] = useState<LoginState>(initialState);
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session) {
        router.replace("/admin/dashboard");
      }
    };

    checkSession();
  }, [router]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isSupabaseConfigured) {
      setError(
        "Supabase is not configured. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to your .env file.",
      );
      return;
    }

    setIsSubmitting(true);
    setError(null);

    const { error: signInError } = await supabase.auth.signInWithPassword({
      email: form.email.trim(),
      password: form.password,
    });

    if (signInError) {
      setError(signInError.message);
      setIsSubmitting(false);
      return;
    }

    router.replace("/admin/dashboard");
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#071325] px-6 py-12 text-white sm:py-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_20%,rgba(244,122,48,0.32),transparent_35%),radial-gradient(circle_at_90%_90%,rgba(255,255,255,0.12),transparent_40%)]" />

      <section className="mx-auto w-full max-w-md rounded-3xl border border-white/15 bg-white/8 p-6 backdrop-blur-xl sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#ffb082]">
          Admin Portal
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">
          Welcome back
        </h1>
        <p className="mt-2 text-sm tracking-tight text-slate-200">
          Sign in with your admin email and password to access the dashboard.
        </p>

        <form className="mt-7 space-y-4" onSubmit={handleSubmit}>
          <label className="block space-y-2 text-sm font-medium tracking-tight text-slate-100">
            Email address
            <input
              required
              type="email"
              value={form.email}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, email: event.target.value }))
              }
              className="h-11 w-full rounded-xl border border-white/20 bg-white/10 px-3 text-sm text-white outline-none transition placeholder:text-white/50 focus:border-[#ffb082]"
              placeholder="admin@petrowave.com"
            />
          </label>

          <label className="block space-y-2 text-sm font-medium tracking-tight text-slate-100">
            Password
            <div className="flex h-11 w-full items-center rounded-xl border border-white/20 bg-white/10 pr-2 focus-within:border-[#ffb082]">
              <input
                required
                type={showPassword ? "text" : "password"}
                value={form.password}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, password: event.target.value }))
                }
                className="h-full w-full bg-transparent px-3 text-sm text-white outline-none placeholder:text-white/50"
                placeholder="Enter password"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="rounded-md px-2 py-1 text-xs font-semibold tracking-tight text-slate-200 transition hover:bg-white/10 hover:text-white"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </label>

          {error ? (
            <p className="rounded-xl border border-red-300/50 bg-red-900/30 px-3 py-2 text-sm tracking-tight text-red-100">
              {error}
            </p>
          ) : null}

          <motion.button
            type="submit"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.99 }}
            disabled={isSubmitting}
            className="inline-flex w-full items-center justify-center rounded-xl bg-[#f47a30] px-4 py-3 text-sm font-semibold tracking-tight text-[#0e1b2f] transition hover:bg-[#ff8a3d] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Signing in..." : "Sign in"}
          </motion.button>
        </form>

        <Link
          href="/"
          className="mt-5 inline-flex text-sm font-medium tracking-tight text-slate-200 underline-offset-4 transition hover:text-white hover:underline"
        >
          Back to website
        </Link>
      </section>
    </main>
  );
}
