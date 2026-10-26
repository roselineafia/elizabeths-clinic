"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function FaqAccordion({
  items,
}: {
  items: ReadonlyArray<{ id: string; question: string; answer: string }>;
}) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);
  const baseId = useId();

  return (
    <div className="divide-y divide-line rounded-3xl border border-line bg-white">
      {items.map((item) => {
        const open = openId === item.id;
        const panelId = `${baseId}-${item.id}-panel`;
        const buttonId = `${baseId}-${item.id}-button`;
        return (
          <div key={item.id}>
            <h3>
              <button
                id={buttonId}
                type="button"
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-ink sm:px-6"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenId(open ? null : item.id)}
              >
                {item.question}
                <ChevronDown
                  aria-hidden="true"
                  className={cn("h-5 w-5 shrink-0 text-brand transition", open && "rotate-180")}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!open}
              className="px-5 pb-5 text-sm leading-6 text-muted sm:px-6"
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
