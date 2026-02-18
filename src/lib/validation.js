import { z } from "zod";

export const waitlistSchema = z.object({
  full_name: z.string().min(2, "Full name is required."),
  email: z.string().email("Enter a valid email."),
  whatsapp_number: z
    .string()
    .min(6, "Enter a valid WhatsApp number with country code."),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Consent is required." })
  }),
  honeypot: z.string().optional()
});