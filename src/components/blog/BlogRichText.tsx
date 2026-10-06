import Link from "next/link";
import type { BlogBlock, BlogTextLink } from "@/data/blog";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";

function renderTextWithLinks(text: string, links?: BlogTextLink[]) {
  if (!links?.length) return text;

  const parts: React.ReactNode[] = [];
  let remaining = text;

  for (const link of links) {
    const index = remaining.indexOf(link.label);
    if (index === -1) continue;
    if (index > 0) parts.push(remaining.slice(0, index));
    parts.push(
      <Link
        key={`${link.label}-${link.href}`}
        href={link.href}
        className="font-medium text-brand-700 underline hover:text-brand-800"
      >
        {link.label}
      </Link>
    );
    remaining = remaining.slice(index + link.label.length);
  }

  if (remaining) parts.push(remaining);
  return parts.length ? parts : text;
}

export function BlogRichText({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="space-y-6 text-neutral-700 leading-relaxed">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "p":
            return (
              <p
                key={index}
                className={block.dropCap ? "first-letter:float-left first-letter:mr-2 first-letter:text-5xl first-letter:font-display first-letter:font-bold first-letter:text-brand-700" : undefined}
              >
                {renderTextWithLinks(block.text, block.links)}
              </p>
            );
          case "h2":
            return (
              <h2
                key={index}
                id={block.text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}
                className="scroll-mt-28 font-display text-2xl font-bold text-neutral-900 sm:text-3xl"
              >
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={index} className="font-display text-xl font-bold text-neutral-900">
                {block.text}
              </h3>
            );
          case "ul":
            return (
              <ul key={index} className="list-disc space-y-2 pl-6">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          case "keypoints":
            return (
              <div
                key={index}
                className="rounded-2xl border border-brand-200/60 bg-brand-50/50 p-6"
              >
                <p className="mb-3 text-sm font-bold uppercase tracking-widest text-brand-800">
                  Key Points
                </p>
                <ul className="space-y-2">
                  {block.items.map((item) => (
                    <li key={item} className="flex gap-2 text-sm">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          case "cta":
            return (
              <div
                key={index}
                className="rounded-2xl bg-gradient-to-br from-brand-800 to-brand-950 p-8 text-center text-white"
              >
                <p className="font-display text-xl font-bold">Ready to get your card?</p>
                <p className="mt-2 text-brand-100/85">
                  Start your Santa Ana telehealth evaluation today.
                </p>
                <Button href="/#apply" variant="accent" size="lg" className="mt-5">
                  Get Started
                </Button>
              </div>
            );
          case "table":
            return (
              <div key={index} className="overflow-x-auto rounded-2xl border border-neutral-200">
                <table className="min-w-full text-sm">
                  <thead className="bg-brand-50 text-left">
                    <tr>
                      <th className="px-4 py-3 font-semibold text-neutral-900">Activity</th>
                      <th className="px-4 py-3 font-semibold text-neutral-900">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100">
                    {block.rows.map((row) => (
                      <tr key={row.activity}>
                        <td className="px-4 py-3">{row.activity}</td>
                        <td className="px-4 py-3">{row.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case "faq":
            return (
              <Accordion
                key={index}
                items={block.items.map((item) => ({
                  question: item.question,
                  answer: item.answer,
                }))}
              />
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
