import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  HomePageContainer,
  CampusContainer,
  StudentContainer,
  AllCampusesContainer,
  AllStudentsContainer,
  NewStudentContainer,
  NewCampusContainer,
  EditCampusContainer
} from "./components/containers";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePageContainer />} />
        <Route path="/campuses" element={<AllCampusesContainer />} />
        <Route path="/campus/:id" element={<CampusContainer />} />
        <Route path="/students" element={<AllStudentsContainer />} />
        <Route path="/newstudent" element={<NewStudentContainer />} />
        <Route path="/student/:id" element={<StudentContainer />} />
        <Route path="/newcampus" element={<NewCampusContainer />} />
        <Route path="/editcampus/:id" element={<EditCampusContainer />} />
      </Routes>
    </div>
  );
};

export default App;

