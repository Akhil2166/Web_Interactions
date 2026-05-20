import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: "motion.div" | "section" | "header" | "footer";
};

export function Container({
  children,
  className,
  as: Tag = "motion.div",
}: ContainerProps) {
  const Component = Tag === "motion.div" ? "div" : Tag;

  return (
    <Component
      className={cn(
        "mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8",
        className,
      )}
    >
      {children}
    </Component>
  );
}
