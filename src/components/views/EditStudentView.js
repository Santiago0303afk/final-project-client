import React from "react";
import { Button } from "@material-ui/core";

const EditStudentView = ({ handleChange, handleSubmit, student }) => {
  if (!student) return <p>Loading...</p>;

  return (
    <div>
      <h1>Edit Student</h1>
      <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
        <label>First Name: </label>
        <input
          type="text"
          name="firstname"
          value={student.firstname}
          onChange={handleChange}
        />
        <br /><br />

        <label>Last Name: </label>
        <input
          type="text"
          name="lastname"
          value={student.lastname}
          onChange={handleChange}
        />
        <br /><br />

        <label>Email: </label>
        <input
          type="email"
          name="email"
          value={student.email || ''}
          onChange={handleChange}
        />
        <br /><br />

        <label>GPA: </label>
        <input
          type="text"
          name="gpa"
          value={student.gpa || ''}
          onChange={handleChange}
        />
        <br /><br />

        <label>Image URL: </label>
        <input
          type="text"
          name="imageUrl"
          value={student.imageUrl || ''}
          onChange={handleChange}
        />
        <br /><br />

        <label>Campus ID: </label>
        <input
          type="text"
          name="campusId"
          value={student.campusId || ''}
          onChange={handleChange}
        />
        <br /><br />

        <Button type="submit" variant="contained" color="primary">
          Save Changes
        </Button>
      </form>
    </div>
  );
};

export default EditStudentView;
