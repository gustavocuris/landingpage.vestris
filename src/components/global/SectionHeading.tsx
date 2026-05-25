interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <span className="text-mono-tech text-lime-300">{eyebrow}</span>
      <h2 className="section-title mt-4 text-3xl font-black uppercase leading-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
        {description}
      </p>
    </div>
  );
}
