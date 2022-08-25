import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import QuizAPP from "../quizCom/QuizApp";


const Dashboard = ({ auth: { user } }) => {
	return (
		<div >
			{/* <h1 style={{ marginTop: "4rem", textAlign: "center" }}>Welcome, {user && user.name}</h1> */}
			<QuizAPP/>
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