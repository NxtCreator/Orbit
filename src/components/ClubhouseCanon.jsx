import { Sparkles } from "lucide-react";

const ClubhouseCanon = () => (
  <div className="relative flex rotate-[0.5deg] items-start gap-4 rounded-xl border-2 border-dashed border-ink bg-mustard-light/90 p-5 shadow-card">
    <div className="flex h-11 w-11 shrink-0 -rotate-6 items-center justify-center rounded-lg border-2 border-ink bg-terracotta shadow-stamp">
      <Sparkles size={22} className="text-white" />
    </div>
    <div className="flex flex-col">
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded bg-ink px-1.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-white">
          Rule #1
        </span>
        <span className="font-hand text-lg font-bold text-terracotta">orbit clubhouse canon</span>
      </div>
      <p className="mt-1 font-sans text-sm font-semibold italic leading-snug text-ink">
        “The only bad project is the one that never leaves the launchpad (trapped in your head forever).”
      </p>
    </div>
  </div>
);
export default ClubhouseCanon;