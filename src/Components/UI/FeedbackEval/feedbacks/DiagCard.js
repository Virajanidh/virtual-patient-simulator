import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';


export class DiagCard extends Component {
    render() {
      const { oneQuestion } = this.props;
      console.log(" at card: ",oneQuestion)

      return(
       
        <div>
        <div>{oneQuestion.q}</div>
        Your correct  selections
        <div>
        {oneQuestion.studentCorrectAnswers ? oneQuestion.studentCorrectAnswers.map(que=>
      <div>
        {que}
      </div>
      ):null}
        </div>
        Your wrong selections
        <div>
        {oneQuestion.studentWrongAnswers ? oneQuestion.studentWrongAnswers.map(que=>
      <div>
        {que}
      </div>
      ):null}
        </div>
       Correct answers should be
        <div>
        {oneQuestion.correctAnst? oneQuestion.correctAnst.map(que=>
      <div>
        {que}
      </div>
      ):null}
        </div>
        </div>
      );
    }
  }
  
  export default DiagCard;
  



