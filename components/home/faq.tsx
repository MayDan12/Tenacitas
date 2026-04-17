"use client";
import { motion, useReducedMotion } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarGroup } from "../ui/avatar";
import { Button } from "../ui/button";

export default function Faq() {
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
            Frequently asked questions
          </motion.h2>
        </div>

        <div className="mt-8 max-w-4xl mx-auto rounded-xl border border-border bg-card shadow-xs">
          <Accordion type="single" collapsible className="px-6 my-6">
            <AccordionItem value="who">
              <AccordionTrigger>Who should join the waitlist?</AccordionTrigger>
              <AccordionContent>
                The waitlist is a way to reserve your place for early access
                before the platform officially launches.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="cost">
              <AccordionTrigger>Is there a cost to join?</AccordionTrigger>
              <AccordionContent>
                No. joining the waitlist is completely free and doesn&apos;t
                commit you to anything.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="after">
              <AccordionTrigger>What happens after I join?</AccordionTrigger>
              <AccordionContent>
                You&apos;ll receive launch updates, early access news, and
                relevant next steps.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="launch">
              <AccordionTrigger>
                How do I know when Tenacitas has launched?
              </AccordionTrigger>
              <AccordionContent>
                We will send you email updates when Tenacitas goes live.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="mt-12 max-w-3xl mx-auto rounded-2xl bg-secondary/60 border border-border shadow-sm p-6 sm:p-8 text-center">
          <AvatarGroup className="justify-center">
            <Avatar>
              <AvatarFallback>T</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>E</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>N</AvatarFallback>
            </Avatar>
          </AvatarGroup>
          <p className="mt-5 text-base font-semibold text-foreground">
            Be part of the exclusive group of the first partners to collaborate
            with Tenacitas.
          </p>
          <Button asChild className="mt-5 w-full max-w-sm rounded-xl py-6">
            <a href="#waitlist">Join the waitlist today</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
