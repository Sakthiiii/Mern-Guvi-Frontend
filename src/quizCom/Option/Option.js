import React from "react";
import "./Option.css";
const Option = (props) => {
  let obj = Object.keys(props.opt).map((a) => {
    return (
      <li key={a} onClick={() => props.clickevent(a)}  
      className={props.corectOption===a ? 'crt' : props.clickedOption===a ? 'Incrt' : ''} >        
      {a})   {props.opt[a]}
      </li>
    );
  });
  return (
    <div >
      <ul className="options"  disabled={props.clickedOption ? true :false}>{obj}</ul>
      
      {props.result ? props.corectOption ===props.clickedOption ? (
        <p className="p1"> Correct Answer .</p> ):(
            <p className="p2"> Incorrect Answer !</p>
        ) :null 
    
    }
    </div>
  );
};

export default Option;
