import React from 'react'
import './intro.css'
const intro = (props) => {
  return (
    <div className='Main-content'>
        <h1>React Quiz!!</h1>
        <h2>This contain 10 Questions</h2>
        <h2>Each Questions Carries 1 Marks</h2>
        <button  onClick={props.clickevent}>Test Your Skill</button>
    </div>
  )
}

export default intro