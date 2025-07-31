import "./App.css";
import Header from "./Header";
import { courses } from "./Data";
import Courses from "./Courses";
import "./css/Course.css";

function App() {
  return (
    <div>
      <Header />
      <div className="course-main">
        {courses?.map((course) => (
          <Courses key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

export default App;
