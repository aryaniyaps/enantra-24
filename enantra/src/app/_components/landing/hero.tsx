"use client";
/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <div className="relative items-center justify-center">
      <section className="mx-auto flex max-w-screen-xl flex-col items-center justify-center gap-12 px-4 py-28 md:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{ duration: 0.6, type: "spring", bounce: 0 }}
          className="mx-auto flex max-w-4xl flex-col items-center justify-center space-y-5 text-center"
        >
          <span className="bg-card border-border h-full w-fit rounded-full border px-2 py-1 text-sm">
            Last date to register - November 22
          </span>
          <h1 className="mx-auto text-pretty text-4xl font-medium tracking-tighter md:text-6xl">
            The Biggest Entrepreneurship Fest in Anna University is here!
          </h1>
          <p className="text-foreground/85 mx-auto max-w-2xl text-balance text-lg font-semibold">
            <Typewriter
              words={["November 20, 30, December 1"]}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </p>
        </motion.div>
      </section>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5, type: "spring", bounce: 0 }}
        className="pointer-events-none absolute -top-32 flex h-full w-full items-center justify-end"
      >
        <div className="flex w-3/4 items-center justify-center">
          <div className="bg-light h-[600px] w-12 rounded-3xl blur-[70px] [will-change:transform] max-sm:rotate-[15deg] sm:rotate-[35deg]"></div>
        </div>
      </motion.div>
    </div>
  );
}
