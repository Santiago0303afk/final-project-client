import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { addCampusThunk } from '../../store/thunks';
import NewCampusView from '../views/NewCampusView';

class NewCampusContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      redirectId: null,
    };
  }

  handleSubmit = async (campusData) => {
    // Trim and validate inputs
    const name = campusData.name?.trim();
    const address = campusData.address?.trim();
    const description = campusData.description?.trim() || "";
    const imageUrl = campusData.imageUrl?.trim() || "https://via.placeholder.com/150";

    if (!name || !address) {
      alert("Campus name and address are required.");
      return;
    }

    const newCampus = {
      name,
      address,
      description,
      imageUrl
    };

    try {
      const createdCampus = await this.props.addCampus(newCampus);
      if (createdCampus && createdCampus.id) {
        this.setState({ redirect: true, redirectId: createdCampus.id });
      } else {
        alert("Campus creation failed. Please try again.");
      }
    } catch (err) {
      console.error("Error creating campus:", err);
      alert("An error occurred. Please try again.");
    }
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={`/campus/${this.state.redirectId}`} />;
    }

    return <NewCampusView handleSubmit={this.handleSubmit} />;
  }
}

const mapDispatch = (dispatch) => ({
  addCampus: (campus) => dispatch(addCampusThunk(campus)),
});

export default connect(null, mapDispatch)(NewCampusContainer);
