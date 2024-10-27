import nodemailer from "nodemailer";
import { env } from "@/env";

export const transporter = nodemailer.createTransport({
  host: env.EMAIL_SERVER_HOST,
  port: env.EMAIL_SERVER_PORT,
  secure: env.EMAIL_SECURE,
  ...(env.EMAIL_SERVER_USER && env.EMAIL_SERVER_PASSWORD
    ? {
        auth: {
          user: env.EMAIL_SERVER_USER,
          pass: env.EMAIL_SERVER_PASSWORD,
        },
      }
    : {}),
});
