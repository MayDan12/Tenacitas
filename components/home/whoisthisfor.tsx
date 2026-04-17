"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

export default function WhoIsItFor() {
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
            Who is this for?
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
            Employers closing vital gaps to accredited training providers
            shaping priority skills and future focused professional, Tenacitas
            is where the 2026 workforce is transformed.
          </motion.p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {[
            {
              img: "/candidates.png",
              title: "Candidates",
              body: "Built for talent ready to move into work, develop skills, and grow with confidence.",
            },
            {
              img: "/employers.png",
              title: "Employers",
              body: "Built for SMEs ready to turn workforce gaps into growth opportunities.",
            },
          ].map((item, idx) => (
            <motion.div
              key={item.title}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.5,
                delay: shouldReduceMotion ? 0 : idx * 0.06,
              }}
              className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden"
            >
              <div className="p-5 space-y-4">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={1000}
                  height={100}
                  className="object-cover"
                  priority
                />
                <div>
                  <p
                    className={`font-semibold text-xl md:text-2xl ${idx === 0 ? "text-primary" : "text-[#17B42F]"}`}
                  >
                    {item.title}
                  </p>
                  <p className="mt-2 text-base text-muted-foreground">
                    {item.body}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-5 p-5 bg-[#F4F4F4] rounded-xl">
          <div className="grid gap-8 md:grid-cols-2 mb-4">
            {[
              {
                img: "/trainingprovider1.png",
                title: "Training Provider 1",
              },
              {
                img: "/trainingprovider2.png",
                title: "Training Provider 2",
              },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.5,
                  delay: shouldReduceMotion ? 0 : idx * 0.06,
                }}
                className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={1000}
                  height={100}
                  className="object-cover"
                  priority
                />
              </motion.div>
            ))}
          </div>
          <div>
            <p className="font-semibold text-xl md:text-2xl text-[#6A59CE]">
              Training Provider
            </p>
            <p className="mt-2 text-base text-muted-foreground">
              Built for providers ready to scale impact through better employer
              and learner connections.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
