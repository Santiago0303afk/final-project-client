import Header from './Header';
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStudentThunk } from "../../store/thunks";
import { StudentView } from "../views";

class StudentContainer extends Component {
  componentDidMount() {
    const studentId = this.props.match?.params?.id;
    if (studentId) {
      this.props.fetchStudent(studentId);
    } else {
      console.error("No student ID found in route params.");
    }
  }

  render() {
    const { student } = this.props;

    if (!student) {
      return (
        <div>
          <Header />
          <h2>Loading student...</h2>
        </div>
      );
    }

    if (!student.id) {
      return (
        <div>
          <Header />
          <h2>Student not found.</h2>
        </div>
      );
    }

    return (
      <div>
        <Header />
        <StudentView student={student} />
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    student: state.student,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
  };
};

export default connect(mapState, mapDispatch)(StudentContainer);
