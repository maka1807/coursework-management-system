import User from "../../domains/user/models/user";
import School, { schoolRelations } from "../../domains/school/models/school"
import UserSession, { userSessionRelations } from "../../domains/user/models/user-session";
import Program, { programRelations } from "../../domains/program/models/program";
import Course, { courseRelations } from "../../domains/course/models/course";

export {
    User, UserSession, userSessionRelations,
    School, schoolRelations,
    Program, programRelations,
    Course, courseRelations
}