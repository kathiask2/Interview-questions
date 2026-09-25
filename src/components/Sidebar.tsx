"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { categories } from "@/content";

const nav = [
  { href: "/", label: "Overview", id: "home" },
  ...categories.map((c) => ({
    href: `/${c.id}`,
    label: c.shortTitle,
    id: c.id,
    count: c.items.length,
  })),
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="slide-nav flex w-full flex-col gap-6 border-b border-line bg-mist/70 px-5 py-6 backdrop-blur-sm md:sticky md:top-0 md:h-screen md:w-56 md:shrink-0 md:border-b-0 md:border-r md:overflow-y-auto lg:w-64">
      <Link href="/" className="group block">
        <p className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-ink transition-colors group-hover:text-accent">
          PrepNotes
        </p>
        <p className="mt-1 text-xs uppercase tracking-[0.18em] text-ink-soft/80">
          Interview desk
        </p>
      </Link>

      <nav className="flex gap-1 overflow-x-auto pb-1 md:flex-col md:overflow-visible md:pb-0">
        {nav.map((item) => {
          const active =
            item.href === "/"
              ? pathname === "/"
              : pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <Link
              key={item.id}
              href={item.href}
              className={`shrink-0 rounded-md px-3 py-2 text-sm whitespace-nowrap transition-colors ${
                active
                  ? "bg-accent text-white"
                  : "text-ink-soft hover:bg-highlight hover:text-ink"
              }`}
            >
              <span className="font-medium">{item.label}</span>
              {"count" in item && item.count != null ? (
                <span
                  className={`ml-2 text-xs ${active ? "text-white/80" : "text-ink-soft/60"}`}
                >
                  {item.count}
                </span>
              ) : null}
            </Link>
          );
        })}
      </nav>

      <p className="mt-auto hidden text-xs leading-relaxed text-ink-soft/70 md:block">
        Node/JS · React · CSS · SQL/Mongo · Problems — skim by section or search.
      </p>
    </aside>
  );
}
