import React from "react";

import Intro from "./intro/intro";
import Quiz from "./Quiz/quiz";


class QuizAPP extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        TakeTest: true,
      };
      this.handleClick =this.handleClick.bind(this)
    }
    handleClick(){
      this.setState({
        TakeTest:false
      })
    }
    render() {
      return (
        <div className="App">
          {this.state.TakeTest ? (
            <div className="intro">
              <Intro clickevent={this.handleClick} />
            </div>
          ) : (
            <div className="quiz">
              <Quiz/>
            </div>
          )}
        </div>
      );
    }
  }
  
  export default QuizAPP;
  