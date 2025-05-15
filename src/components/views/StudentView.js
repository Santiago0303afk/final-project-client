/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
const StudentView = ({ student }) => {
  if (!student) {
    return <div><h2>Loading student...</h2></div>;
  }

  return (
    <div>
      <h1>{student.firstname} {student.lastname}</h1>
      <h3>
        {student.campus
          ? `Campus: ${student.campus.name}`
          : 'Not enrolled in any campus'}
      </h3>
    </div>
  );
};

export default StudentView;
