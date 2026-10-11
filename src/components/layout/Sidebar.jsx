import { Hammer, FolderOpen, Lightbulb, Trophy, Satellite, Pin, Infinity as InfinityIcon } from "lucide-react";
import { cn } from "../../lib/utils";

const NAV_ITEMS = [
    { id: "workbench", label: "The Workbench", icon: Hammer, hover: "group-hover:text-terracota" },
    { id: "projects", label: "All Projects", icon: FolderOpen, hover: "group-hover:text-skyblue", pill: "7" },
    { id: "ideas", label: "Idea Drawer", icon: Lightbulb, hover: "group-hover:text-terracota", note: "loose Sparks" },
    { id: "archive", label: "Archive / Trophy Shelf", icon: Trophy, hover: "group-hover:text-wasabi" },
];

const Sidebar = ({ active, onNavigate }) => {
  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-full w-64 select-none flex-col
        justify-between border-r-[2.5px] border-ink bg-parchment shadow-[4px_0px_0px_0px_#18181B] lg:flex"
    >
        <div className="flex flex-col">
            {/* brand */}
            <div className="relative border-b-[2.5px] border-ink bg-parchment-dark p-4">
                <div className="absolute -top-1.5 right-6 -rotate-2 border border-ink bg-mustard
                    px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wide text-ink
                    shadow-[1.5px_1.5px_0px_#18181B]"
                >
                    Field note no. 42
                </div>
                <div className="mt-1 flex items-center gap-2.5">
                    <div className="flex size-10 -rotate-2 items-center justify-center rounded-lg
                        border-2 border-ink bg-mustard shadow-stamp">
                            <InfinityIcon size={22} strokeWidth={2.5} className="text-ink" />
                    </div>
                    <div className="flex flex-col">
                        <div className="flex items-center gap-1">
                            <span className="font-display text-xl font-bold leading-none tracking-tight
                                text-ink"
                            >
                                Orbit
                            </span>
                            <span className="rounded border border-ink bg-skyblue-light px-1
                                font-mono text-xs font-bold text-skyblue-dark"
                            >
                                v1.4
                            </span>
                        </div>
                        <span className="mt-1 font-mono text-[10px] uppercase tracking-widest text-ink/70">// Maker scrapbook</span>
                    </div>
                </div>
            </div>

            {/* nav */}
            <nav className="mt-2 flex flex-col gap-2 p-3">
                {NAV_ITEMS.map(({ id, label, icon: Icon, hover, pill, note }) => {
                const isActive = active === id;
                return (
                    <button
                    key={id}
                    onClick={() => onNavigate(id)}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                        "group flex w-full cursor-pointer items-center gap-2.5 rounded-lg border-2 px-3.5 py-2.5 text-left text-sm transition-all",
                        isActive
                        ? "rotate-[-0.5deg] translate-x-1.5 border-ink bg-terracotta font-display font-bold text-white shadow-card"
                        : "border-transparent font-medium text-ink/80 hover:-translate-y-0.5 hover:border-ink hover:bg-white hover:text-ink hover:shadow-stamp"
                    )}
                    >
                    <Icon size={19} className={cn("transition-colors", !isActive && hover)} />
                    <span>{label}</span>
                    {isActive && <span className="ml-auto rotate-6 font-hand text-lg text-mustard-light">active!</span>}
                    {!isActive && pill && (
                        <span className="ml-auto rounded border border-ink/40 bg-sand px-1.5 py-0.5 font-mono text-[11px] text-ink/60">{pill}</span>
                    )}
                    {!isActive && note && <span className="ml-auto font-hand text-base text-terracotta">{note}</span>}
                    </button>
                );
                })}
            </nav>
            
            {/* manta */}
            <div className="mx-3 mt-4 rotate-1 rounded-lg border-2 border-dashed border-ink/50
                bg-white/70 px-4 py-3 text-center">
                <span className="block font-hand text-lg font-bold leading-tight text-ink">
                    Ship before it calcifies.
                </span>
                <span className="mt-0.5 block font-mono text-[10px] uppercase tracking-widest
                    text-ink/60">
                    -desk mantra
                </span>
            </div>
        </div>

        {/* user stamp */}
        <div className="border-t-[2.5px] border-ink bg-parchment-dark p-3">
            <div className="flex items-center gap-2.5 rounded-lg border-2 border-ink bg-white p-2 shadow-stamp transition-transform hover:translate-x-0.5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-skyblue text-white shadow-pressed">
                    <Satellite size={18} />
                </div>
                <div className="flex min-w-0 flex-1 flex-col">
                    <span className="truncate font-mono text-xs font-bold leading-tight text-ink">elena.sh</span>
                    <div className="mt-0.5 flex items-center gap-1.5">
                        <span className="h-2 w-2 shrink-0 animate-pulse rounded-full border border-ink bg-wasabi" />
                        <span className="truncate font-sans text-[11px] italic text-ink/70">godot &amp; synths on desk</span>
                    </div>
                </div>
                <Pin size={18} className="text-ink/40" />
            </div>
        </div>
    </aside>
  )
}
export default Sidebar;