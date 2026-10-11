import { useState } from "react";
import { Orbit } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { cn } from "../lib/utils";

const TABS = [
  { label: "All", lane: null },
  { label: "Code", lane: "code" },
  { label: "Hardware", lane: "hardware" },
  { label: "Zines", lane: "zines" },
];

const CurrentlyInOrbit = ({ projects }) => {
  const [activeTab, setActiveTab] = useState("All");
  const active = TABS.find((t) => t.label === activeTab);
  const visible = active.lane ? projects.filter((p) => p.lane === active.lane) : projects;

  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col justify-between gap-3 border-b-2 border-dashed border-ink/30 pb-2 sm:flex-row sm:items-end">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="font-display text-2xl font-extrabold text-ink">Currently in Orbit</h2>
            <Orbit size={24} className="text-terracotta" />
            <span className="rounded border border-ink bg-mustard-light px-2 py-0.5 font-mono text-xs font-bold shadow-[1.5px_1.5px_0px_#18181B]">
              {projects.length} trajectories
            </span>
          </div>
          <p className="mt-0.5 font-sans text-sm text-ink/70">
            Physical pieces, codebases, and breadboards occupying current desk real estate.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div role="tablist" className="flex items-center gap-0.5 rounded-lg border-2 border-ink bg-white p-0.5 font-mono text-[11px] shadow-stamp">
            {TABS.map((tab) => {
              const isActive = activeTab === tab.label;
              return (
                <button
                  key={tab.label}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(tab.label)}
                  className={cn(
                    "cursor-pointer rounded px-2 py-0.5 transition-colors",
                    isActive
                      ? "bg-ink font-bold text-white"
                      : "font-medium text-ink/70 hover:bg-parchment hover:text-ink"
                  )}
                >
                  {tab.label}
                  {tab.lane === null && ` (${projects.length})`}
                </button>
              );
            })}
          </div>
          {/* placeholder: wire to router + real count later */}
          <a href="#" className="font-mono text-xs font-bold text-terracotta underline decoration-2 transition-colors hover:text-ink">
            View all 7 →
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 items-stretch gap-6 pt-3 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      {visible.length === 0 && (
        <p className="font-hand text-2xl text-ink/60">Nothing on this bench yet. ✨</p>
      )}
    </section>
  );
};
export default CurrentlyInOrbit;