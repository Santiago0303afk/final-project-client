import { useState } from 'react';

const NewCampusView = ({ handleSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    description: '',
    imageUrl: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const err = {};
    if (!formData.name) err.name = 'Name is required';
    if (!formData.address) err.address = 'Address is required';
    return err;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    if (Object.keys(err).length > 0) {
      setErrors(err);
    } else {
      handleSubmit(formData);
    }
  };

  return (
    <div>
      <h1>Add New Campus</h1>
      <form onSubmit={onSubmit}>
        <label>Name: </label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}

        <br />

        <label>Address: </label>
        <input
          type="text"
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
        />
        {errors.address && <p style={{ color: 'red' }}>{errors.address}</p>}

        <br />

        <label>Description: </label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        />

        <br />

        <label>Image URL: </label>
        <input
          type="text"
          value={formData.imageUrl}
          onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
        />

        <br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewCampusView;
