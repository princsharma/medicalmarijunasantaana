import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

export type LegalList = {
  intro?: string;
  items: string[];
};

export type LegalSubsection = {
  heading: string;
  body?: ReactNode[];
  lists?: LegalList[];
};

export type LegalSection = {
  heading: string;
  lead?: string[];
  body?: ReactNode[];
  lists?: LegalList[];
  subsections?: LegalSubsection[];
};

type LegalPageProps = {
  title: string;
  updated?: string;
  intro: string | string[];
  sections: LegalSection[];
};

export function LegalPage({ title, updated, intro, sections }: LegalPageProps) {
  const introParagraphs = Array.isArray(intro) ? intro : [intro];

  return (
    <article className="py-16 sm:py-20">
      <Container narrow>
        <h1 className="font-display text-4xl font-bold tracking-tight text-neutral-900">
          {title}
        </h1>
        {updated ? (
          <p className="mt-2 text-sm text-neutral-500">Last updated: {updated}</p>
        ) : null}
        {introParagraphs.map((paragraph, index) => (
          <p
            key={index}
            className={
              index === 0
                ? "mt-6 leading-relaxed text-neutral-600"
                : "mt-3 leading-relaxed text-neutral-600"
            }
          >
            {paragraph}
          </p>
        ))}

        <div className="mt-10 space-y-8">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-display text-xl font-bold text-neutral-900">
                {section.heading}
              </h2>
              <div className="mt-2 space-y-3 leading-relaxed text-neutral-600">
                {section.lead?.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
                {section.lists?.map((list, listIndex) => (
                  <div key={listIndex} className="space-y-2">
                    {list.intro ? <p>{list.intro}</p> : null}
                    <ul className="list-disc space-y-1 pl-5">
                      {list.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
                {section.body?.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
                {section.subsections?.map((subsection) => (
                  <div key={subsection.heading} className="space-y-3">
                    <h3 className="font-display text-lg font-semibold text-neutral-900">
                      {subsection.heading}
                    </h3>
                    {subsection.lists?.map((list, listIndex) => (
                      <div key={listIndex} className="space-y-2">
                        {list.intro ? <p>{list.intro}</p> : null}
                        <ul className="list-disc space-y-1 pl-5">
                          {list.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    {subsection.body?.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </article>
  );
}
