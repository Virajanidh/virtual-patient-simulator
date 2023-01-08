import React, { useEffect,useState } from 'react';
import Picker from 'emoji-picker-react';
import NoRecord from '../../NoRecord.js';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { useSelector} from "react-redux";
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { green, red } from '@mui/material/colors';
import { ScoreActions } from '../../../../Actions/Score/ScoreActions.js';
import { useDispatch } from 'react-redux';
import { ExaminationActions } from '../../../../Actions/Examination/ExaminationActions.js';

function Periodental() {

  const {selectedCaseDetails} = useSelector((state) => state.caseSelected)
  const {isSubmitDiagnosis} = useSelector((state) => state.diagnosisQ)
  const dispatch=useDispatch()
  const [selectedCheckBox,setSelectedCheckBox]=useState({});
 
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const {selectedPerodentalTools} = useSelector((state) => state.examination)
  const {submit_perio_tools} = useSelector((state) => state.examination)

  useEffect(()=> {
    setSelectedCheckBox(selectedPerodentalTools)
    if(submit_perio_tools){
      document.getElementById("submitMsg").textContent='Submitted!!'
    }
  }, []);
 // setSelectedCheckBox(selectedPerodentalTools)

  const isCheckedA=(e)=>{
    setSelectedCheckBox(selectedCheckBox => ({...selectedCheckBox, intra_ToolA: e.target.checked}) );  
  }
  const isCheckedB=(e)=>{
    setSelectedCheckBox(selectedCheckBox => ({...selectedCheckBox, intra_ToolB: e.target.checked}) );  
  }
  const isCheckedC=(e)=>{
    setSelectedCheckBox(selectedCheckBox => ({...selectedCheckBox, intra_ToolC: e.target.checked}) );  
  }
  const isCheckedD=(e)=>{
    setSelectedCheckBox(selectedCheckBox => ({...selectedCheckBox, intra_ToolD: e.target.checked}) );  
  }
  const isCheckedE=(e)=>{
    setSelectedCheckBox(selectedCheckBox => ({...selectedCheckBox, intra_ToolE: e.target.checked}) );  
  }
  const isCheckedF=(e)=>{
    setSelectedCheckBox(selectedCheckBox => ({...selectedCheckBox, intra_ToolF: e.target.checked}) );  
  }


  const setSubmit=()=>{
    dispatch(ExaminationActions.setSubmitPerodetanlTools(true))
    if(!isSubmitDiagnosis){
      document.getElementById("submitMsg").textContent='Submitted!!'
      document.getElementById("0").disabled=true
      document.getElementById("1").disabled=true
      document.getElementById("2").disabled=true
      document.getElementById("3").disabled=true
      document.getElementById("4").disabled=true
      document.getElementById("5").disabled=true
      const answers=selectedCaseDetails.intraOralTools
      let count=0
      let trueCount=0
      let wrongCount=0
      //Object.keys(selectedCheckBox)
      for(let i=0;i<answers.length;i++){
        for (let key in selectedCheckBox) {
          let compare=new String(key).valueOf() == new String(answers[i]).valueOf()
          console.log('compare',key,answers[i],!compare,selectedCheckBox[key],!answers.includes(key))
            if(compare && selectedCheckBox[key]){
              count++
            }
            else if (!compare && selectedCheckBox[key] && !answers.includes(key)){
              wrongCount++
            }
          // do something for each key in the object 
        }
      }
      
      console.log(wrongCount)
      wrongCount=wrongCount/2
      const weightExam=1.5
      let score = 100*(weightExam/10)*(1/3)*(count/answers.length)
      score=score-100*(weightExam/10)*(1/3)*(wrongCount/(6-answers.length))
      console.log(count,'countw',wrongCount)
      if(score>=0){
        dispatch(ScoreActions.setPerodentalScreeningScore(score))
      }
      dispatch(ExaminationActions.setPerodetanlTools(selectedCheckBox))
    }
    else if(submit_perio_tools){
      document.getElementById("submitMsg").textContent='Submitted!!'
    }
  }

    return (
      <div>
        {isSubmitDiagnosis ?
    <div id='warningMsg' style={{fontSize:'15px'}}> 
    <div  class="alert alert-dismissible alert-danger">
          <strong>Allready submitted the answers.</strong> Can not modify Answers.
        </div>
        </div> : null }
        <div style={{position:'absolute',
              left:'35%',
              top:'50%',
              fontSize:'40px',
              fontWeight : 'bold',
              color: '#198A1E'
              }}>Periodental Screening</div>
        <div style={{position:'absolute',
              left:'5%',
              top:'60%',
              fontSize:'30px',
              fontWeight : 'bold',
              color: '#000'
              }}>Tool selection</div>
        <div style={{position:'absolute',
              left:'5%',
              top:'70%',
              fontSize:'20px',
              fontWeight : '10px',
              color: '#000'
              }}>1. Select the most suitable tools. Wrong selections will carry negative marks.</div>
        <div className="cardDesc1">
          <Grid container spacing={5}>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 300 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="250"
                    alt="Tool1"
                    image={selectedCaseDetails.intra_ToolA}
                  />
                  {/* <CardContent>
                    <div className='case'>
                          Case {selectedCaseDetails.name}
                          </div>
                          <div className='casedes'>
                        {selectedCaseDetails.description}
                    </div>
                        
                  </CardContent> */}
                </CardActionArea>
              </Card>
              <FormControlLabel
                label="Tool_1"
                control={
              <Checkbox
              defaultChecked={selectedPerodentalTools['intra_ToolA']}
              onChange={isCheckedA}
              id='0'
                {...label}
                sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } ,color:"red",
                '&.Mui-checked': {
                  color: red[700],color: red[600],
                },
              }}
              />}/>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 300 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="250"
                    alt="Tool2"
                    image={selectedCaseDetails.intra_ToolB}
                  />
                  {/* <CardContent>
                    <div className='case'>
                          Case {selectedCaseDetails.name}
                          </div>
                          <div className='casedes'>
                        {selectedCaseDetails.description}
                    </div>
                        
                  </CardContent> */}
                </CardActionArea>
              </Card>
              <FormControlLabel
                label="Tool_2"
                control={
              <Checkbox
              onChange={isCheckedB}
              defaultChecked={selectedPerodentalTools['intra_ToolB']}
              id='1'
                {...label}
                sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } ,color:"red",
                '&.Mui-checked': {
                  color: red[700],color: red[600],
                },
              }}
              />}/>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 300 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="250"
                    alt="Tool3"
                    image={selectedCaseDetails.intra_ToolC}
                  />
                  {/* <CardContent>
                    <div className='case'>
                          Case {selectedCaseDetails.name}
                          </div>
                          <div className='casedes'>
                        {selectedCaseDetails.description}
                    </div>
                        
                  </CardContent> */}
                </CardActionArea>
              </Card>
              <FormControlLabel
                label="Tool_3"
                control={
              <Checkbox
              onChange={isCheckedC}
              defaultChecked={selectedPerodentalTools['intra_ToolC']}
              id='2'
                {...label}
                sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } ,color:"red",
                '&.Mui-checked': {
                  color: red[700],color: red[600],
                },
              }}
              />}/>
            </Grid>
            </Grid>
            <div className="tool">
            <Grid container spacing={5}>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 300 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="250"
                    alt="Tool4"
                    image={selectedCaseDetails.intra_ToolD}
                  />
                  {/* <CardContent>
                    <div className='case'>
                          Case {selectedCaseDetails.name}
                          </div>
                          <div className='casedes'>
                        {selectedCaseDetails.description}
                    </div>
                        
                  </CardContent> */}
                </CardActionArea>
              </Card>
              <FormControlLabel
                label="Tool_4"
                control={
              <Checkbox
              onChange={isCheckedD}
              defaultChecked={selectedPerodentalTools['intra_ToolD']}
              id='3'
                {...label}
                sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } ,color:"red",
                '&.Mui-checked': {
                  color: red[700],color: red[600],
                },
              }}
              />}/>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 300 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="250"
                    alt="Tool5"
                    image={selectedCaseDetails.intra_ToolE}
                  />
                  {/* <CardContent>
                    <div className='case'>
                          Case {selectedCaseDetails.name}
                          </div>
                          <div className='casedes'>
                        {selectedCaseDetails.description}
                    </div>
                        
                  </CardContent> */}
                </CardActionArea>
              </Card>
              <FormControlLabel
                label="Tool_5"
                control={
              <Checkbox
              onChange={isCheckedE}
              defaultChecked={selectedPerodentalTools['intra_ToolE']}
              id='4'
                {...label}
                sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } ,color:"red",
                '&.Mui-checked': {
                  color: red[700],color: red[600],
                },
              }}
              />}/>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 300 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="250"
                    alt="Tool6"
                    image={selectedCaseDetails.intra_ToolF}
                  />
                  {/* <CardContent>
                    <div className='case'>
                          Case {selectedCaseDetails.name}
                          </div>
                          <div className='casedes'>
                        {selectedCaseDetails.description}
                    </div>
                        
                  </CardContent> */}
                </CardActionArea>
              </Card>
              <FormControlLabel
                label="Tool_6"
                control={
              <Checkbox
              onChange={isCheckedF}
              defaultChecked={selectedPerodentalTools['intra_ToolF']}
              id='5'
                {...label}
                sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } ,color:"red",
                '&.Mui-checked': {
                  color: red[700],color: red[600],
                },
              }}
              />}/>
            </Grid>
          </Grid>
          <div>
          <label>If you submit the answers, you can no longer edit the answers</label>
          <button type="button" class="btn btn-primary" fdprocessedid="b3ntkd"
     onClick={setSubmit}>submit</button>

<label id="submitMsg"></label>

     </div>
          </div>
        </div>
        <div className='chart'>Chart</div>
     </div>
    );
  }
  
  export default Periodental;
  