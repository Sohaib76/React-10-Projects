import React, { Component } from 'react';


class Questions extends Component {
constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
}

onChange(e){
    e.preventDefault();
    const {setCurrent, setScore, question} = this.props;

    let selected = e.target.value;
    if(selected == question.correctAnswer){
        setScore(this.props.score + 1);
    }
    setCurrent(this.props.currentQuestion + 1)
}

  render() {
      
    return (
      <div className="well">
        <h3>{this.props.question.text}</h3>
        <hr/>

        <ul className="list-group">
            {this.props.question.choices.map(choice => {
                return(
                    <li className="list-group-items" key={choice.id}>
                        {choice.id} <input type="radio" onChange={this.onChange} name={this.props.question.id} value={choice.id}/>
                        {choice.text}
                    </li>
                )
            })}
        </ul>
      </div>
    );
  }
}

export default Questions;
