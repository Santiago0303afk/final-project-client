/*==================================================
AllCampusesView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display all campuses.
================================================== */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllCampusesView = (props) => {
  const { allCampuses } = props;

  // If there are no campuses, show a message and the add button
  if (!allCampuses.length) {
    return (
      <div>
        <h1>All Campuses</h1>
        <p>There are no campuses.</p>
        <Link to="/add-campus">
          <button type="button">Add New Campus</button>
        </Link>
      </div>
    );
  }

  // If there are campuses, display them
  return (
    <div>
      <h1>All Campuses</h1>

      {allCampuses.map((campus) => (
        <div key={campus.id}>
          <Link to={`/campus/${campus.id}`}>
            <h2>{campus.name}</h2>
          </Link>
          <img src={campus.imageUrl} alt={campus.name} width="200" />
          <h4>Campus ID: {campus.id}</h4>
          <p>{campus.address}</p>
          <p>{campus.description}</p>
          <hr />
        </div>
      ))}

      <br />
      <Link to="/add-campus">
        <button type="button">Add New Campus</button>
      </Link>
      <br /><br />
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;
