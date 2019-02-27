import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import QuestionList from './components/QuestionList';
import ScoreBoard from './components/ScoreBoard';
import Results from './components/Results';


class App extends Component {

  constructor(props){
    super(props);
    
    this.state = {
      questions: [
        {
          id : 1,
          text : "What is Pakistan Capital",
          choices: [
            {
              id : 'a',
              text : "karachi"
            },
            {
              id : 'b',
              text  :  "lahore"
            },
            {
              id : 'c',
              text : "Islamabad"
            }
          ],
          correctAnswer: 'c'
            
        
        },
        
     
      
        {
          id : 2,
          text : "What is The Best Game of 2019",
          choices: [
            {
              id : 'a',
              text : "Resident Evil 2"
            },
            {
              id : 'b',
              text  :  "Metro Exodus"
            },
            {
              id : 'c',
              text : "WWE 2K 20"
            }
          ],
          correctAnswer: 'a'
            
        
        },
        
     
        {
          id : 3,
          text : "What is the main theme of Resident Evil",
          choices: [
            {
              id : 'a',
              text : "Survival Knife"
            },
            {
              id : 'b',
              text  :  "Green Herb"
            },
            {
              id : 'c',
              text : "Leon"
            }
          ],
          correctAnswer: 'b'
            
        
        },
        
    
        {
          id : 4,
          text : "Which is the best Resident Evil Game",
          choices: [
            {
              id : 'a',
              text : "RE 6"
            },
            {
              id : 'b',
              text  :  "Re 2 Remake"
            },
            {
              id : 'c',
              text : "Re 4"
            }
          ],
          correctAnswer: 'a'
            
        
        },
        
      ],



     
      score: 0,
      currentQuestion : 1
     
    }
    this.setCurrent = this.setCurrent.bind(this);
    this.setScore = this.setScore.bind(this);
  }

  setCurrent(currentQuestion){
    this.setState({currentQuestion})
  }
  setScore(score){
    this.setState({score})
  }
  render() {
    if(this.state.currentQuestion > this.state.questions.length){
      var scorebox = ""
      var results = <Results {...this.state}/>
    }
    else{
      var scorebox = <ScoreBoard {...this.state}/>
      var results = "";
    }
    return (
     
        <header className="App-header">

          <div className="App">
            <h3>REACT QUIZ</h3>
            <p className="lead">A Simple Quiz App Written React</p>
          </div>
          {scorebox}
          <QuestionList  {...this.state} setCurrent={this.setCurrent} setScore={this.setScore}/>
          {results}
        </header>
      
    );
  }
}

export default App;
