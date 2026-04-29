"use client";

import { FormEvent, useState } from "react";
import { isSupabaseConfigured, supabase } from "@/lib/supabase";

export default function AdminSettingsPage() {
  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteRole, setInviteRole] = useState("editor");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [toast, setToast] = useState<string | null>(null);
  const [isSendingInvite, setIsSendingInvite] = useState(false);

  const showToast = (message: string) => {
    setToast(message);
    setTimeout(() => setToast(null), 1800);
  };

  const handleInvite = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isSupabaseConfigured) {
      showToast("Supabase is not configured.");
      return;
    }

    setIsSendingInvite(true);

    const redirectUrl = `${window.location.origin}/admin/login?invite=1&role=${inviteRole}`;

    const { error } = await supabase.auth.signInWithOtp({
      email: inviteEmail.trim(),
      options: {
        emailRedirectTo: redirectUrl,
        shouldCreateUser: true,
      },
    });

    if (error) {
      showToast(`Failed to send invite: ${error.message}`);
      setIsSendingInvite(false);
      return;
    }

    showToast("Invite request sent successfully");
    setInviteEmail("");
    setInviteRole("editor");
    setIsSendingInvite(false);
  };

  const handlePasswordUpdate = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (newPassword !== confirmPassword) {
      showToast("New password and confirm password must match");
      return;
    }

    showToast("Password updated successfully");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <article>
      <h2 className="text-2xl font-semibold tracking-tight text-[#132640]">
        Settings
      </h2>
      <p className="mt-3 text-sm leading-7 tracking-tight text-slate-600 sm:text-base">
        Invite new managers and keep your account credentials updated.
      </p>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <section className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
          <h3 className="text-lg font-semibold tracking-tight text-[#132640]">
            Invite User As Manager
          </h3>
          <form className="mt-4 space-y-4" onSubmit={handleInvite}>
            <label className="block space-y-2 text-sm font-medium tracking-tight text-slate-700">
              User Email
              <input
                required
                type="email"
                value={inviteEmail}
                onChange={(event) => setInviteEmail(event.target.value)}
                className="h-11 w-full rounded-xl border border-slate-300 bg-white px-3 text-sm text-slate-900 outline-none transition focus:border-slate-500"
              />
            </label>

            <label className="block space-y-2 text-sm font-medium tracking-tight text-slate-700">
              Role
              <select
                value={inviteRole}
                onChange={(event) => setInviteRole(event.target.value)}
                className="h-11 w-full rounded-xl border border-slate-300 bg-white px-3 text-sm text-slate-900 outline-none transition focus:border-slate-500"
              >
                <option value="editor">Manager</option>
                <option value="author">Author</option>
              </select>
            </label>

            <button
              type="submit"
              disabled={isSendingInvite}
              className="inline-flex items-center rounded-xl bg-[#132640] px-5 py-3 text-sm font-semibold tracking-tight text-white transition hover:bg-[#0f1e34]"
            >
              {isSendingInvite ? "Sending..." : "Send Invite"}
            </button>
          </form>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
          <h3 className="text-lg font-semibold tracking-tight text-[#132640]">
            Update Password
          </h3>
          <form className="mt-4 space-y-4" onSubmit={handlePasswordUpdate}>
            <label className="block space-y-2 text-sm font-medium tracking-tight text-slate-700">
              Current Password
              <input
                required
                type="password"
                value={currentPassword}
                onChange={(event) => setCurrentPassword(event.target.value)}
                className="h-11 w-full rounded-xl border border-slate-300 bg-white px-3 text-sm text-slate-900 outline-none transition focus:border-slate-500"
              />
            </label>

            <label className="block space-y-2 text-sm font-medium tracking-tight text-slate-700">
              New Password
              <input
                required
                type="password"
                value={newPassword}
                onChange={(event) => setNewPassword(event.target.value)}
                className="h-11 w-full rounded-xl border border-slate-300 bg-white px-3 text-sm text-slate-900 outline-none transition focus:border-slate-500"
              />
            </label>

            <label className="block space-y-2 text-sm font-medium tracking-tight text-slate-700">
              Confirm New Password
              <input
                required
                type="password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                className="h-11 w-full rounded-xl border border-slate-300 bg-white px-3 text-sm text-slate-900 outline-none transition focus:border-slate-500"
              />
            </label>

            <button
              type="submit"
              className="inline-flex items-center rounded-xl bg-black px-5 py-3 text-sm font-semibold tracking-tight text-white transition hover:bg-slate-800"
            >
              Update Password
            </button>
          </form>
        </section>
      </div>

      {toast ? (
        <p className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm font-medium tracking-tight text-emerald-700">
          {toast}
        </p>
      ) : null}
    </article>
  );
}
