import { useState } from "react";
import { Pin, Paintbrush } from "lucide-react";
import { cn } from "../../lib/utils";

const TopBar = () => {
    const [gravity, setGravity] = useState(true)

    return (
        <header className="fixed left-0 right-0 top-0 z-30 flex h-16 items-center justify-between
            border-b-[2.5px] border-ink bg-paper/90 px-6 backdrop-blur-md lg:left-64"
        >
            <div className="flex items-center gap-3">
                <div className="flex -rotate-1 items-center gap-1.5 rounded border-2 border-ink
                    bg-mustard-light px-2.5 py-1 font-mono text-xs font-bold tracking-tight
                    text-ink shadow-pressed"
                >
                    <Pin size={14} className="text-terracotta" />
                    STUDIO DESK // ORBIT 01
                </div>
                <span className="hidden rounded border border-ink/40 bg-white px-2 py-0.5
                     font-mono text-[11px] text-ink/60 sm:inline-block">
                        LAT: 42.08°N · ALT 180m
                </span>
                <span className="hidden font-hand text-base text-ink/70 md:inline-block">
                    (coffee: still warm)
                </span>
            </div>

            <div className="flex items-center gap-3">
                <button onClick={() => setGravity((g) => !g)}
                    aria-pressed={gravity}
                    className={cn(
                        "flex cursor-pointer items-center gap-1.5 rounded-full border-2 border-ink px-3 py-1 font-mono text-xs font-bold text-ink shadow-stamp transition-colors",
                        gravity ? "bg-skyblue-light" : "bg-parchment"
                    )}
                >
                    <span className={cn(
                        "size-2 rounded-full border border-ink", gravity ? "bg-skyblue" : "bg-white"
                    )} />
                    GRAVITY: {gravity ? "ACTIVE" : "OFF"}
                </button>
                {/* placeholder: opens a quick-sketch modal later */}
                <button
                    aria-label="Quick sketch"
                    className="flex size-10 cursor-pointer items-center justify-center 
                        rounded-full border-2 border-ink bg-mustard shadow-stamp transition-transform hover:rotate-6"
                        >
                            <Paintbrush size={18} className="text-ink" />
                </button>
            </div>
        </header>
    )
}
export default TopBar;