import type { Category, CategoryId } from "./types";
import { nodejsCategory } from "./nodejs";
import { reactCategory } from "./react";
import { cssCategory } from "./css";
import { sqlCategory } from "./sql";
import { problemsCategory } from "./problems";

export const categories: Category[] = [
  nodejsCategory,
  reactCategory,
  cssCategory,
  sqlCategory,
  problemsCategory,
];

export function getCategory(id: CategoryId): Category | undefined {
  return categories.find((c) => c.id === id);
}

export function searchAll(query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return categories.flatMap((cat) =>
    cat.items
      .filter(
        (item) =>
          item.question.toLowerCase().includes(q) ||
          item.answer.toLowerCase().includes(q) ||
          item.tags?.some((t) => t.includes(q))
      )
      .map((item) => ({ category: cat, item }))
  );
}

export type { Category, CategoryId, QAItem } from "./types";
