import type { CategoryId } from "./types";
import { categories } from "./index";

export type SearchHit = {
  categoryId: CategoryId;
  categoryTitle: string;
  shortTitle: string;
  itemId: string;
  question: string;
  tags: string[];
};

/** Lightweight index safe to ship to the client for live search. */
export const searchIndex: SearchHit[] = categories.flatMap((cat) =>
  cat.items.map((item) => ({
    categoryId: cat.id,
    categoryTitle: cat.title,
    shortTitle: cat.shortTitle,
    itemId: item.id,
    question: item.question,
    tags: item.tags ?? [],
  }))
);

export function filterSearchIndex(
  query: string,
  scope?: CategoryId
): SearchHit[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return searchIndex.filter((hit) => {
    if (scope && hit.categoryId !== scope) return false;
    return (
      hit.question.toLowerCase().includes(q) ||
      hit.tags.some((t) => t.includes(q)) ||
      hit.shortTitle.toLowerCase().includes(q) ||
      hit.categoryTitle.toLowerCase().includes(q)
    );
  });
}
