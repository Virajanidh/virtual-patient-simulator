import React, { useEffect, useState } from 'react';
import Picker from 'emoji-picker-react';
import { useSelector,useDispatch } from 'react-redux';
import { ScoreActions } from '../../../Actions/Score/ScoreActions';
import { useNavigate, Link} from 'react-router-dom';


function FeedbackEval() {

  const dispatch=useDispatch()

    //Diagnosis
  //100 × (Total score of selected correct diagnosis)/(Total score of diagnosis)
  const {wrongDiagnosisQ} = useSelector((state) => state.diagnosisQ)
  const {correctDiagnosisQ}=useSelector((state) => state.diagnosisQ)
  const {diagScore}=useSelector((state) => state.score) //01.Systematic thinking

    //History Taking
  // 100 × (total number of selected correct history
  //   questions, examinations, diagnoses)/ (total
  //   number of correct history questions,
  //   examinations, diagnoses)
  const {histScore}=useSelector((state) => state.score)
  const {selectedQdata} = useSelector((state)=> state.historyQ)
  const {allHistoryTakingQ} = useSelector((state)=> state.historyQ)
  const {sectionOrder} = useSelector((state)=> state.historyQ) 
  const [ScoreHistory,setScoreHistory]=useState(0)


  useEffect(() => {
    calculateHistoryScore()

  }, []);

  const calculateHistoryScore=()=>{
    setScoreHistory(histScore)
    //check related or not
    let correctCount=0
    let TotalScore=0
    let inCorrectCount=0
    const weightForHis = 4
    for(let i=0;i<selectedQdata.length;i++){
      if(selectedQdata[i].correctness){
        correctCount ++
      }
      else{
        inCorrectCount++
      }
    }
    if(correctCount>inCorrectCount){
      correctCount=correctCount-inCorrectCount
      TotalScore = 100*(weightForHis/10)*(correctCount/allHistoryTakingQ.length)*0.75
    }
    else if(correctCount<=inCorrectCount){
      TotalScore = 0
    }
   
    setScoreHistory(TotalScore)
    dispatch(ScoreActions.setHisScore(TotalScore))
    let orderScore=0
    if(sectionOrder[0]=='complaint'){
      orderScore=100*0.25*(weightForHis/10)*(2.5/10)
      console.log(orderScore)
    }
    else{
      orderScore=orderScore-100*0.25*(weightForHis/10)*(2/10)
    }
    if(sectionOrder[1]=='medicalH'){
      orderScore= orderScore + 100*0.25*(weightForHis/10)*(2.5/10)
      console.log(orderScore)
    }
    else{
      orderScore=orderScore-100*0.25*(weightForHis/10)*(2/10)
    }
    if(sectionOrder.includes('habits')){
      orderScore=orderScore+100*0.25*(weightForHis/10)*(1/10)
    }
    if(sectionOrder.includes('dhistory')){
      orderScore=orderScore+100*0.25*(weightForHis/10)*(1/10)
    }
    if(sectionOrder.includes('plaque')){
      orderScore=orderScore+100*0.25*(weightForHis/10)*(1/10)
    }
    if(sectionOrder.includes('pretreate')){
      orderScore=orderScore+100*0.25*(weightForHis/10)*(1/10)
    }
    if(sectionOrder.includes('shistory')){
      orderScore=orderScore+100*0.25*(weightForHis/10)*(1/10)
    }
    let isWrongComplaint=false
    let isWrongMedicalH=false
    for(let i=2;i<sectionOrder.length;i++){
      if(sectionOrder[i]=='complaint'){
        isWrongComplaint=true
      }
      if(sectionOrder[i]=='medicalH'){
        isWrongMedicalH=true
      }
    }
    if(isWrongComplaint){
      orderScore=orderScore-100*0.25*(weightForHis/10)*(1/10)
    }
    if(isWrongMedicalH){
      orderScore=orderScore-100*0.25*(weightForHis/10)*(1/10)
    }
    console.log(orderScore)
    if(orderScore>0){
      dispatch(ScoreActions.setHisScore(TotalScore+orderScore))
    }

  }

  const navigate = useNavigate();
  const handleClick1 = () => {
    navigate('/diagnosis');  
  };

  
    return (
    <div>
      <div className='backbtn'>
                    <button className="back"  size="medium" onClick={handleClick1}>  Back </button>
                  </div>
     
                  Feedback:..
                  {diagScore}
                  
                

     
    </div>
    );
  }
  
  export default FeedbackEval;
  