import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllCampusesView = ({ allCampuses, handleDelete }) => {
  if (!allCampuses || allCampuses.length === 0) {
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

  const confirmDelete = (id, name) => {
    const confirm = window.confirm(`Are you sure you want to delete "${name}"?`);
    if (confirm) {
      handleDelete(id);
    }
  };

  return (
    <div>
      <h1>All Campuses</h1>

      {allCampuses.map((campus) => {
        const name = campus.name?.trim() || "Unnamed Campus";
        const address = campus.address?.trim() || "No address provided";
        const description = campus.description?.trim() || "No description available";

        return (
          <div key={campus.id} style={{ marginBottom: "20px" }}>
            <Link to={`/campus/${campus.id}`}>
              <h2>{name}</h2>
            </Link>
            <h4>Campus ID: {campus.id}</h4>
            <p><strong>Address:</strong> {address}</p>
            <p><strong>Description:</strong> {description}</p>

            <button onClick={() => confirmDelete(campus.id, name)}>Delete</button>
            <hr />
          </div>
        );
      })}

      <br />
      <Link to="/newcampus">
        <button>Add New Campus</button>
      </Link>
      <br /><br />
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default AllCampusesView;
