import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string({ required_error: "veuillez entrez une adresse mail" })
    .email(),
  password: z
    .string({
      required_error: "mot de passe requis",
    })
    .min(6, { message: "mot de passe doit au contenir au moins 6 caractères" }),
});

export const registerSchema = z
  .object({
    name: z
      .string({ required_error: "Veuillez entrer un nom" })
      .min(1, { message: "Le nom est requis" }),
    email: z
      .string({ required_error: "Veuillez entrer une adresse mail" })
      .email({ message: "Adresse mail invalide" }),
    password: z.string({ required_error: "Mot de passe requis" }).min(6, {
      message: "Le mot de passe doit contenir au moins 6 caractères",
    }),
    confirmPassword: z
      .string({ required_error: "Confirmation du mot de passe requise" })
      .min(6, {
        message: "Le mot de passe doit contenir au moins 6 caractères",
      }),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: "custom",
        message: "Les mots de passe ne correspondent pas",
        path: ["confirmPassword"], // This will target the confirmPassword field
      });
    }
  });
