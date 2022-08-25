import React from "react";
import Question from "../Question/Question";
import Option from "../Option/Option";
import "./quiz.css";
import Score from "../Score/score";
import End from "../End/End";
class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: {
        1: "Which of the following is used in React.js to increase performance?",
        2: "What is ReactJS?",
        3: "Identify the one which is used to pass data to components from outside",
        4: "In which language is React.js written?",
        5: "Identify the command used to create a react app.",
        6: "Which of the following port is the default where webpack-dev-server runs?",
        7: "Using which of the following command can prevent default behaviour at in react?",
        8: "What is ReactJS mainly used for building?",
        9: "Total ways of defining variables in ES6 is?",
        10: "Which of the following are two ways to handle data in react?",
      },
      options: {
        1: {
          1: "Virtual DOM",
          2: "Original DOM",
          3: "Both A and B",
          4: "None of the above",
        },
        2: {
          1: "Server-side framework",
          2: "user interfare framework",
          3: "Both a and B",
          4: "none of the above",
        },
        3: {
          1: "Render with arguments",
          2: "setState",
          3: "PropTypes",
          4: "props",
        },
        4: {
          1: "Python",
          2: "JavaScript",
          3: "Java",
          4: "PHP",
        },
        5: {
          1: "npm install create-react-app",
          2: "npm install -g create-react-app",
          3: "install -g create-react-app",
          4: "None of the above",
        },
        6: {
          1: "3000",
          2: "3306",
          3: "3030",
          4: "8080",
        },
        7: {
          1: "preventDefault()",
          2: "avoidDefault()",
          3: "revokeDefault()",
          4: "None of the above",
        },
        8: {
          1: "Database",
          2: "Connectivity",
          3: "User interface",
          4: "Design platform",
        },
        9: {
          1: "1",
          2: "2",
          3: "3",
          4: "4",
        },
        10: {
          1: "services and components",
          2: "State and Props",
          3: "state and services",
          4: "state and components",
        },
      },
      corectOPtions: {
        1: "1",
        2: "2",
        3: "4",
        4: "2",
        5: "2",
        6: "4",
        7: "1",
        8: "3",
        9: "3",
        10: "2",
      },
      corectOption: 0,
      clickedOption: 0,
      step: 1,
      score: 0,
      result: 0,
      viewresults: 0,
    };
  }
  checkOption = (opt) => {
    if (opt === this.state.corectOPtions[this.state.step]) {
      this.setState({
        score: this.state.score + 1,
        corectOption: this.state.corectOPtions[this.state.step],
        clickedOption: opt,
        result: 1,
      });
    } else {
      this.setState({
        corectOption: 0,
        clickedOption: opt,
        result: 1,
      });
    }
  };
  Next = (step) => {
    this.setState({
      step: step + 1,
      corectOPtion: 0,
      clickedOption: 0,
      result: 0,
    });
  };
  handleclick = () => {
    this.setState({
      viewresults: 1,
    });
  };
  render() {
    return (
      <div>
        {this.state.step <= Object.keys(this.state.questions).length ? (
          <div className="Quiz-app">
            <Question
              q={this.state.questions[this.state.step]}
              qno={this.state.step}
              total={Object.keys(this.state.questions).length}
            />
            <Option
              opt={this.state.options[this.state.step]}
              clickevent={this.checkOption}
              corectOption={this.state.corectOption}
              clickedOption={this.state.clickedOption}
              result={this.state.result}
            />
            <button
              className="next"
              disabled={this.state.clickedOption ? false : true}
              onClick={() => this.Next(this.state.step)}
            >
              {" "}
              Next &gt;
            </button>
          </div>
        ) : 
        this.state.viewresults ? 
        ( <Score score={this.state.score} total={Object.keys(this.state.questions).length}/>):
        (<End click={() => this.handleclick()} />)}
      </div>
    );
  }
}

export default Quiz;
