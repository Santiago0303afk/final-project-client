/*==================================================
NewStudentContainer.js

The Container component is responsible for stateful logic and data fetching, and
passes data (if any) as props to the corresponding View component.
If needed, it also defines the component's "connect" function.
================================================== */
import Header from './Header';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import NewStudentView from '../views/NewStudentView';
import { addStudentThunk } from '../../store/thunks';

class NewStudentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      campusId: null,
      redirect: false,
      redirectId: null
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();

    if (!this.state.firstname.trim() || !this.state.lastname.trim()) {
      alert("First name and last name are required.");
      return;
    }

    const student = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      campusId: this.state.campusId ? Number(this.state.campusId) : null
    };

    try {
      const newStudent = await this.props.addStudent(student);

      if (!newStudent || !newStudent.id) {
        console.error("Student creation failed or no ID returned:", newStudent);
        alert("Failed to create student. Please check your input or try again.");
        return;
      }

      this.setState({
        firstname: "",
        lastname: "",
        campusId: null,
        redirect: true,
        redirectId: newStudent.id
      });
    } catch (error) {
      console.error("Error while submitting new student:", error);
      alert("An error occurred while submitting the form.");
    }
  }

  componentWillUnmount() {
    this.setState({ redirect: false, redirectId: null });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={`/student/${this.state.redirectId}`} />;
    }

    return (
      <div>
        <Header />
        <NewStudentView
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

const mapDispatch = (dispatch) => {
  return {
    addStudent: (student) => dispatch(addStudentThunk(student)),
  };
};

export default connect(null, mapDispatch)(NewStudentContainer);
