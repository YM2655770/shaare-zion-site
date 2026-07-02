"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

type SearchBarProps = {
  large?: boolean;
};

export default function SearchBar({ large = false }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = query.trim();
    if (trimmed) {
      router.push(`/search?q=${encodeURIComponent(trimmed)}`);
    }
  }

  return (
    <form onSubmit={handleSubmit} className={`mx-auto w-full ${large ? "max-w-2xl" : "max-w-xl"}`}>
      <div
        className={`gold-glow flex items-center rounded-full bg-surface/80 transition-shadow ${
          large ? "px-6 py-4 sm:py-5" : "px-5 py-3.5"
        }`}
      >
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="חפש פיוט..."
          aria-label="חפש פיוט"
          className={`w-full bg-transparent text-foreground outline-none placeholder:text-muted ${
            large ? "text-base sm:text-lg" : "text-base"
          }`}
        />
        <svg
          className={`ms-3 shrink-0 text-gold/70 ${large ? "h-6 w-6" : "h-5 w-5"}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>
    </form>
  );
}
