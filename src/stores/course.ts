import create from "zustand";

export interface Course {
  title: string;
  credits: number;
  instructor: string;
  id: string;
}

interface CourseState {
  courses: Course[];
  selectedCourseIds: string[];
  selectCourse: (courseId: string) => void;
}

const defaultCourses: Course[] = [
  {
    title: "CALCULUS",
    credits: 2,
    instructor: "Peter",
    id: "MATH4008",
  },
  {
    title: "Object-oriented Software Design",
    credits: 2,
    instructor: "Paul",
    id: "CSIE1211",
  },
  {
    title: "Discrete Mathematics",
    credits: 3,
    instructor: "Kelly",
    id: "CSIE2122",
  },
  {
    title: "Probability",
    credits: 2,
    instructor: "Tina",
    id: "CSIE2121",
  },
  {
    title: "Foundations of Artificial Intelligence",
    credits: 2,
    instructor: "Anna",
    id: "CSIE3005",
  },
  {
    title: "Operating Systems",
    credits: 2,
    instructor: "Bruce",
    id: "CSIE3310",
  },
];

export const useCourseStore = create<CourseState>()((set) => ({
  courses: defaultCourses,
  selectedCourseIds: [],
  selectCourse: (courseId) =>
    set((state) => {
      if (state.selectedCourseIds.includes(courseId)) {
        // The course has been already selected
        return { ...state };
      }
      return { selectedCourseIds: [...state.selectedCourseIds, courseId] };
    }),
}));
