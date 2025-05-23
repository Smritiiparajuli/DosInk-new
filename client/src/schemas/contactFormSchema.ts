import { z } from "zod";
import { parsePhoneNumberFromString } from "libphonenumber-js";

export enum Language {
  English = "English",
  Thai = "Thai",
}

const phoneNumberSchema = z
  .string()
  .nonempty({ message: "Mobile number is required" })
  .refine(
    (number) => {
      try {
        const phoneNumber = parsePhoneNumberFromString(number);
        return phoneNumber?.isValid();
      } catch {
        return false;
      }
    },
    { message: "Invalid phone number" }
  );

export const contactFormSchema = z.object({
  firstname: z.string().min(1, "First name is required"),
  lastname: z.string().optional(),
  organization: z.string().min(1, "Organization is required"),
  email: z.string().email("Invalid email address"),
  mobile: phoneNumberSchema,
  details: z.string(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
