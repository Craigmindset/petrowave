"use client";

import * as Accordion from "@radix-ui/react-accordion";
import * as Dialog from "@radix-ui/react-dialog";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navGroups, topLevelLinks } from "@/lib/site-data";
import { cn } from "@/lib/utils";

function DesktopNav() {
  const pathname = usePathname();

  return (
    <NavigationMenu.Root className="relative hidden lg:block">
      <NavigationMenu.List className="flex items-center gap-2">
        {topLevelLinks.slice(0, 1).map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={cn(
                "rounded-full px-3 py-2 text-sm font-medium tracking-[-0.02em] text-white/90 transition hover:bg-white/10 hover:text-white",
                pathname === link.href && "bg-white/10 text-white",
              )}
            >
              {link.label}
            </Link>
          </li>
        ))}

        {navGroups.map((group) => (
          <NavigationMenu.Item key={group.label} className="relative">
            <NavigationMenu.Trigger className="group inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium tracking-[-0.02em] text-white/90 transition hover:bg-white/10 hover:text-white data-[state=open]:bg-white/10 data-[state=open]:text-white">
              {group.label}
              <ChevronDown className="size-4 transition group-data-[state=open]:rotate-180" />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="absolute left-0 top-full mt-2 w-[300px]">
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 6, scale: 0.98 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="rounded-2xl border border-white/20 bg-[#0f1f35]/95 p-3 shadow-xl shadow-[#08101c]/30 backdrop-blur-xl"
              >
                <ul className="space-y-1">
                  {group.items.map((item) => {
                    const active = pathname === item.href;

                    return (
                      <li key={item.href}>
                        <NavigationMenu.Link asChild>
                          <Link
                            href={item.href}
                            className={cn(
                              "block rounded-xl px-3 py-2 text-sm tracking-[-0.015em] text-slate-100 transition hover:bg-white/10",
                              active && "bg-white/10 text-white",
                            )}
                          >
                            {item.label}
                          </Link>
                        </NavigationMenu.Link>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
        ))}

        {topLevelLinks.slice(1).map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={cn(
                "rounded-full px-3 py-2 text-sm font-medium tracking-[-0.02em] text-white/90 transition hover:bg-white/10 hover:text-white",
                pathname === link.href && "bg-white/10 text-white",
              )}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}

function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 p-2 text-white backdrop-blur lg:hidden">
        <span className="sr-only">Toggle menu</span>
        <Menu className="size-5" />
      </Dialog.Trigger>

      <AnimatePresence>
        {open ? (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                className="fixed inset-0 z-40 bg-[#02060bcc] backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
            </Dialog.Overlay>
            <Dialog.Content asChild>
              <motion.aside
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 320, damping: 34 }}
                className="fixed right-0 top-0 z-50 flex h-dvh w-[70vw] max-w-[70vw] flex-col overflow-y-auto border-l border-white/10 bg-[#0a1628] p-6"
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-lg font-semibold tracking-[-0.02em] text-white">
                    PetrolLink
                  </span>
                  <Dialog.Close className="rounded-full border border-white/20 p-2 text-white">
                    <X className="size-4" />
                    <span className="sr-only">Close menu</span>
                  </Dialog.Close>
                </div>

                <nav className="flex flex-col gap-2">
                  <Link
                    href="/"
                    onClick={() => setOpen(false)}
                    className={cn(
                      "rounded-xl px-3 py-2 text-sm font-medium tracking-[-0.01em] text-slate-100",
                      pathname === "/" && "bg-white/10",
                    )}
                  >
                    Home
                  </Link>

                  <Accordion.Root type="multiple" className="space-y-2">
                    {navGroups.map((group) => (
                      <Accordion.Item
                        key={group.label}
                        value={group.label}
                        className="overflow-hidden rounded-xl border border-white/10"
                      >
                        <Accordion.Header>
                          <Accordion.Trigger className="group flex w-full items-center justify-between px-3 py-3 text-left text-sm font-medium tracking-[-0.01em] text-slate-50">
                            {group.label}
                            <ChevronDown className="size-4 transition group-data-[state=open]:rotate-180" />
                          </Accordion.Trigger>
                        </Accordion.Header>
                        <Accordion.Content className="border-t border-white/10 bg-white/[0.02] px-2 py-2">
                          <ul className="space-y-1">
                            {group.items.map((item) => (
                              <li key={item.href}>
                                <Link
                                  href={item.href}
                                  onClick={() => setOpen(false)}
                                  className={cn(
                                    "block rounded-lg px-2 py-2 text-sm tracking-[-0.01em] text-slate-200",
                                    pathname === item.href &&
                                      "bg-white/10 text-white",
                                  )}
                                >
                                  {item.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </Accordion.Content>
                      </Accordion.Item>
                    ))}
                  </Accordion.Root>

                  {topLevelLinks.slice(1).map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "rounded-xl px-3 py-2 text-sm font-medium tracking-[-0.01em] text-slate-100",
                        pathname === link.href && "bg-white/10",
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-[#f47a30] px-4 py-3 text-sm font-semibold tracking-[-0.015em] text-[#1b2434] transition hover:bg-[#ff8a3d]"
                >
                  Request A Quote
                </Link>
              </motion.aside>
            </Dialog.Content>
          </Dialog.Portal>
        ) : null}
      </AnimatePresence>
    </Dialog.Root>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/15 bg-[#071325]/65 backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-2">
          <span className="inline-block size-2 rounded-full bg-[#f47a30]" />
          <span className="text-lg font-semibold tracking-[-0.03em] text-white">
            PetrolLink
          </span>
        </Link>

        <DesktopNav />

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full border border-[#f47a30] bg-[#f47a30] px-4 py-2 text-sm font-semibold tracking-[-0.015em] text-[#1a2434] transition hover:bg-[#ff8a3d]"
          >
            Request A Quote
          </Link>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
