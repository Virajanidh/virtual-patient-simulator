import { height } from "@mui/system";
import img3 from "../../../Images/80.png"
import { useSelector } from "react-redux";
import firebase from '../../../Config/Config'
import { useNavigate, Link} from 'react-router-dom';
import Qcard from "./questions/Qcard";
import React, { useEffect,useState, Fragment } from 'react';
import { useDispatch } from "react-redux";
import { DiagnosisActions } from "../../../Actions/Diagnosis/DiagnosisActions";

function Diagnosis() {

  const {selectedCaseDetails} = useSelector((state) => state.caseSelected)
  const {selectedAnsForDiagnosisQ} = useSelector((state) => state.diagnosisQ)
  const {isSubmitDiagnosis} = useSelector((state) => state.diagnosisQ)
  const navigate = useNavigate();
  const [DiagQuestions,setDiagQuestions]=useState([])
  const [isSubmit,setIsSubmit]=useState(false)
  const [isFeedback,setFeedback]=useState(false)
  const dispatch = useDispatch()

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
    // if(!isSubmit){
    //   document.getElementById("warningMsg").disabled = true;
    // }
    // else{
    //   document.getElementById("warningMsg").disabled = false;
    // }
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

    {selectedAnsForDiagnosisQ && 
                    selectedAnsForDiagnosisQ.map(selectedDQ => (
                      <div class="alert alert-dismissible alert-secondary">
                      <label>{selectedDQ.q}</label>
                      <label>{selectedDQ.studentAnswer}</label>
                      </div>
                    ))}
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
  