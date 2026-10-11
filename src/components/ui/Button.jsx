import { cn } from "../../lib/utils";

const VARIANTS = {
    primary: 'bg-terracotta text-white',
    secondary: 'bg-white text-ink hover:bg-mustard-light',
};

const Button = ({ variant = "secondary", className, children, ...props }) => (
    <button className={cn(
        "inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-ink px-4 py-2.5 font-display text-sm font-bold shadow-card transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-pressed active:shadow-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-skyblue",
        VARIANTS[variant],
        className
    )}
    {...props}
    >
        {children}
    </button>
);

export default Button;