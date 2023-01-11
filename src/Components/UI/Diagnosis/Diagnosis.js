import { height } from "@mui/system";
import img3 from "../../../Images/80.png"
import { useSelector } from "react-redux";
import firebase from '../../../Config/Config'
import { useNavigate, Link} from 'react-router-dom';
import Qcard from "./questions/Qcard";
import React, { useEffect,useState, Fragment } from 'react';
import { useDispatch } from "react-redux";
import { DiagnosisActions } from "../../../Actions/Diagnosis/DiagnosisActions";
import { ScoreActions } from '../../../Actions/Score/ScoreActions';

function Diagnosis() {

  const {selectedCaseDetails} = useSelector((state) => state.caseSelected)
  const {selectedAnsForDiagnosisQ} = useSelector((state) => state.diagnosisQ)
  const {isSubmitDiagnosis} = useSelector((state) => state.diagnosisQ)
  const navigate = useNavigate();
  const [DiagQuestions,setDiagQuestions]=useState([])
  const [isSubmit,setIsSubmit]=useState(false)
  const [isFeedback,setFeedback]=useState(false)
  const dispatch = useDispatch()

  const {allDignosisQ}=useSelector((state) => state.diagnosisQ)
  const {diagScore}=useSelector((state) => state.score)
  

  useEffect(()=> {
    fetchDQuestions();
  }, []);

  const fetchDQuestions=async()=>{
    const path="Diagnosis"+selectedCaseDetails.caseId
    const snapshot = await firebase.firestore().collection(path).get()
    console.log(snapshot)
    const qArray= snapshot.docs.map(doc => doc.data())
    console.log(qArray)
    setDiagQuestions(DiagQuestions.concat( qArray));
    dispatch(DiagnosisActions.setDiagnosisAllQ(qArray))
  }

  const handleClick = () => {
    navigate('/page2');  
  };
  const handdleFeedback = ()=>{
    navigate('/feedback'); 
  }
  const setSubmit =()=>{
    setIsSubmit(true)
    dispatch(DiagnosisActions.setDiagnosisSubmit(true))
   
    var inputs = document.getElementsByTagName("input"); 
    for (var i = 0; i < inputs.length; i++) { 
        inputs[i].disabled = true;
    } 
    
    calculateScore();
  }

  const calculateScore=()=>{
    if(!isSubmitDiagnosis){
    let correctScore=0
    let inCorrectScore=0
    let TotalScore=0
    const weightForDiag = 3
    const weightForOneQ=weightForDiag/allDignosisQ.length
    console.log('hii')
    for(let i=0;i<selectedAnsForDiagnosisQ.length;i++){
      
      let score=0
      let corrlen=selectedAnsForDiagnosisQ[i].studentCorrectAnswers.length
      let wronglen=selectedAnsForDiagnosisQ[i].studentWrongAnswers.length
      console.log(corrlen,'|,',wronglen)
      let correctCount=selectedAnsForDiagnosisQ[i].correctCount
      if(corrlen>wronglen){
        correctScore=corrlen-wronglen
        console.log(parseInt(correctCount),'/',correctScore)
        score =100*(weightForOneQ/10)*((correctScore)/parseInt(correctCount))
        console.log(score)
      }
     TotalScore=TotalScore+score
      // else{
      //   inCorrectCount++
      // }

    }
    
    dispatch(ScoreActions.setDiagScore(TotalScore))
    }
  }

  const content = [];
  if (DiagQuestions !== undefined)
    for (let item of DiagQuestions) {
      console.log(isSubmit)
      const row = (
        <Qcard  oneQuestion={[item,isSubmit]} />
      );
      content.push(row);
    }
  
    const checkSubmit =isSubmit|isSubmitDiagnosis
  return(
   <div  >
   {checkSubmit ?
    <div id='warningMsg'>
    <div  class="alert alert-dismissible alert-danger">
          <strong>Allready submitted the answers.</strong> Can not modify Answers.
        </div>
        </div> : null }
    <button className="back" size="medium" onClick={handleClick}>Back</button>

      <div class="list-group">
        {content}
        
    </div>

    <label>If you submit the answers, you can no longer edit the answers</label>
    <div>
    <button type="button" class="btn btn-primary" fdprocessedid="b3ntkd"
     onClick={setSubmit}>submit</button>
     </div>
     
      { checkSubmit ?
      <div>
    <button type="button" class="btn btn-primary" fdprocessedid="b3ntkd"
     onClick={handdleFeedback}>View Evaluation and Feedback</button>
     </div> : null }
     
    </div>

    );
  }
  
  export default Diagnosis;
  