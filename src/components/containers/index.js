/*==================================================
/src/components/containers/index.js

This is a "barrel" file for the Container components, which combines all the exports of individual Containers
and makes it easier to import into App.js.

Note: A "barrel" file is a way to rollup exports from other modules into a single convenient module. 
The "barrel" (module) file re-exports the exports of other modules.
================================================== */
export { default as AllCampusesView } from "./AllCampusesView";
export { default as AllStudentsView } from "./AllStudentsView";
export { default as NewStudentView } from "./NewStudentView";
export { default as CampusView } from "./CampusView";
export { AddCampusView } from './AddCampusView';
export { default as EditCampusView } from './EditCampusView';
export { default as StudentView } from "./StudentView";
export { default as EditStudentView } from './EditStudentView';
export { default as HomePageView } from "./HomePageView";
