import SiteLogo from "@/components/SiteLogo";

export default function HomeNav() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-linear-to-b from-brown-dark/50 via-brown-dark/15 to-transparent">
      <div className="flex min-h-[116px] w-full items-center justify-center px-4 sm:min-h-[96px] sm:justify-start sm:px-6 lg:min-h-[104px] lg:px-8">
        <SiteLogo variant="hero" className="mx-auto sm:mx-0" />
      </div>
    </header>
  );
}
