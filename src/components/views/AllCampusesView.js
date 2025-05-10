/*==================================================
/src/components/views/AllCampusesView.js

This View component is responsible for rendering the web page with data 
provided by the corresponding Container component.
It displays all campuses, each with a link to its detail page and a delete button.
==================================================*/

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllCampusesView = (props) => {
  const { allCampuses, handleDelete } = props;

  // If there are no campuses, display a message.
  if (!allCampuses.length) {
    return (
      <div>
        <h1>All Campuses</h1>
        <p>There are no campuses.</p>
        <Link to="/newcampus">
          <button>Add New Campus</button>
        </Link>
      </div>
    );
  }

  // If there is at least one campus, render the list.
  return (
    <div>
      <h1>All Campuses</h1>

      {allCampuses.map((campus) => (
        <div key={campus.id} style={{ marginBottom: '20px' }}>
          <Link to={`/campus/${campus.id}`}>
            <h2>{campus.name}</h2>
          </Link>
          <h4>Campus ID: {campus.id}</h4>
          <p>Address: {campus.address}</p>
          <p>Description: {campus.description}</p>

          <button onClick={() => handleDelete(campus.id)}>Delete</button>
          <hr />
        </div>
      ))}

      <br />
      <Link to="/newcampus">
        <button>Add New Campus</button>
      </Link>
      <br /><br />
    </div>
  );
};

// Validate data type of the props passed to the component.
AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default AllCampusesView;
