"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import { Menu, PanelLeftClose, PanelLeftOpen, X } from "lucide-react";
import { isSupabaseConfigured, supabase } from "@/lib/supabase";

const menuItems = [
  { label: "Career Post", href: "/admin/dashboard/career-post" },
  { label: "Media Post", href: "/admin/dashboard/media-post" },
  { label: "Blog Post", href: "/admin/dashboard/blog-post" },
  { label: "Settings", href: "/admin/dashboard/settings" },
];

export default function AdminDashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [isChecking, setIsChecking] = useState(true);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [userEmail, setUserEmail] = useState<string>("admin@petrowave.com");

  useEffect(() => {
    const verifySession = async () => {
      if (!isSupabaseConfigured) {
        router.replace("/admin/login");
        return;
      }

      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        router.replace("/admin/login");
        return;
      }

      setUserEmail(session.user.email ?? "admin@petrowave.com");

      setIsChecking(false);
    };

    verifySession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        router.replace("/admin/login");
      }
    });

    return () => subscription.unsubscribe();
  }, [router]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.replace("/admin/login");
  };

  if (isChecking) {
    return (
      <main className="grid min-h-screen place-items-center bg-slate-100 px-6">
        <p className="text-sm font-medium tracking-tight text-slate-600">
          Checking authentication...
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#eef3f7]">
      <div className="mx-auto grid min-h-screen w-full max-w-[1600px] lg:grid-cols-[auto_1fr]">
        <aside
          className={`fixed inset-y-0 left-0 z-40 border-r border-slate-200 bg-white shadow-xl transition-transform duration-300 lg:sticky lg:top-0 lg:translate-x-0 lg:shadow-none ${
            sidebarCollapsed ? "w-[92px]" : "w-[280px]"
          } ${mobileNavOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
        >
          <div className="flex h-full flex-col p-4">
            <div className="mb-4 flex items-center justify-between gap-2">
              <div className={`${sidebarCollapsed ? "hidden" : "block"}`}>
                <h1 className="text-lg font-semibold tracking-tight text-[#132640]">
                  Admin Dashboard
                </h1>
                <p className="text-xs uppercase tracking-[0.12em] text-slate-500">
                  PetroWave Energy Limited
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSidebarCollapsed((prev) => !prev)}
                className="hidden rounded-lg border border-slate-200 p-2 text-slate-600 transition hover:bg-slate-100 lg:inline-flex"
                aria-label="Toggle sidebar"
              >
                {sidebarCollapsed ? (
                  <PanelLeftOpen className="h-4 w-4" />
                ) : (
                  <PanelLeftClose className="h-4 w-4" />
                )}
              </button>

              <button
                type="button"
                onClick={() => setMobileNavOpen(false)}
                className="inline-flex rounded-lg border border-slate-200 p-2 text-slate-600 transition hover:bg-slate-100 lg:hidden"
                aria-label="Close menu"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <nav className="space-y-2">
              <Link
                href="/admin/dashboard"
                onClick={() => setMobileNavOpen(false)}
                className={`flex rounded-xl px-3 py-2.5 text-sm font-medium tracking-tight transition ${
                  pathname === "/admin/dashboard"
                    ? "bg-[#132640] text-white"
                    : "text-slate-700 hover:bg-slate-100"
                } ${sidebarCollapsed ? "justify-center" : "justify-start"}`}
              >
                <span className={`${sidebarCollapsed ? "hidden" : "block"}`}>
                  Overview
                </span>
                <span className={`${sidebarCollapsed ? "block" : "hidden"}`}>
                  OV
                </span>
              </Link>

              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileNavOpen(false)}
                  className={`flex rounded-xl px-3 py-2.5 text-sm font-medium tracking-tight transition ${
                    pathname === item.href
                      ? "bg-[#132640] text-white"
                      : "text-slate-700 hover:bg-slate-100"
                  } ${sidebarCollapsed ? "justify-center" : "justify-start"}`}
                >
                  <span className={`${sidebarCollapsed ? "hidden" : "block"}`}>
                    {item.label}
                  </span>
                  <span className={`${sidebarCollapsed ? "block" : "hidden"}`}>
                    {item.label.slice(0, 1)}
                  </span>
                </Link>
              ))}
            </nav>

            <button
              type="button"
              onClick={handleSignOut}
              className="mt-auto inline-flex w-full items-center justify-center rounded-xl bg-black px-4 py-2.5 text-sm font-semibold tracking-tight text-white transition hover:bg-slate-800"
            >
              {sidebarCollapsed ? "Out" : "Sign out"}
            </button>
          </div>
        </aside>

        <div className="min-w-0">
          <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 px-4 py-3 backdrop-blur sm:px-6">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setMobileNavOpen(true)}
                  className="inline-flex rounded-lg border border-slate-200 p-2 text-slate-600 transition hover:bg-slate-100 lg:hidden"
                  aria-label="Open menu"
                >
                  <Menu className="h-4 w-4" />
                </button>
                <div>
                  <h2 className="text-base font-semibold tracking-tight text-[#132640] sm:text-lg">
                    Admin Workspace
                  </h2>
                  <p className="text-xs tracking-tight text-slate-500">
                    Manage careers, media, blogs, and user settings
                  </p>
                </div>
              </div>

              <div className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium tracking-tight text-slate-600 sm:text-sm">
                {userEmail}
              </div>
            </div>
          </header>

          <section className="p-4 sm:p-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              {children}
            </div>
          </section>
        </div>
      </div>

      {mobileNavOpen ? (
        <button
          type="button"
          aria-label="Close menu backdrop"
          onClick={() => setMobileNavOpen(false)}
          className="fixed inset-0 z-30 bg-black/25 lg:hidden"
        />
      ) : null}
    </main>
  );
}
