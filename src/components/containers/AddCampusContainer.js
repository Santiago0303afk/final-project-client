import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCampusThunk } from "../../store/thunks";
import { AddCampusView } from "../views";
import Header from "./Header";

const AddCampusContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    description: "",
    imageUrl: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required.";
    if (!formData.address.trim()) errors.address = "Address is required.";
    return errors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    await dispatch(addCampusThunk(formData));
    navigate("/campuses"); // Redirect on success
  };

  return (
    <div>
      <Header />
      <AddCampusView
        name={formData.name}
        address={formData.address}
        description={formData.description}
        imageUrl={formData.imageUrl}
        errors={errors}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default AddCampusContainer;
