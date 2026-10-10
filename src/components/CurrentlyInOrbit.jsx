import { useState } from "react";
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
    <section>
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
                <h2 className="flex flex-wrap items-center gap-3 font-display text-2xl font-extrabold tracking-tight text-ink">
                    Currently in Orbit <span aria-hidden>🪐</span>
                    <span className="rounded border-2 border-ink bg-mustard-light px-2 py-0.5 font-mono text-xs font-bold shadow-pressed">
                    {projects.length} trajectories
                    </span>
                </h2>
                <p className="mt-1 text-sm text-ink/70">
                    Physical pieces, codebases, and breadboards occupying current desk real estate.
                </p>
            </div>

            <div className="flex items-center gap-4">
                <div role="tablist" className="flex rounded-lg border-2 border-ink bg-white p-1 shadow-stamp">
                    {TABS.map((tab) => (
                        <button
                            key={tab.label}
                            role="tab"
                            aria-selected={activeTab === tab.label}
                            onClick={() => setActiveTab(tab.label)}
                            className={cn(
                                "rounded px-3 py-1 font-mono text-xs font-bold transition-colors",
                                activeTab === tab.label ? "bg-ink text-white" : "text-ink/70 hover:text-ink"
                            )}>
                                {tab.label}{tab.lane === null && ` (${projects.length})`}
                        </button>
                    ))}
                </div>
                {/* placeholder: wire to router + real count later */}
                <a href="#" className="font-mono text-xs font-bold text-terracotta underline underline-offset-4">
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
        <p className="pt-6 font-hand text-2xl text-ink/60">Nothing on this bench yet. ✨</p>
      )}
    </section>
  );
}
export default CurrentlyInOrbit;
