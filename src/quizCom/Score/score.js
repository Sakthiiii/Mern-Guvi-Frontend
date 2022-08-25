import React from 'react'
import './score.css';
import {BrowserRouter as Router, Link,Route,Routes} from 'react-router-dom'
import Dashboard from '../../Component/Dashboard';
import { connect } from "react-redux";
import PropTypes from "prop-types";
const Score = (props) => {
  return  (
    <div className='score'>
        <h2>
            Your Score : {
                props.score < props.total && props.score>= 5 ?(
                    <span>{props.score}/{props.total} (Not Bad !)</span>
                ): props.score <5 ?(
                    <span>{props.score}/{props.total} (Very Poor !)</span>
                ): (
                    <span>{props.score} /{props.total} (Good !  ) </span>
                )
            }
        </h2>
        <h3> Thank You !</h3>
     <Link to='/dashboard'> back to test  </Link>  
     
    </div>
  )
}

Score.propTypes = {
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps)(Score);