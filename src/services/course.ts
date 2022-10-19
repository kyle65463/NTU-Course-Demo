import axios from "axios";
import { Course } from "../stores/course";

export async function fetchCourses() {
  const res = await axios.get("/api/course");
  return res.data as Course[];
}
