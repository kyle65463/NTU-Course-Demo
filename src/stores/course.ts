import create from "zustand";

export interface Course {
  title: string;
  credits: number;
  instructor: string;
  curriculumNumber: string;
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
    curriculumNumber: "MATH4008",
  },
  {
    title: "Object-oriented Software Design",
    credits: 2,
    instructor: "Paul",
    curriculumNumber: "CSIE1211",
  },
  {
    title: "Discrete Mathematics",
    credits: 3,
    instructor: "Kelly",
    curriculumNumber: "CSIE2122",
  },
  {
    title: "Probability",
    credits: 2,
    instructor: "Tina",
    curriculumNumber: "CSIE2121",
  },
  {
    title: "Foundations of Artificial Intelligence",
    credits: 2,
    instructor: "Anna",
    curriculumNumber: "CSIE3005",
  },
  {
    title: "Operating Systems",
    credits: 2,
    instructor: "Bruce",
    curriculumNumber: "CSIE3310",
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
