import { Suspense } from "react";
import { SearchBox } from "@/components/SearchBox";
import type { CategoryId } from "@/content/types";
import { searchIndex, type SearchHit } from "@/content/search-index";

type Props = {
  scope?: CategoryId;
  placeholder?: string;
  initialQuery?: string;
  index?: SearchHit[];
};

function SearchFallback({ placeholder }: { placeholder: string }) {
  return (
    <div className="w-full">
      <input
        disabled
        placeholder={placeholder}
        className="w-full rounded-md border border-line bg-white/80 px-4 py-3 text-sm text-ink-soft outline-none"
      />
    </div>
  );
}

export function SearchPanel({
  scope,
  placeholder = "Search questions…",
  initialQuery = "",
  index = searchIndex,
}: Props) {
  return (
    <Suspense fallback={<SearchFallback placeholder={placeholder} />}>
      <SearchBox
        index={index}
        scope={scope}
        placeholder={placeholder}
        initialQuery={initialQuery}
      />
    </Suspense>
  );
}
