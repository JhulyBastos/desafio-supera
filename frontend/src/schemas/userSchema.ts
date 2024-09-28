import { z } from "zod";

export const schema = z.object({
  name: z.string().min(1, "Esse campo é obrigatório"),
  email: z
    .string()
    .min(1, "Esse campo é obrigatório")
    .email("Esse e-mail não é válido"),
  profile: z.string().min(1, "Esse campo é obrigatório"),
  phone: z.string().optional(),
  age: z.string().optional(),
});

export type FormData = z.infer<typeof schema>;
