import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
  wide?: boolean;
};

export function Container({ children, className, narrow, wide }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        narrow ? "max-w-3xl" : wide ? "max-w-[90rem]" : "max-w-7xl",
        className
      )}
    >
      {children}
    </div>
  );
}
