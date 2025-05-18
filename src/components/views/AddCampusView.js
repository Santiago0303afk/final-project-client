import React from "react";
import PropTypes from "prop-types";

const AddCampusView = ({ name, address, description, imageUrl, errors, handleChange, handleSubmit }) => (
  <div>
    <h1>Add New Campus</h1>
    <form onSubmit={handleSubmit}>
      <input name="name" value={name} onChange={handleChange} placeholder="Name" />
      {errors.name && <p>{errors.name}</p>}
      
      <input name="address" value={address} onChange={handleChange} placeholder="Address" />
      {errors.address && <p>{errors.address}</p>}
      
      <textarea name="description" value={description} onChange={handleChange} placeholder="Description" />
      <input name="imageUrl" value={imageUrl} onChange={handleChange} placeholder="Image URL" />
      
      <button type="submit">Submit</button>
    </form>
  </div>
);

AddCampusView.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  errors: PropTypes.object,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default AddCampusView;
