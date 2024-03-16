import db from "../../../config/db";
import { Controller } from "../../../types";
import logger from "../../../utils/logger";
import Course from "../models/course";

const createCourse: Controller = async (req, res) => {

  const program = await db.query.Program.findFirst({
    where: ({ code }, { eq }) => eq(code, req.body.programCode),
    columns: {
      numberOfYears: true
    }
  })

  if (program.numberOfYears > req.body.year)
    return res.status(400).send({ status: "error", errors: ["Year cannot be greater than program number of years"] })

  await db.insert(Course).values({
    code: req.body.code,
    createdAt: Date.now(),
    name: req.body.name,
    year: req.body.year,
    programCode: req.body.programCode,
    semester: req.body.semester
  })
    .then(() => {
      res.status(200).send({ status: "success" })
    })
    .catch((e: any) => {
      res.status(500).send({ status: "error", errors: ["An internal error has occured"] })
      logger("create_course_failed", e)
    })
}

export default createCourse;