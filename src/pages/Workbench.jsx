import { useCallback, useEffect, useRef, useState } from "react";
import HeroBanner from "../components/HeroBanner";
import CurrentlyInOrbit from "../components/CurrentlyInOrbit";
import IdeaDrawer from "../components/IdeaDrawer";
import RecentTrajectories from "../components/RecentTrajectories";
import ClubhouseCanon from "../components/ClubhouseCanon";
import NewProjectModal from "../components/NewProjectModal";
import { projects as seedProjects } from "../data/projects";
import { ideas as seedIdeas } from "../data/ideas";
import { trajectoryLogs as seedLogs } from "../data/trajectories";
import { scaffoldProject, scaffoldFromIdea } from "../lib/scaffoldProject";
import { useLocalStorage } from "../hooks/useLocalStorage";

const Workbench = () => {
  const [projects, setProjects] = useLocalStorage("orbit:projects", seedProjects);
  const [ideas, setIdeas] = useLocalStorage("orbit:ideas", seedIdeas);
  const [logs, setLogs] = useLocalStorage("orbit:logs", seedLogs);
  const [modalOpen, setModalOpen] = useState(false);
  const ideaInputRef = useRef(null);

  const addLog = (projectTitle, snippet, tone) =>
    setLogs((prev) =>
      [{ id: crypto.randomUUID(), projectTitle, snippet, timestamp: "just now", tone }, ...prev].slice(0, 20)
    );

  const stashIdea = (title) => {
    setIdeas((prev) => [
      { id: crypto.randomUUID(), title, tag: "idea", pinnedDate: "Pinned just now", status: "stashed" },
      ...prev,
    ]);
    addLog("Idea Drawer", "stashed a new idea", "skyblue");
  };

  const promoteIdea = (idea) => {
    setIdeas((prev) => prev.filter((i) => i.id !== idea.id));
    setProjects((prev) => [scaffoldFromIdea(idea), ...prev]);
    addLog(idea.title, "promoted to orbit", "terracotta");
  };

  const launchProject = (details) => {
    setProjects((prev) => [scaffoldProject(details), ...prev]);
    addLog(details.title, "launched into orbit", "wasabi");
    setModalOpen(false);
  };

  const jotIdea = useCallback(() => {
    const input = ideaInputRef.current;
    if (!input) return;
    input.scrollIntoView({ behavior: "smooth", block: "center" });
    input.focus({ preventScroll: true });
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (["INPUT", "TEXTAREA", "SELECT"].includes(e.target.tagName)) return;
      if (document.querySelector("dialog[open]")) return;
      if (e.key === "j") {
        e.preventDefault();
        jotIdea();
      }
      if (e.key === "n") {
        e.preventDefault();
        setModalOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [jotIdea]);

  return (
    <>
      <HeroBanner cookingCount={projects.length} onJot={jotIdea} onLaunch={() => setModalOpen(true)} />
      <CurrentlyInOrbit projects={projects} />
      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <IdeaDrawer ideas={ideas} onStash={stashIdea} onPromote={promoteIdea} inputRef={ideaInputRef} />
        </div>
        <div className="flex flex-col gap-6 lg:col-span-5">
          <RecentTrajectories logs={logs.slice(0, 4)} />
          <ClubhouseCanon />
        </div>
      </div>
      <NewProjectModal open={modalOpen} onClose={() => setModalOpen(false)} onLaunch={launchProject} />
    </>
  );
};
export default Workbench;