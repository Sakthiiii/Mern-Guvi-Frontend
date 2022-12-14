import React from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Landing = ({ isAuthenticated }) => {
	if (isAuthenticated) {
		return <Navigate to="/dashboard" />;
	}

	return (
		<section className="landing">
			<div className="dark-overlay">
				<div className="landing-inner">
					<h1 style={{color:'white', textAlign:'right'}}>Alpharive Tech  </h1>
					<h2>MERN Project</h2>
					<h3>Register &amp; SignUp Page  with MERN</h3>
					<br />
					{/* <div className="buttons">
						<Link to="/register" className="btn">
							Sign Up
						</Link>
						<Link to="/login" className="btn">
							Login
						</Link>
					</div> */}
				</div>
			</div>
		</section>
	);
};

Landing.propTypes = {
	isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
//