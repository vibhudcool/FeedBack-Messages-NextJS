import z from "zod";

export const messageSchema = z.object({
        content: z
        .string()
        .min(10, "Character must be atleast 10")
        .max(300,"Character must be less than 300")
})