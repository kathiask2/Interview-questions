"use client";

import { useDeferredValue, useMemo, useState } from "react";
import Link from "next/link";
import { searchAll, type CategoryId } from "@/content";

type Props = {
  scope?: CategoryId;
  placeholder?: string;
};

export function SearchBox({
  scope,
  placeholder = "Search questions…",
}: Props) {
  const [q, setQ] = useState("");
  const deferred = useDeferredValue(q);
  const results = useMemo(() => {
    const all = searchAll(deferred);
    return scope ? all.filter((r) => r.category.id === scope) : all;
  }, [deferred, scope]);

  return (
    <div className="w-full">
      <label className="sr-only" htmlFor="prep-search">
        Search
      </label>
      <input
        id="prep-search"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-md border border-line bg-white/80 px-4 py-3 text-sm text-ink outline-none ring-accent/30 transition focus:ring-2"
      />
      {deferred.trim() ? (
        <ul className="mt-3 max-h-72 overflow-y-auto rounded-md border border-line bg-white shadow-sm">
          {results.length === 0 ? (
            <li className="px-4 py-3 text-sm text-ink-soft">No matches.</li>
          ) : (
            results.slice(0, 20).map(({ category, item }) => (
              <li key={`${category.id}-${item.id}`} className="border-b border-line last:border-0">
                <Link
                  href={`/${category.id}#${item.id}`}
                  className="block px-4 py-3 text-sm hover:bg-highlight"
                  onClick={() => setQ("")}
                >
                  <span className="text-xs uppercase tracking-wider text-accent">
                    {category.shortTitle}
                  </span>
                  <p className="font-medium text-ink">{item.question}</p>
                </Link>
              </li>
            ))
          )}
        </ul>
      ) : null}
    </div>
  );
}
