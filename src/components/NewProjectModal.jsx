import { useEffect, useRef, useState } from "react";
import { X, Rocket } from "lucide-react";
import Button from "./ui/Button";

const LANES = [
  { value: "code", label: "Code" },
  { value: "hardware", label: "Hardware" },
  { value: "zines", label: "Zines" },
  { value: "audio_games", label: "Games & audio" },
];

const FIELD =
  "w-full rounded-lg border-2 border-ink bg-white px-3 py-2 font-sans text-sm text-ink outline-none transition-all placeholder:text-ink/40 focus:-translate-y-0.5 focus:shadow-stamp";

const NewProjectModal = ({ open, onClose, onLaunch }) => {
  const dialogRef = useRef(null);
  const [title, setTitle] = useState("");
  const [lane, setLane] = useState("code");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const dialog = dialogRef.current;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = title.trim();
    if (!trimmed) return;
    onLaunch({ title: trimmed, lane, description: description.trim() });
    setTitle("");
    setLane("code");
    setDescription("");
  };

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={(e) => e.target === dialogRef.current && onClose()}
      className="m-auto w-[min(92vw,28rem)] overflow-visible rounded-xl border-[2.5px] border-ink bg-paper p-0 text-ink shadow-float backdrop:bg-ink/40"
    >
      <form onSubmit={handleSubmit} className="relative flex flex-col gap-4 p-6">
        <div aria-hidden className="absolute -top-3 left-6 h-5 w-20 -rotate-2 border border-ink/30 bg-tape" />

        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl font-extrabold">Launch a new project</h2>
            <p className="mt-0.5 font-sans text-sm text-ink/70">Give it a name. Everything else can change later.</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-lg border-2 border-ink bg-white shadow-pressed transition-colors hover:bg-mustard-light"
          >
            <X size={16} />
          </button>
        </div>

        <label className="flex flex-col gap-1 font-mono text-xs font-bold">
          Title
          <input
            autoFocus
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Tiny Godot Dungeon"
            className={FIELD}
          />
        </label>

        <label className="flex flex-col gap-1 font-mono text-xs font-bold">
          Lane
          <select value={lane} onChange={(e) => setLane(e.target.value)} className={FIELD}>
            {LANES.map((l) => (
              <option key={l.value} value={l.value}>{l.label}</option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-1 font-mono text-xs font-bold">
          Dev log <span className="font-normal text-ink/50">(optional)</span>
          <textarea
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="What is it? What's the current hurdle? 2 AM energy welcome."
            className={FIELD}
          />
        </label>

        <div className="flex justify-end gap-3 pt-1">
          <Button type="button" onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="primary">
            <Rocket size={18} /> Launch
          </Button>
        </div>
      </form>
    </dialog>
  );
};
export default NewProjectModal;