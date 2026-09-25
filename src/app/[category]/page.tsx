import { notFound } from "next/navigation";
import { SearchBox } from "@/components/SearchBox";
import { QuestionCard } from "@/components/QuestionCard";
import { categories, getCategory, type CategoryId } from "@/content";

type Props = {
  params: Promise<{ category: string }>;
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

export default async function CategoryPage({ params }: Props) {
  const { category: id } = await params;
  const cat = getCategory(id as CategoryId);
  if (!cat) notFound();

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
        <p className="mt-2 text-sm text-ink-soft/70">{cat.items.length} entries</p>
        <div className="mt-6">
          <SearchBox scope={cat.id} placeholder={`Search in ${cat.shortTitle}…`} />
        </div>
      </header>

      <div className="mt-2">
        {cat.items.map((item, index) => (
          <QuestionCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}
