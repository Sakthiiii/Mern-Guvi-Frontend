import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Contact from "../components/Contact";


const Dashboard = ({ auth: { user } }) => {
	return (
		<div style={{ marginTop: "3.5rem", textAlign: "center" }}>
			<h1>Welcome Team  </h1>
			<Contact/>
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