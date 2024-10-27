"use client";
import {
  APP_NAME,
  FEEDBACK_EMAIL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
} from "@/utils/constants";
import { motion } from "framer-motion";
import { Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <motion.footer
      className="bg-background border-t-1 border-foreground/15 w-full pb-16"
      initial={{ opacity: 0, filter: "blur(3px)" }}
      whileInView={{
        opacity: 1,
        filter: "blur(0px)",
      }}
    >
      <div className="text-foreground/65 mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4 text-xs">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4">
            <Link href={INSTAGRAM_URL} target="_blank">
              <Instagram className="h-6 w-6" />
            </Link>
            <Link href={LINKEDIN_URL} target="_blank">
              <Linkedin className="h-6 w-6" />
            </Link>
          </div>
          <p>
            Facing issues? contact us at{" "}
            <Link className="text-primary" href={`mailto:${FEEDBACK_EMAIL}`}>
              {FEEDBACK_EMAIL}
            </Link>
          </p>
        </div>
        <p>&copy; {APP_NAME}. All rights reserved.</p>
      </div>
    </motion.footer>
  );
}
