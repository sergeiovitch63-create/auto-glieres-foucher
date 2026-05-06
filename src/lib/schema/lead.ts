import { z } from "zod";

export const leadSchema = z.object({
  firstName: z.string().min(2, "Au moins 2 caractères"),
  lastName: z.string().min(2, "Au moins 2 caractères"),
  email: z.string().email("Email invalide"),
  phone: z
    .string()
    .min(10, "Numéro trop court")
    .regex(/^[0-9+\s().-]{10,}$/, "Numéro invalide"),
  formation: z.string().min(1, "Choisis une formation"),
  message: z.string().optional(),
  rgpd: z.literal(true, { message: "Tu dois accepter pour continuer" }),
});

export type LeadValues = z.infer<typeof leadSchema>;
