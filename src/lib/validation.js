import { z } from "zod";

const normalizeWhitespace = (val) =>
  typeof val === "string" ? val.replace(/\s+/g, "") : val;

const kenyaWhatsAppRegex = /^(\+?254|0)?(7|1)\d{8}$/;

export const waitlistSchema = z.object({
  full_name: z.string().min(2, "Full name is required."),
  email: z.string().email("Enter a valid email."),
  whatsapp_number: z.preprocess(
    normalizeWhitespace,
    z
      .string()
      .min(9, "Enter a valid Kenyan WhatsApp number.")
      .refine((val) => kenyaWhatsAppRegex.test(val), {
        message: "Enter a valid Kenyan WhatsApp number (e.g. +254712345678)."
      })
  ),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Consent is required." })
  }),
  honeypot: z.string().optional()
});