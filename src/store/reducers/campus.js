/*==================================================
/src/store/reducers/campus.js

This is a Reducer function that accepts 2 parameters: the previous state object (aka current state) and an action object. 
Depending on the Action object, the Reducer updates the State and returns the new State object.
It also defines the State and its default initial value.
================================================== */
import { FETCH_CAMPUS, EDIT_CAMPUS } from "../actions/actionTypes";  // Import Action Types

// Define default Initial State
const initialState = {
  students: [],  // Empty students array
};

// REDUCER:
const campus = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CAMPUS:
      return action.payload;
      
    //SC ADDED 
    case EDIT_CAMPUS:
      return action.payload;  // Replace the current campus state with the updated campus

    default:
      // If the Reducer doesn't recognize the Action Type, return the current State unchanged
      return state;
  }
};

export default campus;
