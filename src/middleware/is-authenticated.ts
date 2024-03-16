import type { NextFunction, Request, Response } from "express-serve-static-core";
import db from "../config/db";

const isAuthenticated = async (req: Request, res: Response, next: NextFunction) => {

    //TODO: Check if session has expired
    const sessionId: string | null = (req.headers["authorization"]?.split(" ")[1]
        || req.cookies["auth-token"]) ?? null

    if (!sessionId) {
        req.session = null
        req.user = null
        return next();
    }

    const session = await db.query.UserSession.findFirst({ columns: { userId: true }, with: { user: { columns: { role: true } } }, where: (userSession, { eq }) => eq(userSession.id, sessionId) })

    if (!session) {
        req.session = null
        req.user = null
        return next();
    }

    req.session = { id: sessionId }
    req.user = { id: session.userId, role: session.user.role }
    return next();

}
export default isAuthenticated;