import type { NextApiRequest, NextApiResponse } from "next";
import { Course } from "../../stores/course";
import rawCourses from "./course_list.json";

const courses: Course[] = Object.values(rawCourses).map((course) => ({
  title: course["Course title"],
  credits: course["Credits"],
  instructor: course["Instructor"],
  id: course["Curriculum Number"],
}));

const fetchCourses = async (_: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(courses);
};

export default fetchCourses;
