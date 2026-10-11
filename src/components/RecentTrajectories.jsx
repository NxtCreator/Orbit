import { TrendingUp } from "lucide-react";
import { LOG_TONES } from "../lib/orbitStyles";
import { cn } from "../lib/utils";

const RecentTrajectories = ({ logs }) => (
  <div className="relative flex flex-col gap-4 rounded-xl border-2 border-ink bg-white p-6 shadow-card">
    <div aria-hidden className="absolute -top-3 left-6 h-5 w-16 -rotate-3 border border-ink/30 bg-tape" />

    <div className="flex items-center justify-between gap-3 border-b-2 border-dashed border-ink/20 pb-2">
      <div>
        <div className="flex items-center gap-2">
          <h2 className="font-display text-xl font-extrabold text-ink">Recent Trajectories</h2>
          <TrendingUp size={20} className="text-skyblue" />
        </div>
        <p className="mt-0.5 font-sans text-xs text-ink/70">Log of where cursor and hands made contact.</p>
      </div>
      <span className="shrink-0 rounded border border-ink/30 bg-parchment px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-ink/60">
        LOG.TXT
      </span>
    </div>

    <ul className="flex flex-col gap-2.5 font-mono text-xs">
      {logs.map((log) => (
        <li
          key={log.id}
          className="flex items-center justify-between gap-3 rounded-lg border border-ink/40 bg-paper p-2.5 transition-all hover:border-ink hover:bg-white"
        >
          <div className="flex min-w-0 flex-col">
            <span className="truncate font-bold text-ink">{log.projectTitle}</span>
            <span className={cn("text-[11px] font-semibold", LOG_TONES[log.tone])}>{log.snippet}</span>
          </div>
          <span className="shrink-0 text-[10px] font-medium text-ink/50">{log.timestamp}</span>
        </li>
      ))}
    </ul>
  </div>
);
export default RecentTrajectories;