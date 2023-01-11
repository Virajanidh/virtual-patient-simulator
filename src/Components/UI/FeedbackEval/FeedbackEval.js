import React, { useEffect, useState } from 'react';
import Picker from 'emoji-picker-react';
import { useSelector, useDispatch } from 'react-redux';
import { ScoreActions } from '../../../Actions/Score/ScoreActions';
import { useNavigate, Link } from 'react-router-dom';
import DiagCard from './feedbacks/DiagCard';
import firebase from '../../../Config/Config'


function FeedbackEval() {

  const dispatch = useDispatch()

  //Diagnosis
  //100 × (Total score of selected correct diagnosis)/(Total score of diagnosis)
  const { wrongDiagnosisQ } = useSelector((state) => state.diagnosisQ)
  const { correctDiagnosisQ } = useSelector((state) => state.diagnosisQ)
  const { diagScore } = useSelector((state) => state.score) //01.Systematic thinking
  const { selectedCaseDetails } = useSelector((state) => state.caseSelected)
  const { userInfomation } = useSelector((state) => state.user)
 
  //History Taking
  // 100 × (total number of selected correct history
  //   questions, examinations, diagnoses)/ (total
  //   number of correct history questions,
  //   examinations, diagnoses)
  const { selectedQdata } = useSelector((state) => state.historyQ)
  const { allHistoryTakingQ } = useSelector((state) => state.historyQ)
  const { sectionOrder } = useSelector((state) => state.historyQ)
  const [ScoreHistory, setScoreHistory] = useState(0)
  const [newStudentScore, setNewStudentScore] = useState(0)
  const [duration, setTimeDuration] = useState('')

  const { periodentalScreeningScore } = useSelector((state) => state.score)
  const { hardTissueScore } = useSelector((state) => state.score)
  const { cariesScore } = useSelector((state) => state.score)
  const { restorationScore } = useSelector((state) => state.score)
  const { plaqueScore } = useSelector((state) => state.score)
  const { bleedingScore } = useSelector((state) => state.score)
  const { plaqueToolScore } = useSelector((state) => state.score)
  const { bleedingToolScore } = useSelector((state) => state.score)
  const { radioScore } = useSelector((state) => state.score)
  const { start_time } = useSelector((state) => state.time)
  const { countCorrectHistoryTaking } = useSelector((state) => state.historyQ)

  const [correctHistoryQ, setcorrectHistoryQ] = useState([])
  const [wrongHistoryQ, setwrongHistoryQ] = useState([])

  const [perioselectedTool, setperioselectedTool] = useState([])
  const [hardselectedTool, setselectedTool] = useState([])
  const [perioselectedToolAns, setperioselectedToolAns] = useState([])
  const [hardselectedToolAns, setselectedToolAns] = useState([])



  useEffect(() => {
    //calculateHistoryScore()
    addData()
   // getCorrectHistoryQ()


  }, []);

  const getCorrectHistoryQ = () => {
    for (let i = 0; i < selectedQdata.length; i++) {
      if (selectedQdata[i].correctness) {
        setcorrectHistoryQ(correctHistoryQ.concat(selectedQdata[i].q) );
      }
      else {
        setwrongHistoryQ(wrongHistoryQ.concat(selectedQdata[i].q) );
      }
    }
  }



  const setDuration = () => {
    let currentTime = new Date()
    let utc1 = start_time.getTime()
    let utc2 = currentTime.getTime()
    let ts = (utc2 - utc1) / 1000;
    console.log(currentTime)
    var d = Math.floor(ts / (3600 * 24));
    var h = Math.floor(ts % (3600 * 24) / 3600);
    var m = Math.floor(ts % 3600 / 60);
    var s = Math.floor(ts % 60);
    let duration1 = ''
    if (d > 0) {
      duration1 = d + "days and " + h + ":" + m + ":" + s + "hrs"
    }
    else {
      duration1 = h + ":" + m + ":" + s + "hrs"
    }
    console.log(duration1)
    setTimeDuration(duration1)
    return duration1

  }

  const calculateHistoryScore = () => {
    setScoreHistory(histScore)
    //check related or not
    let correctCount = 0
    let TotalScore = 0
    let inCorrectCount = 0
    const weightForHis = 4
    let arra1=[]
    let arra2=[]
    for (let i = 0; i < selectedQdata.length; i++) {
      if (selectedQdata[i].correctness) {
        correctCount++
        arra1.push(selectedQdata[i].q)
      }
      else {
        inCorrectCount++
        arra2.push(selectedQdata[i].q)
      }
    }
    setcorrectHistoryQ(arra1)
    setwrongHistoryQ(arra2)
    console.log(correctHistoryQ)
    console.log(correctCount, "counts", inCorrectCount, "len", countCorrectHistoryTaking.length)
    if (correctCount > inCorrectCount) {
      correctCount = correctCount - inCorrectCount
      TotalScore = 100 * (weightForHis / 10) * (correctCount / countCorrectHistoryTaking) * 0.75
    }
    else if (correctCount <= inCorrectCount) {
      TotalScore = 0
    }

    setScoreHistory(TotalScore)
    dispatch(ScoreActions.setHisScore(TotalScore))
    let orderScore = 0
    if (sectionOrder[0] == 'complaint') {
      orderScore = 100 * 0.25 * (weightForHis / 10) * (2.5 / 10)
      console.log(orderScore)
    }
    else {
      orderScore = orderScore - 100 * 0.25 * (weightForHis / 10) * (2 / 10)
    }
    if (sectionOrder[1] == 'medicalH') {
      orderScore = orderScore + 100 * 0.25 * (weightForHis / 10) * (2.5 / 10)
      console.log(orderScore)
    }
    else {
      orderScore = orderScore - 100 * 0.25 * (weightForHis / 10) * (2 / 10)
    }
    if (sectionOrder.includes('habits')) {
      orderScore = orderScore + 100 * 0.25 * (weightForHis / 10) * (1 / 10)
    }
    if (sectionOrder.includes('dhistory')) {
      orderScore = orderScore + 100 * 0.25 * (weightForHis / 10) * (1 / 10)
    }
    if (sectionOrder.includes('plaque')) {
      orderScore = orderScore + 100 * 0.25 * (weightForHis / 10) * (1 / 10)
    }
    if (sectionOrder.includes('pretreate')) {
      orderScore = orderScore + 100 * 0.25 * (weightForHis / 10) * (1 / 10)
    }
    if (sectionOrder.includes('shistory')) {
      orderScore = orderScore + 100 * 0.25 * (weightForHis / 10) * (1 / 10)
    }
    let isWrongComplaint = false
    let isWrongMedicalH = false
    for (let i = 2; i < sectionOrder.length; i++) {
      if (sectionOrder[i] == 'complaint') {
        isWrongComplaint = true
      }
      if (sectionOrder[i] == 'medicalH') {
        isWrongMedicalH = true
      }
    }
    if (isWrongComplaint) {
      orderScore = orderScore - 100 * 0.25 * (weightForHis / 10) * (1 / 10)
    }
    if (isWrongMedicalH) {
      orderScore = orderScore - 100 * 0.25 * (weightForHis / 10) * (1 / 10)
    }
    console.log(orderScore, ':', TotalScore)
    let historyScore = 0
    if (orderScore > 0) {
      dispatch(ScoreActions.setHisScore(TotalScore + orderScore))
      historyScore = TotalScore + orderScore
    }


    const StudentScore = historyScore + diagScore + periodentalScreeningScore + hardTissueScore + cariesScore + restorationScore + plaqueScore + bleedingScore + plaqueToolScore + bleedingToolScore + radioScore
    const Systematic_thinking = StudentScore - diagScore
    const expansion_of_knowledge = diagScore

    setNewStudentScore(StudentScore)
    return historyScore
    //addData()
  }

  const { selectedPerodentalTools } = useSelector((state) => state.examination)
  const { cariesSelected } = useSelector((state) => state.examination)
  const { restorationsSelected } = useSelector((state) => state.examination)
  const { plaqueValue } = useSelector((state) => state.examination)
  const { bleedingValue } = useSelector((state) => state.examination)
  const { radioSelections } = useSelector((state) => state.investigation)
  console.log(radioSelections)




  const getRadioSelections = () => {
    let array = []
    for (let key in radioSelections) {
      console.log(key, radioSelections[key])
      if (radioSelections[key]) {
        array.push(key)
      }
    }
    return array
  }

  const setTools = (array2) => {
    let array = []
    for (let key in array2) {
      console.log(key, array2[key])
      if (array2[key]) {
        if(key=='intra_ToolA'){
          array.push('intra_ToolA')
        }
        if(key=='intra_ToolB'){
          array.push('intra_ToolB')
        }
        if(key=='intra_ToolC'){
          array.push('intra_ToolC')
        }
        
        if(key=='intra_ToolD'){
          array.push('intra_ToolD')
        }
        if(key=='intra_ToolE'){
          array.push('intra_ToolE')
        }
        if(key=='intra_ToolE'){
          array.push('intra_ToolE')
        }
        if(key=='intra_ToolF'){
          array.push('intra_ToolF')
        }
        array.push(key)
      }
    }
    return array
  }
  //  const {periodentalScreeningScore}= useSelector((state) => state.score)
  //  const {hardTissueScore}= useSelector((state) => state.score)
  //  const {cariesScore}= useSelector((state) => state.score)
  //  const {restorationScore}= useSelector((state) => state.score)
  //  const {plaqueScore}= useSelector((state) => state.score)
  //  const {bleedingScore}= useSelector((state) => state.score)
  //  const {plaqueToolScore}= useSelector((state) => state.score)
  //  const {bleedingToolScore}= useSelector((state) => state.score)
  //  const {radioScore}= useSelector((state) => state.score)
  const { selectedAnsForDiagnosisQ } = useSelector((state) => state.diagnosisQ)
  const { histScore } = useSelector((state) => state.score)




  const addData = async () => {
    var historyScore = calculateHistoryScore()
    var path = 'StudentsRecord' + selectedCaseDetails.caseId
    var tutorialsRef = firebase.firestore().collection(path);
    console.log(selectedAnsForDiagnosisQ)
    console.log(userInfomation,":",selectedQdata,":", sectionOrder,":", historyScore,":",selectedPerodentalTools,":", bleedingValue,":", cariesSelected,":",restorationsSelected,":",plaqueValue)
  //  console.log(periodentalScreeningScore,":", hardTissueScore,":",cariesScore,":",restorationScore,":",plaqueScore,":",bleedingScore)
     console.log(plaqueToolScore,":",bleedingToolScore, ":",radioScore,":", diagScore,":",selectedAnsForDiagnosisQ)
    tutorialsRef.add({
      id: userInfomation.email,
      allHistoryTakingQ: selectedQdata,
      sectionOrder: sectionOrder,
      historyQMarks: historyScore,
      selectedPerodentalTools: selectedPerodentalTools,
      bleedingValue: bleedingValue,
      cariesSelected: cariesSelected,
      restorationsSelected: restorationsSelected,

      plaqueValue: plaqueValue,
      radioSelections: getRadioSelections(),
      periodentalScreeningScore: periodentalScreeningScore,
      hardTissueScore: hardTissueScore,
      cariesScore: cariesScore,
      restorationScore: restorationScore,

      plaqueScore: plaqueScore,
      bleedingScore: bleedingScore,
      plaqueToolScore: plaqueToolScore,
      bleedingToolScore: bleedingToolScore,

      radioScore: radioScore,
      diagScore: diagScore,
      selectedAnsForDiagnosisQ: selectedAnsForDiagnosisQ,
      //selectedAnsForDiagnosis:'hello',
      duration: setDuration()

      // id: 'HELLO',
      // allHistoryTakingQ:'HELLO',
      // sectionOrder: 'HELLO',
      // historyQMarks: historyScore,
      // selectedPerodentalTools: 'HELLO',
      // bleedingValue: 'HELLO',
      // cariesSelected: 'HELLO',
      // restorationsSelected: 'HELLO',
      // plaqueValue: plaqueValue,
      // radioSelections: 'HELLO',
      // periodentalScreeningScore: 'HELLO',
      // hardTissueScore: 'HELLO',
      // cariesScore: 'HELLO',
      // restorationScore:'HELLO',
      // plaqueScore:'HELLO',
      // bleedingScore:'HELLO',
      // plaqueToolScore: 'HELLO',
      // bleedingToolScore: 'HELLO',
      // radioScore: 'HELLO',
      // diagScore: 'HELLO',
      // selectedAnsForDiagnosisQ: 'HELLO',
      // duration: 'HELLO'


    })
      .then(function (docRef) {
        console.log("Tutorial created with ID: ", docRef.id);
      })
  }

  const navigate = useNavigate();
  const handleClick1 = () => {
    navigate('/diagnosis');
  };



  return (
    <div>
      <div className='backbtn'>
        <button className="back" size="medium" onClick={handleClick1}>  Back </button>
      </div>

      Feedback:..
      <div>Case Id:{selectedCaseDetails.caseId}</div>
      <div>Case Description:{selectedCaseDetails.description}</div>
      <div>
        Your Score :   {newStudentScore}</div>
      <div>  Your Systematic thinking Score :  {newStudentScore - diagScore}</div>
      <div>Score based on expansion of knowledge : {diagScore} </div>
      <div>   Your Spent time :   {duration}</div>
      <div>History Taking part:-----</div>
      <div>correct Selections:</div>
      {correctHistoryQ ? correctHistoryQ.map(que=>
      <div>
        {que}
      </div>
      ):null}
      <div>Incorrect Selections:</div>
      {wrongHistoryQ ? wrongHistoryQ.map(que=>
      <div>
        {que}
      </div>
      ):null}
      <div>Diagnosis Part</div>
      <div>
      {/* {selectedAnsForDiagnosisQ ? selectedAnsForDiagnosisQ.map(que=>
      <div>
        <DiagCard oneQuestion={que}/>
      </div>
      ):null} */}

      </div>
 
 

    </div>
  );
}

export default FeedbackEval;
