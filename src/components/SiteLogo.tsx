import { congregationInfo } from "@/lib/shaare-zion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type SiteLogoProps = {
  variant?: "hero" | "footer";
  className?: string;
  onClick?: () => void;
};

export default function SiteLogo({
  variant = "hero",
  className,
  onClick,
}: SiteLogoProps) {
  const isHero = variant === "hero";

  return (
    <Link
      href="/"
      onClick={onClick}
      className={cn("group block shrink-0", className)}
      aria-label={`${congregationInfo.name} — Home`}
    >
      <Image
        src={congregationInfo.logo}
        alt={congregationInfo.name}
        width={1024}
        height={608}
        unoptimized
        priority={isHero}
        className={cn(
          "h-auto w-auto object-contain object-left brightness-0 invert",
          isHero
            ? "max-h-[100px] max-w-[min(260px,52vw)] drop-shadow-[0_2px_14px_rgba(0,0,0,0.4)] sm:max-h-28 sm:max-w-[300px] lg:max-h-32 lg:max-w-[340px]"
            : "max-h-[92px] max-w-[220px] opacity-90 transition-opacity group-hover:opacity-100 sm:max-h-24 sm:max-w-[240px]",
        )}
      />
    </Link>
  );
}
