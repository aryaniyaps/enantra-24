"use client";
import { Chip } from "@nextui-org/react";
import { motion } from "framer-motion";

export default function Sponsors() {
  // svg icons provided by https://svgl.app/
  const icons = [
    {
      name: "Sponsor 1",
    },
    {
      name: "Sponsor 2",
    },
    {
      name: "Sponsor 3",
    },
    {
      name: "Sponsor 4",
    },
    {
      name: "Sponsor 5",
    },
  ];

  return (
    <motion.div
      className="from-primary-100 w-full bg-gradient-to-t"
      initial={{ y: 20, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      transition={{ duration: 0.25, type: "spring", bounce: 0 }}
    >
      <section className="mx-auto flex w-full max-w-screen-md flex-col items-center justify-center gap-10 px-4 py-24 text-center md:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0, filter: "blur(3px)" }}
          whileInView={{
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "spring", bounce: 0 }}
          className="flex flex-col gap-3"
        >
          <h2 className="from-foreground to-foreground/75 bg-gradient-to-b bg-clip-text text-xl font-semibold text-transparent sm:text-2xl">
            Our Sponsors
          </h2>
        </motion.div>
        <div className="grid w-full grid-cols-3 grid-rows-3 place-items-center gap-5 sm:grid-cols-5 sm:grid-rows-1">
          {icons.map((icon, index) => (
            <motion.div
              key={icon.name}
              initial={{ y: 20, opacity: 0, filter: "blur(3px)" }}
              whileInView={{
                y: 0,
                filter: "blur(0px)",
                opacity: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: index * 0.1,
                type: "spring",
                bounce: 0,
              }}
            >
              <Chip size="lg" variant="faded">
                {icon.name}
              </Chip>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
