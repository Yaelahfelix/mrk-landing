import { Reveal } from "./animations";

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  center = true,
}: {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  center?: boolean;
}) {
  const titleNode =
    highlight && title.includes(highlight) ? (
      <>
        {title.split(highlight)[0]}
        <span className="text-gradient">{highlight}</span>
        {title.split(highlight)[1]}
      </>
    ) : (
      title
    );

  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <Reveal>
          <span className="inline-block rounded-full border border-brand-500/30 bg-brand-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-brand-300">
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.6rem]">
          {titleNode}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className="mt-4 text-lg leading-relaxed text-muted">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
