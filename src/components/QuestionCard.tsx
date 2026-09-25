import type { QAItem } from "@/content";

export function QuestionCard({ item, index }: { item: QAItem; index: number }) {
  return (
    <article
      id={item.id}
      className="fade-up scroll-mt-24 border-b border-line py-8 last:border-0"
      style={{ animationDelay: `${Math.min(index, 12) * 40}ms` }}
    >
      <div className="flex flex-wrap items-baseline gap-3">
        <span className="font-mono text-xs text-accent">{String(index + 1).padStart(2, "0")}</span>
        <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight text-ink md:text-2xl">
          {item.question}
        </h2>
      </div>
      {item.tags?.length ? (
        <ul className="mt-3 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <li
              key={tag}
              className="rounded border border-line bg-mist px-2 py-0.5 text-xs text-ink-soft"
            >
              {tag}
            </li>
          ))}
        </ul>
      ) : null}
      <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-ink-soft">
        {item.answer}
      </p>
      {item.code ? (
        <pre className="mt-5 overflow-x-auto rounded-md bg-code-bg p-4 text-[13px] leading-relaxed text-code-fg">
          <code className="font-mono">{item.code}</code>
        </pre>
      ) : null}
    </article>
  );
}
