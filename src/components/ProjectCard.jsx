import Badge from "./ui/Badge";
import ProgressBar from "./ui/ProgressBar";
import { LANE_STYLES, HEAT_STYLES } from "../lib/orbitStyles";
import { cn } from "../lib/utils";

const ProjectCard = ({ project }) => {
    const { title, description, lane, laneLabel, tapeLabel, velocityBadge,
        velocityLabel,
        distanceAU,
        marginaliaNote,
        currentMilestone,
        percentInOrbit,
        touchedRelative,
        versionTag,
    } = project;

    const laneStyle = LANE_STYLES[lane];
    const heatStyle = HEAT_STYLES[velocityBadge];

    return (
        <article className="relative flex h-full flex-col rounded-xl border-2 border-ink 
            bg-white p-6 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-float"
        >
            <div className="absolute -top-3 left-6 z-10 -rotate-2 border border-ink/40 
                bg-tape px-2.5 py-0.5 shadow-pressed"
            >
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-ink">
                    {tapeLabel}
                </span>
            </div>

            <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                <Badge className={laneStyle.stack}>
                    <span>{laneStyle.icon}</span>{laneLabel}
                </Badge>
                <Badge className={cn("text-10px uppercase", heatStyle.classes)}>
                    <span>{heatStyle.icon}</span>{velocityLabel}
                </Badge>
            </div>

            <div className="mb-3 flex items-start justify-between gap-3">
                <h2 className="font-display text-xl font-extrabold leading-snug text-ink">
                    {title}
                </h2>
                <Badge className="shrink-0 border border-ink/40 bg-paper text-ink/70 shadow-none">
                    ✦ {distanceAU}
                </Badge>
            </div>

            <div className="mb-5 flex-1">
                <p className="font-sans text-sm leading-relaxed text-ink/80">
                    {description}
                </p>
                {marginaliaNote && (
                    <p className="mt-4 font-hand text-lg font-bold text-terracotta">
                        {marginaliaNote}
                    </p>
                )}
            </div>

            <footer className="border-t-2 border-dashed border-ink/20 pt-4">
                <div className="mb-2 flex items-center justify-between gap-2">
                    <p className="font-mono text-xs text-ink/70">{currentMilestone}</p>
                    <Badge className={cn("shrink-0 border border-ink/20 text-[10px] shadow-none", laneStyle.chip)}>
                        {percentInOrbit}% in orbit
                    </Badge>
                </div>

                <ProgressBar value={percentInOrbit} fillClassName={laneStyle.fill} />
                <div className="mt-3 flex items-center justify-between gap-2">
                    <p className="flex items-center gap-2 font-sans text-xs font-bold text-ink/65">
                        <span className="h-2 w-2 rounded-full bg-wasabi" />
                        {touchedRelative}
                    </p>
                    <Badge className="border border-ink bg-paper text-ink shadow-none">{versionTag}</Badge>
                </div>
            </footer>
        </article>
    );
}
export default ProjectCard