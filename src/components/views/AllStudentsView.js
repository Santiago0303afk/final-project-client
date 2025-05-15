/*==================================================
AllStudentsView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the all students view page.
================================================== */
import { Link } from "react-router-dom";

const AllStudentsView = ({ students, deleteStudent }) => {
  if (!students || students.length === 0) {
    return (
      <div>
        <h2>There are no students.</h2>
        <Link to="/newstudent">
          <button>Add New Student</button>
        </Link>
      </div>
    );
  }

  const handleDelete = (id, name) => {
    const confirm = window.confirm(`Are you sure you want to delete ${name}?`);
    if (confirm) {
      deleteStudent(id);
    }
  };

  return (
    <div>
      <h1>All Students</h1>

      {students.map((student) => {
        const fullName = `${student.firstname || ""} ${student.lastname || ""}`.trim();

        return (
          <div key={student.id} style={{ marginBottom: "20px" }}>
            <Link to={`/student/${student.id}`}>
              <h2>{fullName || "Unnamed Student"}</h2>
            </Link>
            <button onClick={() => handleDelete(student.id, fullName || "this student")}>
              Delete
            </button>
            <hr />
          </div>
        );
      })}

      <br />
      <Link to="/newstudent">
        <button>Add New Student</button>
      </Link>
    </div>
  );
};

export default AllStudentsView;
