"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  startTransition,
  useDeferredValue,
  useEffect,
  useId,
  useMemo,
  useState,
} from "react";
import type { CategoryId } from "@/content/types";
import type { SearchHit } from "@/content/search-index";

type Props = {
  index: SearchHit[];
  scope?: CategoryId;
  placeholder?: string;
  initialQuery?: string;
};

function filterHits(
  index: SearchHit[],
  query: string,
  scope?: CategoryId
): SearchHit[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return index.filter((hit) => {
    if (scope && hit.categoryId !== scope) return false;
    return (
      hit.question.toLowerCase().includes(q) ||
      hit.tags.some((t) => t.toLowerCase().includes(q)) ||
      hit.shortTitle.toLowerCase().includes(q)
    );
  });
}

export function SearchBox({
  index,
  scope,
  placeholder = "Search questions…",
  initialQuery = "",
}: Props) {
  const inputId = useId();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [q, setQ] = useState(initialQuery);
  const deferred = useDeferredValue(q);

  useEffect(() => {
    const fromUrl = searchParams.get("q") ?? "";
    setQ((prev) => (prev === fromUrl ? prev : fromUrl));
  }, [searchParams]);

  const results = useMemo(
    () => filterHits(index, deferred, scope).slice(0, 20),
    [index, deferred, scope]
  );

  function syncUrl(next: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (next.trim()) params.set("q", next.trim());
    else params.delete("q");
    const qs = params.toString();
    startTransition(() => {
      router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    });
  }

  return (
    <div className="w-full">
      <label className="sr-only" htmlFor={inputId}>
        Search
      </label>
      <input
        id={inputId}
        value={q}
        onChange={(e) => {
          const next = e.target.value;
          setQ(next);
          syncUrl(next);
        }}
        placeholder={placeholder}
        autoComplete="off"
        className="w-full rounded-md border border-line bg-white/80 px-4 py-3 text-sm text-ink outline-none ring-accent/30 transition focus:ring-2"
      />
      {deferred.trim() ? (
        <ul className="mt-3 max-h-72 overflow-y-auto rounded-md border border-line bg-white shadow-sm">
          {results.length === 0 ? (
            <li className="px-4 py-3 text-sm text-ink-soft">No matches.</li>
          ) : (
            results.map((hit) => (
              <li
                key={`${hit.categoryId}-${hit.itemId}`}
                className="border-b border-line last:border-0"
              >
                <Link
                  href={`/${hit.categoryId}?q=${encodeURIComponent(deferred.trim())}#${hit.itemId}`}
                  className="block px-4 py-3 text-sm hover:bg-highlight"
                  onClick={() => setQ("")}
                >
                  <span className="text-xs uppercase tracking-wider text-accent">
                    {hit.shortTitle}
                  </span>
                  <p className="font-medium text-ink">{hit.question}</p>
                </Link>
              </li>
            ))
          )}
        </ul>
      ) : null}
    </div>
  );
}
