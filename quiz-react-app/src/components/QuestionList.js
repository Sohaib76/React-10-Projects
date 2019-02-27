import React, { Component } from 'react';
import Questions from './Questions';


class QuestionList extends Component {


  render() {
    return (
      <div className="questions">
        {
            this.props.questions.map(question =>{
                if(question.id == this.props.currentQuestion){
                    return <Questions question={question} key={question.id} {...this.props}/>

                }
                
            })
        }
      </div>
    );
  }
}

export default QuestionList;
