/*==================================================
/src/store/thunks.js

It contains all Thunk Creators and Thunks.
================================================== */
import * as ac from './actions/actionCreators';  // Import Action Creators
import * as at from './actions/actionTypes';     // Import Action Types
const axios = require('axios');

// All Campuses
export const fetchAllCampusesThunk = () => async (dispatch) => {
  try {
    const res = await axios.get(`/api/campuses`);
    dispatch(ac.fetchAllCampuses(res.data));
  } catch (err) {
    console.error(err);
  }
};

// Single Campus
export const fetchCampusThunk = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/campuses/${id}`);
    dispatch(ac.fetchCampus(res.data));
  } catch (err) {
    console.error(err);
  }
};

// All Students
export const fetchAllStudentsThunk = () => async (dispatch) => {
  try {
    const res = await axios.get(`/api/students`);
    dispatch(ac.fetchAllStudents(res.data));
  } catch (err) {
    console.error(err);
  }
};

// Add Student (updated with null return on error)
export const addStudentThunk = (student) => async (dispatch) => {
  try {
    const res = await axios.post(`/api/students`, student);
    dispatch(ac.addStudent(res.data));
    return res.data;
  } catch (err) {
    console.error("addStudentThunk error:", err.response?.data || err.message);
    return null;  // Prevents undefined errors in UI
  }
};

// Delete Student
export const deleteStudentThunk = (studentId) => async (dispatch) => {
  try {
    await axios.delete(`/api/students/${studentId}`);
    dispatch(ac.deleteStudent(studentId));
  } catch (err) {
    console.error(err);
  }
};

// Edit Student
export const editStudentThunk = (student) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/students/${student.id}`, student);
    dispatch(ac.editStudent(res.data));
  } catch (err) {
    console.error(err);
  }
};

// Single Student
export const fetchStudentThunk = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/students/${id}`);
    dispatch(ac.fetchStudent(res.data));
  } catch (err) {
    console.error(err);
  }
};

// SC ADDED: Add Campus
export const addCampusThunk = (campus) => async (dispatch) => {
  try {
    const res = await axios.post('/api/campuses', campus);
    dispatch(ac.addCampus(res.data));
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

// SC ADDED: Delete Campus
export const deleteCampusThunk = (campusId) => async (dispatch) => {
  try {
    await axios.delete(`/api/campuses/${campusId}`);
    dispatch(ac.deleteCampus(campusId));
  } catch (err) {
    console.error(err);
  }
};

// SC ADDED: Local Action Creator
export const addCampus = (campus) => ({
  type: at.ADD_CAMPUS,
  payload: campus,
});

export const deleteCampus = (campusId) => ({
  type: at.DELETE_CAMPUS,
  payload: campusId,
});

// SC ADDED: Edit Campus
export const editCampusThunk = (campus) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/campuses/${campus.id}`, campus);
    dispatch(ac.editCampus(res.data));
  } catch (err) {
    console.error(err);
  }
};
