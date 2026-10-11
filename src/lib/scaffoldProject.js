const LANE_LABELS = { code: "Code", hardware: "Hardware", zines: "Zine", audio_games: "Games & audio" };
const TAG_TO_LANE = { hardware: "hardware", "print / zine": "zines", "game jam": "audio_games" };

export const scaffoldProject = ({ title, lane = "code", laneLabel, description }) => ({
  id: crypto.randomUUID(),
  title,
  description: description || "Fresh off the launchpad. Nothing built yet, which means everything is still possible.",
  lane,
  laneLabel: laneLabel || LANE_LABELS[lane],
  tapeLabel: "NEW LAUNCH",
  velocityBadge: "cruising",
  velocityLabel: "Just launched",
  distanceAU: "1.00 AU",
  marginaliaNote: "// first task: define the first task",
  currentMilestone: "Milestone 0/3 (Scoping)",
  percentInOrbit: 0,
  state: "in_orbit",
  touchedRelative: "Touched just now",
  versionTag: "v0.0.1",
});

export const scaffoldFromIdea = (idea) =>
  scaffoldProject({
    title: idea.title,
    lane: TAG_TO_LANE[idea.tag] ?? "code",
    laneLabel: idea.tag,
    description: "Fresh off the idea drawer. Nothing built yet, which means everything is still possible.",
  });