import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';


export class ProductCard extends Component {
    render() {
      const { oneQuestion } = this.props;
      console.log(" at card: ",oneQuestion)

      return(
       
        <Typography variant="body2" color="text.secondary">
                   {oneQuestion.cat==='complaint' ?
          <h4>History of the presenting complaint</h4> :null}
          {oneQuestion.cat==='habits' ?
          <h4>Habits</h4> :null}
          {oneQuestion.cat==='medicalH' ?
          <h4>Medical history</h4> :null}
          {oneQuestion.cat==='plaque' ?
          <h4>Plaque control</h4> :null}
          {oneQuestion.cat==='dhistory' ?
          <h4>Dietary history</h4> :null}
          {oneQuestion.cat==='pretreate' ?
          <h4>Previous dental treatments</h4> :null}
           {oneQuestion.cat==='shistory' ?
          <h4>Social history</h4> :null}
        
        <h4>{oneQuestion.q}</h4>
        <h4>{oneQuestion.a}</h4>
        </Typography>
      
      );
    }
  }
  
  export default ProductCard;
  



