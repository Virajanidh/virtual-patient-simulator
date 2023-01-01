import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import {DiagnosisActions} from '../../../../Actions/Diagnosis/DiagnosisActions'
import {connect} from 'react-redux'


export class Qcard extends Component {
    constructor(props) {
        super(props);
        this.state={
            question:{},
            isSubmit:false
        }
        this.handleEvent = this.handleEvent.bind(this); 
      }

    handleEvent(e){

      if(e.target !== undefined && !this.state.isSubmit ){
        console.log(e.target.id)
        console.log(e.target.innerHTML)
        const id =e.target.id
      
        const allQ = this.props.allDignosisQ
        console.log(allQ)
        for ( let i =0; i< allQ.length; i++){
          console.log(allQ[i].id)
          if(allQ[i].id==e.target.id){
            // this.props. setSelectedAnsForDQ(
            //   {
            //     q:allQ[i].q,
            //     studentAnswer:e.target.innerHTML,
            //     id:allQ[i].id
            //   }
            // )
            if(allQ[i].correct==e.target.innerHTML){
              console.log('insert')
              this.props.setCorrectDiagnosisQ(allQ[i])
              this.props. setSelectedAnsForDQ(
                {
                  q:allQ[i].q,
                  studentAnswer:e.target.innerHTML,
                  id:allQ[i].id,
                  correctness: true
                }
              )
            }
            else{
              this.props.setWrongDiagnosisQ({
                q:allQ[i].q,
                studentAnswer:e.target.innerHTML,
                id:allQ[i].id, 
                CorrectAnswer:allQ[i].correct
              })
              this.props. setSelectedAnsForDQ(
                {
                  q:allQ[i].q,
                  studentAnswer:e.target.innerHTML,
                  id:allQ[i].id,
                  correctness: false
                }
              )
            }
          }
        }

      }
      
      
      // allQ.filter(question => question.id.includes(e.target.id)).map(selectedDQ => (
      //   console.log(selectedDQ)
      // ))

    }

    render() {
      const {oneQuestion} = this.props;
      this.state.question=oneQuestion[0]
      this.state.isSubmit=oneQuestion[1]
      console.log(this.state.isSubmit)
      
      
      return(
       
        <div >
          
    
        <div className='qns'>{this.state.question.q}</div>
        <div className='ddown1'>
                  <DropdownButton
                    alignRight
                    title="Select the question"
                    id="dropdown-menu-align-right"
                    onSelect={this.handleEvent}
                  >
                    {this.state.question && this.state.question.a.map(filteredName => (
                      <li>
        
                         <Dropdown.Item id={this.state.question.id} onClick={this.handleEvent} eventKey={filteredName}>{filteredName}</Dropdown.Item>
                         
                      </li>
                    ))}
                    
                  </DropdownButton>
            </div>

           
        </div>
      );
    }
  }
  
  
  const mapStateToProps = state => ({
    ... state,
    correctDiagnosisQ : state.diagnosisQ.correctDiagnosisQ,
    wrongDiagnosisQ : state.diagnosisQ.wrongDiagnosisQ,
    allDignosisQ : state.diagnosisQ.allDignosisQ,
    selectedAnsForDiagnosisQ : state.diagnosisQ.selectedAnsForDiagnosisQ
    // error_msg : state.products.error_msg
  });

  const mapActionsToProps={
    setDiagnosisAllQ: DiagnosisActions.setDiagnosisAllQ,
    setCorrectDiagnosisQ : DiagnosisActions.setCorrectDiagnosisQ,
    setWrongDiagnosisQ:DiagnosisActions.setWrongDiagnosisQ,
    setSelectedAnsForDQ:DiagnosisActions. setSelectedAnsForDQ
  }
  
  export default connect(
    mapStateToProps,
    mapActionsToProps
    )(Qcard);
  



