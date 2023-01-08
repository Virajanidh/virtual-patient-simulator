import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { useSelector } from "react-redux";
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { green, red } from '@mui/material/colors';
import CariesDD from './CariesDD'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { ExaminationActions } from '../../../../Actions/Examination/ExaminationActions';
import { useDispatch } from 'react-redux';
import Resto from './Resto';
import { ScoreActions } from '../../../../Actions/Score/ScoreActions';

function Hard() {

  const { selectedCaseDetails } = useSelector((state) => state.caseSelected)
  const { isSubmitDiagnosis } = useSelector((state) => state.diagnosisQ)
  const dispatch = useDispatch()
  const [selectedCheckBox, setSelectedCheckBox] = useState({});
  const [toolsScore, setToolsScore] = useState(0);

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const { submitedHardTissueTools } = useSelector((state) => state.examination)
  const { submit_hard_tools } = useSelector((state) => state.examination)
  const { cariesSelected } = useSelector((state) => state.examination)
  const { plaqueValue } = useSelector((state) => state.examination)
  const { bleedingValue } = useSelector((state) => state.examination)


  useEffect(() => {
    setSelectedCheckBox(submitedHardTissueTools)
    if (submit_hard_tools) {
      document.getElementById("submitMsg").textContent = 'Submitted!!'
    }
  }, []);
  // setSelectedCheckBox(submitedHardTissueTools)

  const isCheckedA = (e) => {
    setSelectedCheckBox(selectedCheckBox => ({ ...selectedCheckBox, intra_ToolA: e.target.checked }));
  }
  const isCheckedB = (e) => {
    setSelectedCheckBox(selectedCheckBox => ({ ...selectedCheckBox, intra_ToolB: e.target.checked }));
  }
  const isCheckedC = (e) => {
    setSelectedCheckBox(selectedCheckBox => ({ ...selectedCheckBox, intra_ToolC: e.target.checked }));
  }
  const isCheckedD = (e) => {
    setSelectedCheckBox(selectedCheckBox => ({ ...selectedCheckBox, intra_ToolD: e.target.checked }));
  }
  const isCheckedE = (e) => {
    setSelectedCheckBox(selectedCheckBox => ({ ...selectedCheckBox, intra_ToolE: e.target.checked }));
  }
  const isCheckedF = (e) => {
    setSelectedCheckBox(selectedCheckBox => ({ ...selectedCheckBox, intra_ToolF: e.target.checked }));
  }


  const setSubmit = () => {
    dispatch(ExaminationActions.setSubmithardTissueTools(true))
    if (!isSubmitDiagnosis) {
      document.getElementById("submitMsg").textContent = 'Submitted!!'
      document.getElementById("0").disabled = true
      document.getElementById("1").disabled = true
      document.getElementById("2").disabled = true
      document.getElementById("3").disabled = true
      document.getElementById("4").disabled = true
      document.getElementById("5").disabled = true
      const answers = selectedCaseDetails.hardTissueTools
      let count = 0
      let trueCount = 0
      let wrongCount = 0
      //Object.keys(selectedCheckBox)
      for (let i = 0; i < answers.length; i++) {
        for (let key in selectedCheckBox) {
          let compare = new String(key).valueOf() == new String(answers[i]).valueOf()
          console.log('compare', key, answers[i], !compare, selectedCheckBox[key], !answers.includes(key))
          if (compare && selectedCheckBox[key]) {
            count++
          }
          else if (!compare && selectedCheckBox[key] && !answers.includes(key)) {
            wrongCount++
          }
          // do something for each key in the object 
        }
      }

      console.log(wrongCount)
      wrongCount = wrongCount / 2
      const weightExam = 1.5
      let score = 100 * (weightExam / 10) * (1 / 3) * (count / answers.length)
      score = score - 100 * (weightExam / 10) * (1 / 3) * (wrongCount / (6 - answers.length))
      console.log(count, 'countw', wrongCount)
      if (score >= 0) {
        dispatch(ScoreActions.setHardTissueScore(score))
        setToolsScore(score)
        console.log(score)
      }
      dispatch(ExaminationActions.setHardTissueTools(selectedCheckBox))
    }
    else if (submit_hard_tools) {
      document.getElementById("submitMsg").textContent = 'Submitted!!'
    }
  }

  const handleChange = (e) => {
    console.log(e.target.value)
    if (e.target.value == selectedCaseDetails.Hard_Plaque_tool) {
      dispatch(ScoreActions.setPlaqueToolScore(2.5))
    }
    else {
      dispatch(ScoreActions.setPlaqueToolScore(0))
    }
  }

  const handleChange2 = (e) => {
    console.log(e.target.value)
    if (e.target.value == selectedCaseDetails.Hard_bleeding_tool) {
      dispatch(ScoreActions.setBleedingToolScore(2.5))
    }
    else {
      dispatch(ScoreActions.setBleedingToolScore(0))
    }
  }

  const getInputValue=(e)=>{
    console.log(e.target.value)
    dispatch(ExaminationActions.setPlaqueValue(e.target.value))
    if (e.target.value == selectedCaseDetails.Hard_plaque_score) {
      dispatch(ScoreActions.setPlaqueScore(2.5))
    }
    else {
      dispatch(ScoreActions.setPlaqueScore(0))
    }
    console.log(e.target.value)
    
  }
  const getInputValue2=(e)=>{
    console.log(e.target.value)
    dispatch(ExaminationActions.setBleedingVal(e.target.value))
    if (e.target.value == selectedCaseDetails.Hard_bleeding_score) {
      dispatch(ScoreActions.setBleedingScore(2.5))
    }
    else {
      dispatch(ScoreActions.setBleedingScore(0))
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
      <div style={{
        position: 'absolute',
        left: '35%',
        top: '50%',
        fontSize: '40px',
        fontWeight: 'bold',
        color: '#198A1E'
      }}>Hard Tissue Assesment</div>
      <div style={{
        position: 'absolute',
        left: '5%',
        top: '60%',
        fontSize: '30px',
        fontWeight: 'bold',
        color: '#000'
      }}>1. Tool selection</div>
      <div style={{
        position: 'absolute',
        left: '5%',
        top: '70%',
        fontSize: '20px',
        fontWeight: '10px',
        color: '#000'
      }}>1. Select the tools need for the
        dental assessment
        . Wrong selections will carry negative marks.</div>
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
                  onChange={isCheckedA}
                  defaultChecked={submitedHardTissueTools['intra_ToolA']}
                  id='0'
                  {...label}
                  sx={{
                    '& .MuiSvgIcon-root': { fontSize: 28 }, color: "red",
                    '&.Mui-checked': {
                      color: red[700], color: red[600],
                    },
                  }}
                />} />
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
                  id='1'
                  onChange={isCheckedB}
                  defaultChecked={submitedHardTissueTools['intra_ToolB']}
                  {...label}
                  sx={{
                    '& .MuiSvgIcon-root': { fontSize: 28 }, color: "red",
                    '&.Mui-checked': {
                      color: red[700], color: red[600],
                    },
                  }}
                />} />
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
                  id='2'
                  onChange={isCheckedC}
                  defaultChecked={submitedHardTissueTools['intra_ToolC']}
                  {...label}
                  sx={{
                    '& .MuiSvgIcon-root': { fontSize: 28 }, color: "red",
                    '&.Mui-checked': {
                      color: red[700], color: red[600],
                    },
                  }}
                />} />
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
                    id='3'
                    onChange={isCheckedD}
                    defaultChecked={submitedHardTissueTools['intra_ToolD']}
                    {...label}
                    sx={{
                      '& .MuiSvgIcon-root': { fontSize: 28 }, color: "red",
                      '&.Mui-checked': {
                        color: red[700], color: red[600],
                      },
                    }}
                  />} />
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
                    id='4'
                    onChange={isCheckedE}
                    defaultChecked={submitedHardTissueTools['intra_ToolE']}
                    {...label}
                    sx={{
                      '& .MuiSvgIcon-root': { fontSize: 28 }, color: "red",
                      '&.Mui-checked': {
                        color: red[700], color: red[600],
                      },
                    }}
                  />} />
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
                    id='5'
                    onChange={isCheckedF}
                    defaultChecked={submitedHardTissueTools['intra_ToolF']}
                    {...label}
                    sx={{
                      '& .MuiSvgIcon-root': { fontSize: 28 }, color: "red",
                      '&.Mui-checked': {
                        color: red[700], color: red[600],
                      },
                    }}
                  />} />
            </Grid>
          </Grid>
        </div>
      </div>
      <label>If you submit the answers, you can no longer edit the answers</label>
      <button type="button" class="btn btn-primary" fdprocessedid="b3ntkd"
        onClick={setSubmit}>submit</button>
      <label id="submitMsg"></label>

      <div className='chart'>2. Dental Chart</div>
      <div className='chart'>3. Caries status</div>
      <div style={{
        position: 'absolute',
        left: '6%',
        top: '215%',
        fontSize: '20px',
        fontWeight: '10px',
        color: '#000'
      }}>Are there any Caries?</div>
      <div className='caries'><CariesDD /></div>
      <div className='cariesCard'>
        <Card sx={{ maxWidth: 500 }}>
          {/* <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    paddingLeft="50px"
                  />
                  {cariesSelected}
                </CardActionArea> */}
        </Card></div>
      <div className='chart'>4. Restorations</div>
      <div className='caries'><Resto /></div>
      <div className='cariesCard'>
        <Card sx={{ maxWidth: 500 }}>
          {/* <CardActionArea> */}
          {/* <CardMedia
                    component="img"
                    height="200"
                    paddingLeft="50px"
                  />
                  {/* <CardContent>
                    <div className='case'>
                          Case {selectedCaseDetails.name}
                          </div>
                          <div className='casedes'>
                        {selectedCaseDetails.description}
                    </div>
                        
                  </CardContent> */}
          {/* </CardActionArea> */}
        </Card></div>
      <div className='chart'>5. Answer the Questions</div>
      <div className='mainqs'>What is the plaque score?</div>
      <div className='qs'>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '20ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="standard-basic" label="Your answer" variant="standard" onChange={getInputValue} value={plaqueValue} />
        </Box></div>
      <div className='mainqs'> Select the correct tool &nbsp;
        <select className="dd1" label="Select Tool" onChange={handleChange} labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard">

          <option className="dd"></option>
          <option value='intra_ToolA' className="dd">Tool_1</option>
          <option value='intra_ToolB' className="dd">Tool_2</option>
          <option value='intra_ToolC' className="dd">Tool_3</option>
          <option value='intra_ToolD' className="dd">Tool_4</option>
          <option value='intra_ToolE' className="dd">Tool_5</option>
          <option value='intra_ToolF' className="dd">Tool_6</option>


        </select>
      </div>

      <div className='mainqs'>What is the bleeding score?</div>
      <div className='qs'>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '20ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="standard-basic" label="Your answer" variant="standard" onChange={getInputValue2} value={bleedingValue}/>
        </Box></div>
      <div className='mainqs'> Select the correct tool &nbsp;
        <select className="dd1" label="Select Tool" onChange={handleChange2} labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard">

          <option className="dd"></option>
          <option value='intra_ToolA' className="dd">Tool_1</option>
          <option value='intra_ToolB' className="dd">Tool_2</option>
          <option value='intra_ToolC' className="dd">Tool_3</option>
          <option value='intra_ToolD' className="dd">Tool_4</option>
          <option value='intra_ToolE' className="dd">Tool_5</option>
          <option value='intra_ToolF' className="dd">Tool_6</option>


        </select>
      </div>


    </div>

  );
}

export default Hard;
