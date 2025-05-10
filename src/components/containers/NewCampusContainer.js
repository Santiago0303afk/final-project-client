//SC CREATED THIS FILE
import { Component } from 'react';
import { connect } from 'react-redux';
import { addCampusThunk } from '../../store/thunks';
import NewCampusView from '../views/NewCampusView';

class NewCampusContainer extends Component {
  handleSubmit = async (campusData) => {
    await this.props.addCampus(campusData);
    // Redirect to all campuses or refresh after successful submit
    window.location.href = '/campuses';
  };

  render() {
    return <NewCampusView handleSubmit={this.handleSubmit} />;
  }
}

const mapDispatch = (dispatch) => ({
  addCampus: (campus) => dispatch(addCampusThunk(campus)),
});

export default connect(null, mapDispatch)(NewCampusContainer);
