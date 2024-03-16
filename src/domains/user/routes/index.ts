import express from "express"
import userAdminRoutes from "./admin";
import loginUser from "../controllers/login";
import { loginUserValidationSchema } from "../validators";
import validateRequestBody from "../../../middleware/validate-request-body";
const userRoutes = express.Router()

userRoutes.use("/admin", userAdminRoutes)
userRoutes.post("/login", validateRequestBody(loginUserValidationSchema), loginUser)

export default userRoutes;