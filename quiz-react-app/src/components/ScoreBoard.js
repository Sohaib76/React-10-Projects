import React, { Component } from 'react';



class ScoreBoard extends Component {


  render() {
    return (
      <div className="well">
        Question {this.props.currentQuestion} out of {this.props.questions.length}
        <span className="pull-right" style={{marginLeft:"20px", color:"grey"}}><strong>Score : {this.props.score}</strong></span>
      </div>
    );
  }
}

export default ScoreBoard;
