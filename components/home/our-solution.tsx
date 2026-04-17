"use client";
import { Card, CardContent } from "../ui/card";
import { motion, useReducedMotion } from "framer-motion";
import { ChartNoAxesCombined } from "lucide-react";
import UserBriefcase from "../icons/user-briefcase";
import BusinessHouse from "../icons/business-house";

export default function OurSolution() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <section className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-18 py-14 sm:py-20">
        <div className="text-center max-w-2xl mx-auto">
          <motion.h2
            initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
            className="text-2xl sm:text-3xl font-semibold tracking-tight"
          >
            Our Solutions
          </motion.h2>
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.5,
              delay: shouldReduceMotion ? 0 : 0.06,
            }}
            className="mt-3 text-sm sm:text-base text-muted-foreground"
          >
            The community infrastructure that connects employers, training
            providers, and learners with clarity, capability, and outcomes.
          </motion.p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Growth Skills Audit",
              body: "Identifies strengths, gaps and priority areas for development. Helping guide targeted learning and career progression to generate revenue.",
              Icon: ChartNoAxesCombined,
            },
            {
              title: "Full journey management",
              body: "We sit between employers, candidates, training providers, and government funding managing every stage so you don't have to.",
              Icon: UserBriefcase,
            },
            {
              title: "Commercial outcomes only",
              body: "All training plans are aligned with revenue or efficiency objectives, and we do not advocate for training solely for its own sake.",
              Icon: BusinessHouse,
            },
          ].map(({ title, body, Icon }, idx) => (
            <motion.div
              key={title}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.5,
                delay: shouldReduceMotion ? 0 : idx * 0.06,
              }}
            >
              <Card className="h-full">
                <CardContent className="space-y-4">
                  <div className="size-15 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <Icon className="size-12" color="#1F1F1F" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg text-foreground">
                      {title}
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">{body}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
