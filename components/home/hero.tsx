"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarGroup } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [mode, setMode] = useState<"card" | "form" | "success">("card");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    help: "",
  });

  const isSubmitDisabled = useMemo(() => {
    if (!form.firstName.trim()) return true;
    if (!form.lastName.trim()) return true;
    if (!form.email.trim()) return true;
    if (!form.help.trim()) return true;
    if (isSubmitting) return true;
    return false;
  }, [form, isSubmitting]);

  return (
    <section id="waitlist" className="bg-secondary h-screen">
      <div className="container mx-auto  px-4 sm:px-6 lg:px-8 py-12 sm:pt-35">
        <div className="flex flex-col items-center text-center gap-6">
          <motion.h1
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.55,
              delay: shouldReduceMotion ? 0 : 0.08,
            }}
            className="text-balance text-3xl sm:text-5xl font-semibold tracking-tight text-foreground max-w-3xl"
          >
            Join the Strategic Bridge to the 2026 Skills Era.
          </motion.h1>

          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.55,
              delay: shouldReduceMotion ? 0 : 0.14,
            }}
            className="text-pretty text-sm sm:text-lg text-muted-foreground max-w-2xl"
          >
            Be the first to navigate the UK&apos;s new growth &amp; Skills levy.
            Whether you are building a team, delivering excellence, or
            starting/developing your career, Tenacitas is your partner in
            transformation.
          </motion.p>

          <motion.div
            layout
            initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.55,
              delay: shouldReduceMotion ? 0 : 0.2,
            }}
            className="w-full max-w-2xl rounded-2xl bg-background/80 backdrop-blur border border-border shadow-sm p-6 sm:p-8"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mode === "card" ? (
                <motion.div
                  key="waitlist-card"
                  layout
                  layoutId="waitlist-panel"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.25 }}
                  className="flex flex-col items-center gap-5"
                >
                  <AvatarGroup>
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

                  <div className="space-y-1">
                    <p className="text-base font-semibold text-foreground">
                      Join the Tenacitas waitlist today
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Secure your place in the 2026 skills revolution. Whether
                      you are hiring, training, or seeking your next big
                      opportunity, Tenacitas is your partner in growth
                    </p>
                  </div>

                  <Button
                    className="w-full max-w-sm rounded-xl py-6"
                    onClick={() => setMode("form")}
                  >
                    Join the waitlist today
                  </Button>
                </motion.div>
              ) : mode === "form" ? (
                <motion.div
                  key="waitlist-form"
                  layout
                  layoutId="waitlist-panel"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.25 }}
                  className="flex flex-col items-center"
                >
                  <AvatarGroup>
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

                  <div className="mt-5 space-y-2">
                    <p className="text-xl sm:text-2xl font-semibold text-foreground">
                      Join the Tenacitas waitlist today
                    </p>
                    <p className="text-sm sm:text-base text-muted-foreground max-w-xl">
                      Get early access to a platform built to connect growth
                      goals, workforce planning, hiring, and funded skills
                      delivery.
                    </p>
                  </div>

                  <form
                    className="mt-8 w-full space-y-4"
                    onSubmit={async (e) => {
                      e.preventDefault();
                      if (isSubmitDisabled) return;
                      setIsSubmitting(true);
                      const toastId = toast.loading("Joining waitlist…");
                      try {
                        const res = await fetch("/api/waitlist", {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify(form),
                        });

                        const data = (await res.json().catch(() => null)) as {
                          ok: boolean;
                          error?: string;
                        } | null;

                        if (!res.ok || !data?.ok) {
                          toast.error(data?.error ?? "Something went wrong", {
                            id: toastId,
                          });
                          return;
                        }

                        toast.success("You’re on the waitlist", {
                          id: toastId,
                        });
                        setMode("success");
                        setForm({
                          firstName: "",
                          lastName: "",
                          email: "",
                          help: "",
                        });
                      } catch {
                        toast.error("Network error", { id: toastId });
                      } finally {
                        setIsSubmitting(false);
                      }
                    }}
                  >
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Input
                        value={form.firstName}
                        onChange={(e) =>
                          setForm((prev) => ({
                            ...prev,
                            firstName: e.target.value,
                          }))
                        }
                        placeholder="First name"
                        autoComplete="given-name"
                        className="h-11 rounded-lg px-4"
                        required
                      />
                      <Input
                        value={form.lastName}
                        onChange={(e) =>
                          setForm((prev) => ({
                            ...prev,
                            lastName: e.target.value,
                          }))
                        }
                        placeholder="Last name"
                        autoComplete="family-name"
                        className="h-11 rounded-lg px-4"
                        required
                      />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <Input
                        value={form.email}
                        onChange={(e) =>
                          setForm((prev) => ({
                            ...prev,
                            email: e.target.value,
                          }))
                        }
                        type="email"
                        placeholder="Email address"
                        autoComplete="email"
                        className="h-11 rounded-lg px-4"
                        required
                      />
                      <Select
                        value={form.help}
                        onValueChange={(value) =>
                          setForm((prev) => ({
                            ...prev,
                            help: value,
                          }))
                        }
                      >
                        <SelectTrigger className="w-full h-11 rounded-lg px-4">
                          <SelectValue placeholder="How can we help you?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="employer">
                              I&apos;m an employer
                            </SelectItem>
                            <SelectItem value="candidate">
                              I&apos;m a candidate
                            </SelectItem>
                            <SelectItem value="provider">
                              I&apos;m a training provider
                            </SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button
                      type="submit"
                      className="w-full rounded-2xl py-7 text-base"
                      disabled={isSubmitDisabled}
                    >
                      {isSubmitting ? "Joining…" : "Join the waitlist today"}
                    </Button>

                    <button
                      type="button"
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                      onClick={() => setMode("card")}
                    >
                      Back
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="waitlist-success"
                  layout
                  layoutId="waitlist-panel"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.25 }}
                  className="flex flex-col items-center gap-4"
                >
                  <AvatarGroup>
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
                  <div className="space-y-1">
                    <p className="text-xl sm:text-2xl font-semibold text-foreground">
                      You&apos;re on the list
                    </p>
                    <p className="text-sm text-muted-foreground">
                      We&apos;ll be in touch with early access updates soon.
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    className="rounded-xl"
                    onClick={() => setMode("card")}
                  >
                    Done
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
