import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'


export class Qcard extends Component {
    constructor(props) {
        super(props);
        this.state={
            q:{}
        }
        this.handleEvent = this.handleEvent.bind(this); 
      }

    handleEvent(e){
console.log(e)
if(e.target !== undefined){
console.log(e.target.id)
}
if(e=='A'){
    console.log('correct')
}
    }

    render() {
      const { oneQuestion } = this.props;
      this.state.q=oneQuestion
      console.log(" at card: ",oneQuestion)

      return(
       
        <div>
    
        <div className='qns'>{oneQuestion.q}</div>
        <div className='ddown1'>
                  <DropdownButton
                    alignRight
                    title="Select the question"
                    id="dropdown-menu-align-right"
                    onSelect={this.handleEvent}
                  >
                    {oneQuestion && oneQuestion.a.map(filteredName => (
                      <li>
                         <Dropdown.Item id={oneQuestion.id} onClick={this.handleEvent} eventKey={filteredName}>{filteredName}</Dropdown.Item>
                      </li>
                    ))}
                  </DropdownButton>
            </div>
        
        </div>
      );
    }
  }
  
  export default Qcard;
  



