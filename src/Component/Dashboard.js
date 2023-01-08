import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Dash from "./Dash";
//import Contact from "../components/Contact";
const Dashboard = ({ auth: { user } }) => {
  return (
    <div style={{ marginTop: "3.5rem", textAlign: "center",backgroundColor:'lightgray' }}>
      <h1>Welcome Team {user && user.name} </h1>
      {/* <Contact/> */}
    <Dash />
    </div>
  );
};
Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Dashboard);
