interface SectionProps {
  id?: string;
  bg?: string;
  className?: string;
  children: React.ReactNode;
  padding?: string;
  narrow?: boolean;
}

/**
 * Reusable section wrapper. Provides consistent max-width, horizontal
 * padding and vertical rhythm across all pages.
 */
export function Section({
  id,
  bg,
  className = "",
  children,
  padding = "py-24",
  narrow = false,
}: SectionProps) {
  return (
    <section id={id} className={`${padding} ${bg ?? ""} ${className}`}>
      <div
        className={`${
          narrow ? "max-w-4xl" : "max-w-7xl"
        } mx-auto px-6 lg:px-8`}
      >
        {children}
      </div>
    </section>
  );
}
