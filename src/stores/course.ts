import create from "zustand";

export interface Course {
  title: string;
  credits: number;
  instructor: string;
  id: string;
}

export const emptyCourse: Course = {
  title: "",
  credits: 0,
  instructor: "",
  id: "",
};

interface CourseState {
  // Data of all available courses
  courses: Course[];

  // Ids of courses that are selected by the user
  selectedCourseIds: string[];

  // Ids of the result courses after confirming selection
  resultCourseIds: string[];

  // Set available courses data
  setCourseList: (courses: Course[]) => void;

  // Add a course id to selectedCourseIds
  selectCourse: (courseId: string) => void;

  // Remove a course id from selectedCourseIds
  unselectCourse: (courseId: string) => void;

  // Reset selectedCourseIds
  resetSelectedCourse: () => void;

  // Copy selectedCourseIds to resultCourseIds
  confirmSelection: () => void;

  // Reorder a current selecting course from a index to another
  // e.g. [1, 2, 3, 4] => [3, 1, 2, 4] (moving from index 2 to index 0)
  // Note: 0-indexed
  reorderPriority: (oldIndex: number, newIndex: number) => void;
}

export const useCourseStore = create<CourseState>()((set) => ({
  courses: [],
  selectedCourseIds: [],
  resultCourseIds: [],
  setCourseList: (courses) => set((state) => ({ ...state, courses })),
  selectCourse: (courseId) =>
    set((state) => {
      if (state.selectedCourseIds.includes(courseId)) {
        // The course has been already selected, ignore the action
        return { ...state };
      } else {
        // The course has not been selected, add the course to the list
        return { selectedCourseIds: [...state.selectedCourseIds, courseId] };
      }
    }),
  unselectCourse: (courseId) =>
    set((state) => {
      if (state.selectedCourseIds.includes(courseId)) {
        // The course has been already selected, unselect it
        return {
          selectedCourseIds: state.selectedCourseIds.filter(
            (id) => id !== courseId
          ),
        };
      } else {
        // The course has not been selected, ignore the action
        return { ...state };
      }
    }),
  resetSelectedCourse: () =>
    set((state) => ({ ...state, selectedCourseIds: [] })),
  confirmSelection: () =>
    set((state) => ({
      ...state,
      resultCourseIds: state.selectedCourseIds,
    })),
  reorderPriority: (oldIndex, newIndex) =>
    set((state) => {
      const result = [...state.selectedCourseIds];
      result.splice(newIndex, 0, result.splice(oldIndex, 1)[0] ?? "");
      return { ...state, selectedCourseIds: result };
    }),
}));
