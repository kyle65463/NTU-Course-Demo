const courseData = [
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

const CourseInfoList = () => {
  return (
    <section>
      {courseData.map(({ title, curriculumNumber }) => (
        <div key={curriculumNumber}>
          <h3>{title}</h3>
        </div>
      ))}
    </section>
  );
};

export default CourseInfoList;
