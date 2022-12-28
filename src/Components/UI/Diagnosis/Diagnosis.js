import { height } from "@mui/system";
import img3 from "../../../Images/80.png"
import { useSelector } from "react-redux";
import firebase from '../../../Config/Config'
import { useNavigate, Link} from 'react-router-dom';
import Qcard from "./questions/Qcard";
import React, { useEffect,useState, Fragment } from 'react';

function Diagnosis() {

  const {selectedCaseDetails} = useSelector((state) => state.caseSelected)
  const navigate = useNavigate();
  const [DiagQuestions,setDiagQuestions]=useState([])

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
  }

  const handleClick = () => {
    navigate('/page4');  
  };

  const content = [];
  if (DiagQuestions !== undefined)
    for (let item of DiagQuestions) {
      const row = (
        <Qcard  oneQuestion={item} />
      );
      content.push(row);
    }

  return(
   <div>
    <button className="back" size="medium" onClick={handleClick}>Back</button>

      <div class="list-group">
        {content}
        
    </div>
    </div>

    );
  }
  
  export default Diagnosis;
  