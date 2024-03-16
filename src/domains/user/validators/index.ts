import { z } from "zod"

const emailValidationField = z.string({ required_error: "Email is required" }).email({ message: "The email entered is not valid" })
  .refine(s => s.endsWith("@hit.ac.zw"), { message: "The email should be a HIT email" })
const passwordValidationField = z
  .string({ required_error: "Password field is required" })
  .min(8, { message: "Password must be at least 8 characters long" })
  .max(1024, { message: "Password must be less than 1024 characters long" })
  .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/, {
    message:
      "Password must contain at least one number, one uppercase letter and one one lowercase letter.",
  })

const createAdminValidationSchema = z.object({
  email: emailValidationField,
  password: passwordValidationField,
})

const loginUserValidationSchema = z.object({
  email: emailValidationField,
  password: passwordValidationField,
})

export { createAdminValidationSchema, loginUserValidationSchema }