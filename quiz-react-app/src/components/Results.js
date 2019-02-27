import React, { Component } from 'react';


class Results extends Component {


  render() {
    var percent = (this.props.score / this.props.questions.length * 100)
    if(percent > 80){
      var message = "Great Work"
    }
    else if(percent < 80 && percent > 50){
      var message = "You got it"
    }
    else{
      var message = "You have failed , Try Again"
    }
    return (
      <div className="well">
        <h4>You Got {this.props.score} out of {this.props.questions.length} Correct</h4>
        <h1>{percent}% - {message}</h1>
        <hr />
        <a href="/app">Take Again</a>
      </div>
    );
  }
}

export default Results;
