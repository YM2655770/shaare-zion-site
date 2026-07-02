"use client";

import { serviceGridItems, serviceIconMap, type ServiceItem } from "@/lib/services";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

function ServiceCard({ service }: { service: ServiceItem }) {
  const Icon = serviceIconMap[service.icon];
  const isPrimary = service.priority === "primary";

  return (
    <motion.li variants={cardVariants} className={cn("min-h-[140px]", service.gridClass)}>
      <Link href={service.href} className="block h-full">
        <motion.article
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.99 }}
          transition={{ type: "spring", stiffness: 320, damping: 22 }}
          className={cn(
            "group flex h-full flex-col justify-between rounded-2xl p-6 sm:p-8",
            isPrimary
              ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
              : "border border-border bg-card text-card-foreground shadow-sm hover:border-primary/25 hover:shadow-md",
          )}
        >
          <span
            className={cn(
              "flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-300",
              isPrimary
                ? "bg-white/15 text-white group-hover:bg-white/25"
                : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground",
            )}
            aria-hidden
          >
            <Icon className="h-6 w-6" strokeWidth={1.75} />
          </span>

          <div className="mt-6">
            <h3 className="text-lg font-semibold tracking-tight sm:text-xl">{service.label}</h3>
            <p
              className={cn(
                "mt-2 text-sm leading-relaxed sm:text-base",
                isPrimary ? "text-white/85" : "text-muted-foreground",
              )}
            >
              {service.description}
            </p>
          </div>
        </motion.article>
      </Link>
    </motion.li>
  );
}

export default function ServiceGrid() {
  return (
    <section aria-labelledby="services-heading" className="px-4 pb-20 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 max-w-2xl">
          <h2
            id="services-heading"
            className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            שירותים עירוניים
          </h2>
          <p className="mt-3 text-base text-muted-foreground sm:text-lg">
            גישה מהירה לשירותים החשובים ביותר — מודרני, ברור ונגיש.
          </p>
        </div>

        <motion.ul
          role="list"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-4 sm:auto-rows-[minmax(140px,auto)] sm:gap-6"
        >
          {serviceGridItems.map((service) => (
            <ServiceCard key={service.href} service={service} />
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
