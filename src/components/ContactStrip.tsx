"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, MessageSquare, Phone } from "lucide-react";
import { FormEvent, useState } from "react";

export default function ContactStrip() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section aria-labelledby="contact-heading" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-3xl border border-border/60 bg-primary text-primary-foreground shadow-xl shadow-primary/15">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 sm:p-10 lg:p-12">
              <h2 id="contact-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
                בואו נדבר
              </h2>
              <p className="mt-3 max-w-md text-base text-white/85 sm:text-lg">
                יש לכם שאלה, בקשה או הצעה? צרו קשר עם העירייה — נחזור אליכם בהקדם.
              </p>

              <ul role="list" className="mt-8 space-y-4 text-sm sm:text-base">
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0" aria-hidden />
                  <a href="tel:046593333" className="transition-opacity hover:opacity-80">
                    04-659-3333
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0" aria-hidden />
                  <a href="mailto:info@afula.muni.il" className="transition-opacity hover:opacity-80">
                    info@afula.muni.il
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MessageSquare className="h-5 w-5 shrink-0" aria-hidden />
                  <span>רחוב הנשיא וייצמן 1, עפולה</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 p-8 backdrop-blur-sm sm:p-10 lg:p-12">
              {submitted ? (
                <p className="rounded-2xl bg-white/15 p-6 text-center text-lg font-medium">
                  תודה! פנייתכם התקבלה.
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium">
                      שם מלא
                    </label>
                    <Input
                      id="contact-name"
                      name="name"
                      required
                      className="border-white/20 bg-white/95 text-foreground"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium">
                      דוא&quot;ל
                    </label>
                    <Input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      className="border-white/20 bg-white/95 text-foreground"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium">
                      הפנייה
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={4}
                      className="w-full rounded-xl border border-white/20 bg-white/95 px-4 py-3 text-foreground outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                    />
                  </div>
                  <Button type="submit" variant="outline" className="w-full border-white/30 bg-white text-primary hover:bg-white/90">
                    שליחה
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
