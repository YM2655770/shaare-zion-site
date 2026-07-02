import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cityEvents } from "@/lib/services";
import { Calendar, MapPin } from "lucide-react";
import Link from "next/link";

export default function EventsSection() {
  return (
    <section aria-labelledby="events-heading" className="bg-muted/50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Badge variant="secondary" className="mb-4">
              אירועים
            </Badge>
            <h2
              id="events-heading"
              className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              אירועים בעפולה
            </h2>
          </div>
          <Button variant="outline" asChild>
            <Link href="/culture-sport">כל האירועים</Link>
          </Button>
        </div>

        <ul role="list" className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {cityEvents.map((event) => (
            <li key={event.slug}>
              <Card className="interactive-scale h-full border-border/60 bg-card/90 backdrop-blur-sm transition-all hover:border-primary/25 hover:shadow-lg hover:shadow-primary/5">
                <CardHeader className="gap-3 p-6">
                  <Badge variant="default" className="w-fit">
                    {event.category}
                  </Badge>
                  <CardTitle className="text-lg leading-snug">{event.title}</CardTitle>
                  <CardDescription className="space-y-2 text-sm">
                    <span className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                      {event.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                      {event.location}
                    </span>
                  </CardDescription>
                </CardHeader>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
