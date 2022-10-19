import axios from "axios";
import { Course } from "../stores/course";

// Fetch available courses data from api
export async function fetchCourses() {
  const res = await axios.get("/api/course");
  return res.data as Course[];
}
