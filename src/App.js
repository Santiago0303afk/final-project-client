import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {
  HomePageContainer,
  CampusContainer,
  StudentContainer,
  AllCampusesContainer,
  AllStudentsContainer,
  NewStudentContainer,
  EditCampusContainer,
  EditStudentContainer,
  NewCampusContainer
} from './components/containers';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePageContainer} />
          <Route exact path="/campuses" component={AllCampusesContainer} />
          <Route exact path="/add-campus" component={NewCampusContainer} />
          <Route exact path="/edit-campus/:id" component={EditCampusContainer} />
          <Route exact path="/campus/:id" component={CampusContainer} />
          <Route exact path="/students" component={AllStudentsContainer} />
          <Route exact path="/newstudent" component={NewStudentContainer} />
          <Route exact path="/edit-student/:id" component={EditStudentContainer} />
          <Route exact path="/student/:id" component={StudentContainer} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
