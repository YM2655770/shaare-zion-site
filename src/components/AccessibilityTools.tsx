"use client";

import { Button } from "@/components/ui/button";
import { languages, type Language } from "@/lib/municipal";
import { cn } from "@/lib/utils";
import { Contrast, PhoneCall, Type } from "lucide-react";
import { useEffect, useState } from "react";

export default function AccessibilityTools() {
  const [textSize, setTextSize] = useState<"normal" | "large" | "xlarge">("normal");
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    document.body.classList.remove("text-large", "text-xlarge", "high-contrast");
    if (textSize === "large") document.body.classList.add("text-large");
    if (textSize === "xlarge") document.body.classList.add("text-xlarge");
    if (highContrast) document.body.classList.add("high-contrast");
  }, [textSize, highContrast]);

  function cycleTextSize() {
    setTextSize((current) => {
      if (current === "normal") return "large";
      if (current === "large") return "xlarge";
      return "normal";
    });
  }

  return (
    <div className="flex items-center gap-1" role="group" aria-label="כלי נגישות">
      <Button
        type="button"
        variant="ghost"
        size="icon"
        onClick={cycleTextSize}
        aria-label="שינוי גודל טקסט"
        title="גודל טקסט"
      >
        <Type className="h-4 w-4" strokeWidth={1.5} aria-hidden />
      </Button>
      <Button
        type="button"
        variant="ghost"
        size="icon"
        onClick={() => setHighContrast((v) => !v)}
        aria-label="ניגודיות גבוהה"
        aria-pressed={highContrast}
        title="ניגודיות גבוהה"
        className={cn(highContrast && "bg-primary/10 text-primary")}
      >
        <Contrast className="h-4 w-4" strokeWidth={1.5} aria-hidden />
      </Button>
    </div>
  );
}

export function LanguageSelector({
  active,
  onChange,
}: {
  active: Language;
  onChange: (lang: Language) => void;
}) {
  return (
    <div
      className="flex items-center gap-0.5 rounded-xl border border-border/60 bg-muted/50 p-0.5"
      role="group"
      aria-label="בחירת שפה"
    >
      {languages.map((lang) => (
        <button
          key={lang.code}
          type="button"
          onClick={() => onChange(lang.code)}
          aria-pressed={active === lang.code}
          className={cn(
            "min-h-[44px] min-w-[44px] rounded-lg px-2.5 text-xs font-semibold transition-all duration-200 hover:scale-105 sm:min-h-0 sm:min-w-0 sm:px-2.5 sm:py-1",
            active === lang.code
              ? "bg-background text-primary shadow-sm"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}

export function EmergencyLink() {
  return (
    <Button variant="destructive" size="sm" asChild>
      <a href="tel:106">
        <PhoneCall className="h-4 w-4" aria-hidden />
        106
      </a>
    </Button>
  );
}
