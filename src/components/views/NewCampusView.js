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
    if (!formData.name.trim()) err.name = 'Name is required';
    if (!formData.address.trim()) err.address = 'Address is required';
    return err;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    if (Object.keys(err).length > 0) {
      setErrors(err);
    } else {
      // Clear optional fields to fallback values if needed
      const cleanedData = {
        name: formData.name.trim(),
        address: formData.address.trim(),
        description: formData.description.trim(),
        imageUrl: formData.imageUrl.trim()
      };
      handleSubmit(cleanedData);
    }
  };

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
    setErrors({ ...errors, [field]: '' });
  };

  return (
    <div>
      <h1>Add New Campus</h1>
      <form onSubmit={onSubmit}>
        <label>Name: </label>
        <input
          type="text"
          value={formData.name}
          onChange={handleChange('name')}
          required
        />
        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}

        <br />

        <label>Address: </label>
        <input
          type="text"
          value={formData.address}
          onChange={handleChange('address')}
          required
        />
        {errors.address && <p style={{ color: 'red' }}>{errors.address}</p>}

        <br />

        <label>Description: </label>
        <textarea
          value={formData.description}
          onChange={handleChange('description')}
        />

        <br />

        <label>Image URL: </label>
        <input
          type="text"
          value={formData.imageUrl}
          onChange={handleChange('imageUrl')}
        />

        <br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewCampusView;
