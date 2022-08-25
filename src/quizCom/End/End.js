import React from 'react'
import { Navigate } from 'react-router-dom'


import './End.css'
const End = (props) => {
  return (
    <div className='end'>
        <h1>Well done ,<br/> You have completed the Quiz</h1>
        
      <button onClick={props.click}  > View your Score</button>
        {/* <Navigate to="/score" onClick={props.click}>View your Score</Navigate> */}
    </div>
  ) 
}

export default End