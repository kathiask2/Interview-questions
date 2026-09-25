import Link from "next/link";
import { SearchPanel } from "@/components/SearchPanel";
import { categories } from "@/content";
import { filterSearchIndex } from "@/content/search-index";

type Props = {
  searchParams: Promise<{ q?: string }>;
};

export default async function HomePage({ searchParams }: Props) {
  const { q = "" } = await searchParams;
  const total = categories.reduce((n, c) => n + c.items.length, 0);
  const hits = q.trim() ? filterSearchIndex(q).slice(0, 40) : [];

  return (
    <div className="mx-auto max-w-4xl">
      <header className="fade-up relative overflow-hidden border-b border-line pb-12">
        <p className="font-[family-name:var(--font-display)] text-5xl font-semibold tracking-tight text-ink sm:text-6xl md:text-7xl">
          PrepNotes
        </p>
        <h1 className="mt-5 max-w-xl text-lg leading-snug text-ink-soft sm:text-xl">
          Interview notes sorted so you can reopen Node, React, CSS, SQL, and
          problems without digging through a chat dump.
        </h1>
        <p className="mt-4 text-sm text-ink-soft/80">
          {total} answers across {categories.length} sections
        </p>
        <div className="mt-8 max-w-xl">
          <SearchPanel initialQuery={q} />
        </div>
      </header>

      {q.trim() ? (
        <section className="fade-up mt-10 border-b border-line pb-10">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-ink">
            Results for “{q.trim()}”
          </h2>
          {hits.length === 0 ? (
            <p className="mt-4 text-sm text-ink-soft">No matches.</p>
          ) : (
            <ul className="mt-6 divide-y divide-line border border-line bg-white/70">
              {hits.map((hit) => (
                <li key={`${hit.categoryId}-${hit.itemId}`}>
                  <Link
                    href={`/${hit.categoryId}?q=${encodeURIComponent(q.trim())}#${hit.itemId}`}
                    className="block px-4 py-3 hover:bg-highlight"
                  >
                    <span className="text-xs uppercase tracking-wider text-accent">
                      {hit.shortTitle}
                    </span>
                    <p className="font-medium text-ink">{hit.question}</p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>
      ) : null}

      <section className="fade-up mt-10" style={{ animationDelay: "80ms" }}>
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-ink">
          Sections
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-ink-soft">
          One topic per section. Open a category and skim numbered Q&amp;A, or
          jump via search.
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {categories.map((cat, i) => (
            <li key={cat.id}>
              <Link
                href={`/${cat.id}`}
                className="fade-up group block border border-line bg-white/70 p-5 transition hover:border-accent hover:bg-highlight/60"
                style={{ animationDelay: `${120 + i * 60}ms` }}
              >
                <p className="font-mono text-xs text-accent">
                  {String(i + 1).padStart(2, "0")} · {cat.items.length} topics
                </p>
                <p className="mt-2 font-[family-name:var(--font-display)] text-xl font-semibold text-ink group-hover:text-accent-deep">
                  {cat.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {cat.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
