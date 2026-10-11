import { useState } from "react";
import { Lightbulb, Atom, ArrowUpRight } from "lucide-react";
import { TAG_STYLES } from "../lib/orbitStyles";
import { cn } from "../lib/utils";

const IdeaRow = ({ idea, onPromote }) => (
  <li className="group flex flex-col justify-between gap-3 rounded-lg border-2 border-ink bg-white p-3.5 shadow-pressed transition-all hover:-translate-y-0.5 hover:shadow-stamp sm:flex-row sm:items-center">
    <div className="flex min-w-0 flex-col gap-1">
      <div className="flex flex-wrap items-center gap-2">
        <span className={cn("rounded border border-ink px-2 py-0.5 font-mono text-[10px] font-bold text-ink", TAG_STYLES[idea.tag] ?? "bg-parchment")}>
          {idea.tag}
        </span>
        <span className="font-mono text-[11px] text-ink/50">{idea.pinnedDate}</span>
        {idea.annotation && <span className="font-hand text-sm text-ink/60">{idea.annotation}</span>}
      </div>
      <p title={idea.title} className="mt-0.5 truncate font-sans text-sm font-semibold text-ink">{idea.title}</p>
    </div>
    <button
      onClick={() => onPromote(idea)}
      className="inline-flex shrink-0 cursor-pointer items-center gap-1 rounded border border-ink/40 bg-paper px-2.5 py-1 font-mono text-xs font-bold text-terracotta transition-transform hover:text-ink hover:underline group-hover:translate-x-1"
    >
      Promote to orbit <ArrowUpRight size={14} />
    </button>
  </li>
);

const IdeaDrawer = ({ ideas, onStash, onPromote, inputRef }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = text.trim();
    if (!title) return;
    onStash(title);
    setText("");
  };

  return (
    <section className="relative rounded-xl border-2 border-ink bg-paper p-6 shadow-card">
      <div className="absolute -top-3.5 right-6 flex items-center gap-1 rounded border-2 border-ink bg-mustard px-3 py-0.5 font-mono text-[10px] font-bold text-ink shadow-pressed">
        <span className="h-1.5 w-1.5 rounded-full bg-ink" />
        IDEA DRAWER // SOMEDAY™
      </div>

      <div className="flex items-start justify-between gap-4 border-b-2 border-dashed border-ink/25 pb-3">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="font-display text-2xl font-extrabold text-ink">Ideas Before They Escape</h2>
            <Lightbulb size={22} className="text-mustard-dark" />
          </div>
          <p className="mt-0.5 font-sans text-sm text-ink/70">
            Sparks &amp; sketches resting comfortably until a launch window opens.
          </p>
        </div>
        <span className="shrink-0 rounded border border-ink bg-white px-2.5 py-1 font-mono text-xs font-bold shadow-pressed">
          {ideas.length} in hangar
        </span>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-4 flex items-center gap-2 rounded-lg border-2 border-ink bg-white p-2 shadow-stamp transition-all focus-within:-translate-y-0.5 focus-within:shadow-card"
      >
        <Atom size={20} className="ml-2 shrink-0 text-ink/40" />
        <input
          ref={inputRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          aria-label="Capture an idea"
          placeholder="Capture a stray concept & press stash..."
          className="flex-1 border-0 bg-transparent py-1 font-sans text-sm font-medium text-ink outline-none placeholder:text-ink/40"
        />
        <button
          type="submit"
          className="shrink-0 cursor-pointer rounded-md bg-ink px-3.5 py-1.5 font-mono text-xs font-bold text-white shadow-pressed transition-colors hover:bg-terracotta"
        >
          + Stash
        </button>
      </form>

      <ul className="mt-4 flex flex-col gap-3">
        {ideas.map((idea) => (
          <IdeaRow key={idea.id} idea={idea} onPromote={onPromote} />
        ))}
      </ul>
      {ideas.length === 0 && (
        <p className="mt-4 font-hand text-xl text-ink/60">Hangar's empty. Suspiciously organized. ✨</p>
      )}
    </section>
  );
};
export default IdeaDrawer;