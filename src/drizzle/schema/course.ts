



// import { relations } from "drizzle-orm"
// import { pgTable, text,timestamp,uuid } from "drizzle-orm/pg-core"


// export const CourseTable = pgTable("courses", {
//     id: uuid().primaryKey().defaultRandom(),
//     name: text().notNull(),
//     description: text().notNull(),
//     createdAt:timestamp({ withTimezone: true }).notNull().defaultNow(),
//     updatedAt:timestamp({ withTimezone: true })
//     .notNull()
//     .defaultNow()
//     .$onUpdate(() => new Date()),
//   })
  
//   export const CourseRelationships = relations(CourseTable, ({ one,many }) => ({
//      test: one()
//   }))


import { relations } from "drizzle-orm"
import { pgTable, text } from "drizzle-orm/pg-core"
import { createdAt, id, updatedAt } from "../schemaHelpers"
import { CourseProductTable } from "./courseProduct"
import { UserCourseAccessTable } from "./userCourseAccess"
import { CourseSectionTable } from "./courseSection"

export const CourseTable = pgTable("courses", {
  id,
  name: text().notNull(),
  description: text().notNull(),
  createdAt,
  updatedAt,
})

export const CourseRelationships = relations(CourseTable, ({ many }) => ({
  courseProducts: many(CourseProductTable),
  userCourseAccesses: many(UserCourseAccessTable),
  courseSections: many(CourseSectionTable),
}))