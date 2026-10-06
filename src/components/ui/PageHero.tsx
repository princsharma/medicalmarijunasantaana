import { Container } from "@/components/ui/Container";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
};

export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-brand-950 py-20 text-white md:py-28">
      <div className="bg-grid-pattern absolute inset-0 opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(249,115,22,0.15),_transparent_55%)]" />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow ? (
            <p className="text-sm font-bold uppercase tracking-widest text-brand-200">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-4 text-lg leading-relaxed text-brand-100/85">{description}</p>
          ) : null}
          {children ? <div className="mt-8 flex flex-wrap justify-center gap-3">{children}</div> : null}
        </div>
      </Container>
    </div>
  );
}
