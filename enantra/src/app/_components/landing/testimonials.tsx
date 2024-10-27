"use client";
import { Avatar, Card, CardBody, CardHeader } from "@nextui-org/react";
import { motion } from "framer-motion";

interface TestimonialProps {
  studentName: string;
  studentTagline: string;
  avatarUrl: string;
  testimonial: string;
}

function Testimonial(props: TestimonialProps) {
  return (
    <Card className="max-w-[340px]">
      <CardHeader className="justify-between">
        <div className="flex items-center gap-5">
          <Avatar isBordered radius="full" size="md" src={props.avatarUrl} />
          <div className="flex flex-col">
            <h4 className="text-small text-default-600 font-semibold leading-none">
              {props.studentName}
            </h4>
            <h5 className="text-foreground/65 text-xs">
              {props.studentTagline}
            </h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className="text-small text-foreground">
        <p>{props.testimonial}</p>
      </CardBody>
    </Card>
  );
}

const TESTIMONIALS = [
  {
    studentName: "Student name 1",
    studentTagline: "Department, year",
    avatarUrl: "https://nextui.org/avatars/avatar-1.png",
    testimonial:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    studentName: "Student name 2",
    studentTagline: "Department, year",
    avatarUrl: "https://nextui.org/avatars/avatar-1.png",
    testimonial:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    studentName: "Student name 3",
    studentTagline: "Department, year",
    avatarUrl: "https://nextui.org/avatars/avatar-1.png",
    testimonial:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    studentName: "Student name 4",
    studentTagline: "Department, year",
    avatarUrl: "https://nextui.org/avatars/avatar-1.png",
    testimonial:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    studentName: "Student name 5",
    studentTagline: "Department, year",
    avatarUrl: "https://nextui.org/avatars/avatar-1.png",
    testimonial:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export default function Testimonials() {
  return (
    <motion.div
      className="from-primary-100 flex w-full flex-col items-center bg-gradient-to-b py-8"
      initial={{ y: 20, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      transition={{ duration: 0.25, type: "spring", bounce: 0 }}
    >
      <h2 className="from-foreground to-foreground/75 bg-gradient-to-b bg-clip-text text-xl font-semibold text-transparent sm:text-2xl">
        What Students are saying
      </h2>
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-center gap-4 py-6">
        {TESTIMONIALS.map((testimonial, index) => (
          <motion.div
            key={testimonial.studentName}
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
            <Testimonial
              studentName={testimonial.studentName}
              studentTagline={testimonial.studentTagline}
              avatarUrl={testimonial.avatarUrl}
              testimonial={testimonial.testimonial}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
