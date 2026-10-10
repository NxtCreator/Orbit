import { cn } from "../../lib/utils";

const ProgressBar = ({ value, fillClassName }) => {
    const percentage = Math.min(100, Math.max(0, value));
  return (
    <div 
        role="progressbar"
        aria-valuenow={percentage}
        aria-valuemin={0}
        aria-valuemax={100}
        className="h-3.5 w-full rounded-full border-2 border-ink bg-white p-[1.5px]"
    >
        <div 
            className={cn("h-full rounded-full transition-[width] duration-500", fillClassName)}
            style={{ width: `${percentage}%`}}
        />
    </div>
  );
}
export default ProgressBar