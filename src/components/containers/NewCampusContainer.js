import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { addCampusThunk } from '../../store/thunks';
import AddCampusView from '../views/AddCampusView';

class NewCampusContainer extends Component {
  state = {
    name: '',
    address: '',
    description: '',
    imageUrl: '',
    redirect: false,
    errors: {}
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  validate = () => {
    const errors = {};
    if (!this.state.name.trim()) errors.name = 'Name is required';
    if (!this.state.address.trim()) errors.address = 'Address is required';
    return errors;
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const errors = this.validate();
    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
      return;
    }

    const campus = {
      name: this.state.name.trim(),
      address: this.state.address.trim(),
      description: this.state.description.trim(),
      imageUrl: this.state.imageUrl.trim() || 'https://via.placeholder.com/150'
    };

    try {
      const newCampus = await this.props.addCampus(campus);
      if (newCampus && newCampus.id) {
        this.setState({ redirect: true });
      }
    } catch (error) {
      console.error('Failed to add campus:', error);
    }
  };

  render() {
    console.log("Rendering NewCampusContainer");
    if (this.state.redirect) return <Redirect to="/campuses" />;

    return (
      <AddCampusView
        name={this.state.name}
        address={this.state.address}
        description={this.state.description}
        imageUrl={this.state.imageUrl}
        errors={this.state.errors}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

const mapDispatch = (dispatch) => ({
  addCampus: (campus) => dispatch(addCampusThunk(campus)),
});

export default connect(null, mapDispatch)(NewCampusContainer);
