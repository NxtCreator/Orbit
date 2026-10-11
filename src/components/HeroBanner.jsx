import { BadgeCheck, PencilLine, Rocket } from "lucide-react";
import Button from "./ui/Button";

const HeroBanner = ({ cookingCount, onJot, onLaunch }) => {
  return (
    <header className="relative overflow-hidden rounded-xl border-[2.5px] border-ink bg-white
        p-6 shadow-card lg:p-8"
    >
        <div aria-hidden className="pointer-events-none absolute -top-3 left-12 z-10 flex h-6
            w-24 -rotate-3 items-center justify-center border border-ink/30 bg-tape">
            <span className="font-mono text-[9px] uppercase tracking-widest text-ink/40">
                Draft tape
            </span>
        </div>
        <div className="pointer-events-none absolute -top-3 right-16 z-10 h-6 w-20 rotate-2 
            border border-ink/30 bg-tape-blue" 
        />
        <div aria-hidden className="pointer-events-none absolute bottom-4 right-6 hidden 
            -rotate-12 select-none opacity-10 md:block"
        >
            <span className="font-display text-7xl font-extrabold text-ink">
                CRAFT
            </span>
        </div>

        <div className="relative z-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="flex max-w-2xl flex-col gap-2">
                <div className="mb-1 flex flex-wrap items-center gap-2">
                    <span className="-rotate-1 rounded border border-ink bg-mustard-light px-2.5 py-0.5 
                        font-mono text-xs font-bold text-ink shadow-[2px_2px_0px_#18181B]">
                            🪐 THE ORBIT SLATE
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-ink
                        bg-white px-2.5 py-0.5 font-mono text-xs font-medium text-ink 
                        shadow-[2px_2px_0px_#18181B]"
                    >
                        <span className="size-2 animate-ping rounded-full bg-terracotta" />
                        {cookingCount} {cookingCount === 1 ? "item": "items"} cooking
                    </span>
                    <span className="inline-flex items-center gap-1 rounded border border-ink/40
                        bg-parchment px-2 py-0.5 font-mono text-[11px] text-ink/70">
                        <BadgeCheck size={13} /> 0 deadlines harmed
                    </span>
                    <span className="-rotate-2 font-hand text-lg font-bold text-terracotta">
                        ~ maker energy at 94% ~
                    </span>
                </div>

                <h1 className="flex items-center gap-3 font-display text-3xl
                    font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl">
                    The Orbit Workbench
                    <span aria-hidden className="animate-bounce text-3xl text-mustard
                        sm:text-4xl">✦</span>
                </h1>
                <p className="font-sans text-base font-medium leading-relaxed text-ink/80 sm:text-lg">
                    Where unfinished prototypes, zines, and messy code live while becoming something in orbital flight.
                </p>
            </div>

            <div className="flex shrink-0 flex-col items-stretch gap-3 sm:flex-row sm:items-center">
                <Button onClick={onJot}>
                    <PencilLine size={20} className="text-mustard-dark" /> + Jot an idea
                </Button>
                <Button variant="primary" onClick={onLaunch} className="px-5">
                    <Rocket size={20} /> + Launch new project
                </Button>
            </div>
        </div>
    </header>
  )
}
export default HeroBanner