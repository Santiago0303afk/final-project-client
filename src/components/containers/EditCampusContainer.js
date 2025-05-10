//SC CREATED THIS:
import { Component } from "react";
import { connect } from "react-redux";
import { fetchCampusThunk, editCampusThunk } from "../../store/thunks";
import EditCampusView from "../views/EditCampusView";

class EditCampusContainer extends Component {
  componentDidMount() {
    const campusId = this.props.match.params.id;
    this.props.fetchCampus(campusId);
  }

  handleSubmit = (updatedCampus) => {
    this.props.editCampus(updatedCampus);
    window.location.href = `/campus/${updatedCampus.id}`;
  };

  render() {
    return (
      <EditCampusView
        campus={this.props.campus}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

const mapState = (state) => ({
  campus: state.campus, // Assuming you have a single campus reducer
});

const mapDispatch = (dispatch) => ({
  fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
  editCampus: (campus) => dispatch(editCampusThunk(campus)),
});

export default connect(mapState, mapDispatch)(EditCampusContainer);
