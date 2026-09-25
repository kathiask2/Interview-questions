import { notFound } from "next/navigation";
import { SearchPanel } from "@/components/SearchPanel";
import { QuestionCard } from "@/components/QuestionCard";
import { categories, getCategory, type CategoryId } from "@/content";

type Props = {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ q?: string }>;
};

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.id }));
}

export async function generateMetadata({ params }: Props) {
  const { category: id } = await params;
  const cat = getCategory(id as CategoryId);
  if (!cat) return { title: "Not found — PrepNotes" };
  return {
    title: `${cat.title} — PrepNotes`,
    description: cat.description,
  };
}

export default async function CategoryPage({ params, searchParams }: Props) {
  const { category: id } = await params;
  const { q = "" } = await searchParams;
  const cat = getCategory(id as CategoryId);
  if (!cat) notFound();

  const query = q.trim().toLowerCase();
  const items = query
    ? cat.items.filter(
        (item) =>
          item.question.toLowerCase().includes(query) ||
          item.answer.toLowerCase().includes(query) ||
          item.tags?.some((t) => t.toLowerCase().includes(query))
      )
    : cat.items;

  return (
    <div className="mx-auto max-w-3xl">
      <header className="fade-up border-b border-line pb-8">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          {cat.shortTitle}
        </p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-ink md:text-5xl">
          {cat.title}
        </h1>
        <p className="mt-4 max-w-2xl text-base text-ink-soft">{cat.description}</p>
        <p className="mt-2 text-sm text-ink-soft/70">
          {query
            ? `${items.length} match${items.length === 1 ? "" : "es"} of ${cat.items.length}`
            : `${cat.items.length} entries`}
        </p>
        <div className="mt-6">
          <SearchPanel
            scope={cat.id}
            placeholder={`Search in ${cat.shortTitle}…`}
            initialQuery={q}
          />
        </div>
      </header>

      <div className="mt-2">
        {items.length === 0 ? (
          <p className="py-8 text-sm text-ink-soft">No matches in this section.</p>
        ) : (
          items.map((item, index) => (
            <QuestionCard key={item.id} item={item} index={index} />
          ))
        )}
      </div>
    </div>
  );
}
