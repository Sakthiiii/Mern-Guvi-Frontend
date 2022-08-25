import React from 'react'
import './Question.css'
const Question = (props) => {
  return (
    <div className='q'>
        <h2>{props.qno} / {props.total} </h2>
        <h1> {props.q}</h1>
    </div>
  )
}

export default Question