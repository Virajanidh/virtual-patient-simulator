// import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
 import FormControl from '@mui/material/FormControl';
 import { ExaminationActions } from '../../../../Actions/Examination/ExaminationActions';
import { ScoreActions } from '../../../../Actions/Score/ScoreActions';
import {connect} from 'react-redux'

 // import Select from '@mui/material/Select';

// export default function CariesDD() {
//   const [age, setAge] = React.useState('');

//   const handleChange = (event) => {
//     setAge(event.target.value);
//   };

//   return (
//     <div>
//       <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
//         <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
//         <Select
//           labelId="demo-simple-select-standard-label"
//           id="demo-simple-select-standard"
//           value={age}
//           onChange={handleChange}
//           label="Age"
//         >
//           <MenuItem value="">
//             <em>None</em>
//           </MenuItem>
          
//           <MenuItem value={10}>Ten</MenuItem>
//           <MenuItem value={20}>Twenty</MenuItem>
//           <MenuItem value={30}>Thirty</MenuItem>
//         </Select>
//       </FormControl>
//     </div>
//   );
// }

import React from "react";

const options = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,26, 27, 28, 29, 30, 31, 32,];

class CariesDD extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        tooth: "1",
        selectedList:['12','0']
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.clearList = this.clearList.bind(this);
      this.calculateScore=this.calculateScore.bind(this)
    }
    clearList(){
      this.setState({ selectedList: [] });
      this.props.clearCaries()
      this.props.setCariesScore(0)
    }
    componentDidMount(){
      this.setState({
        selectedList: this.props.cariesSelected }
      )
    }
  
    handleChange(e) {
      const val=e.target.value
      console.log("Tooth Selected!!");
      this.setState({ tooth: e.target.value });
      this.setState(prevState => ({
        selectedList: [...prevState.selectedList, e.target.value]
      }))
      this.props.setSelectedCaries(e.target.value)
      this.calculateScore(val)

    }
    calculateScore(val){
      const answers=this.props.selectedCaseDetails.cariesList

      let count=0
      let wrongCount=0
      const selectedList =this.state.selectedList
      console.log(selectedList)
      for(let i=0;i<answers.length;i++){
        for (let j=0;j<selectedList.length;j++) {
        
            if(answers[i]==selectedList[j]){
              count++
            }
            else if (answers[i]!=selectedList[j] && !answers.includes(selectedList[j])){
              wrongCount++
            }
          // do something for each key in the object 
        }
      }
      for(let i=0;i<answers.length;i++){
        if(answers[i]==val){
          count++
        }
        else if (answers[i]!=val && !answers.includes(val)){
          wrongCount++
        }
      }
      console.log(count,':',wrongCount)


      const weightExam=1.5/2
      let score = 100*(weightExam/10)*(1/3)*(count/answers.length)
      score=score-100*(weightExam/10)*(1/3)*(wrongCount/(6-answers.length))
      console.log(count,'countw',wrongCount)
      
      if(count==answers.length){
        let score = 100*(weightExam/10)*(1/3)
        this.props.setCariesScore(score)
      }
      else if(count<answers.length){
        let score = 100*(weightExam/10)*(1/3)*(count/answers.length)
        this.props.setCariesScore(score)
      }
    }
  
    render() {
      return (
        <div>
        <div id="App">
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel className="dd1" id="demo-simple-select-standard-label">Tooth</InputLabel>
            <select className="dd1" value={this.state.tooth} onChange={this.handleChange} labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard">
              {options.map((option) => (
                <option value={option} className="dd">{option}</option>
              ))}
            </select>
            </FormControl>
            {this.props.cariesSelected? this.props.cariesSelected.map(number=> (

            <label>{number} &nbsp;</label>
  
            )) :null}
            
        </div>
        <button type="button" class="btn btn-primary" fdprocessedid="b3ntkd"
     onClick={this.clearList}>Clear List</button>
        </div>
      );
    }
  }
  
 

const mapStateToProps = state => ({
    ... state,
    cariesSelected : state.examination.cariesSelected,
    selectedCaseDetails:state.caseSelected.selectedCaseDetails
    
    // error_msg : state.products.error_msg
  });

const mapActionsToProps={
    setSelectedCaries: ExaminationActions.setSelectedCaries,
    clearCaries:ExaminationActions.clearCaries,
    setCariesScore:ScoreActions.setCriesScore
  }

  export default connect(
    mapStateToProps,
    mapActionsToProps
    )(CariesDD);