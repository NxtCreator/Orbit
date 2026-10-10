import { cn } from "../../lib/utils";

const Badge = ({ className, children }) => {
  return (
    <span className={cn(
      "inline-flex items-center gap-1.5 whitespace-nowrap px-2.5 py-0.5 text-xs font-mono font-bold bg-white rounded border-2 border-ink shadow-[1.5px_1.5px_0px_0px_#18181B]", 
      className)}>
      {children}
    </span>
  )
}
export default Badge