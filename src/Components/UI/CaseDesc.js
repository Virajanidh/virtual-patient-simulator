import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import background from "../../Images/DentistryBackgound.jpg";
import React, { useEffect,useState, Fragment } from 'react';
import { useSelector} from "react-redux";
import './Case.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Chip from '@mui/material/Chip';
import { useNavigate, Link} from 'react-router-dom';
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import NativeSelect from '@mui/material/NativeSelect'
import { makeStyles } from '@material-ui/core/styles'
import './SelectedQ'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { maxHeight } from '@mui/system';
import img1 from "../../Images/case1.png";
import img2 from "../../Images/newBack.jpg";
import { QuestionAnswer } from '@mui/icons-material';
import firebase from '../../Config/Config'
import Qcard from './questionCards/Qcard';
import QcardPack from './questionCards/QcardPack';
import { useDispatch } from "react-redux";
import {historyTakingActions} from '../../Actions/historyTakingQ/historyTakingActions'


const useStyles = makeStyles({
    label: {
      color: "black",
      "&.Mui-focused": {
        color: "black",
      },
    },
  });
  
  

function CaseDesc() {

  const [questions,setQuestions]=useState([])
  const [selectedQId,setSelectedQId] =useState([])
  const {userInfomation} = useSelector((state) => state.user)
  const classes = useStyles();
  const navigate = useNavigate();
  const [qId,setIdOfQ]=useState('');
  const [value,setValue] =useState('');
  const [Section,setSection]=useState('');
  const [ans,setAns] = useState('');
  const [selectedQ,setSelectedQ]=useState('');

  const {selectedQdata} =useSelector((state) => state.historyQ)
  const dispatch = useDispatch()

  const initialState = {};
  const resetState = () => {
    setQuestions(initialState);
  };
  const mapValuesToState=(qArray)=>{
    console.log("qarray:",qArray);
   // setQuestions(initialState)
    qArray.map((item) =>
    setQuestions(item)
    );
    
    console.log(questions);
  }

  useEffect(() => {
    console.log("hii")
    setSelectedQ(selectedQdata)
    fetchQuestions(selectedQdata);
  }, []);

  const fetchQuestions=async()=>{
    console.log("hii")
    const snapshot = await firebase.firestore().collection('C001').get()
    const qArray= snapshot.docs.map(doc => doc.data())
    console.log(qArray);
    if(questions.length<qArray.length){
    setQuestions(questions.concat(qArray));
    }
    console.log(questions);
  }

  const handleSelect=(e)=>{
    console.log(e);
    setValue(e)
    setIdOfQ(e);
    for (let item of questions){
      let num= e.toString()
      if(item.id == e.toString()){
        console.log(item)
        setSelectedQ( // Replace the state
        [ // with a new array
          ...selectedQ, // that contains all the old items
          item // and one new item at the end
        ]
        );
        dispatch(historyTakingActions.addselectedQdata(item));
      }
    }
    console.log(selectedQ)
    setSelectedQId( // Replace the state
    [ // with a new array
      ...selectedQId, // that contains all the old items
      e.toString() // and one new item at the end
    ]
  );

    console.log(selectedQId)
    
    if(e==="Question-1"){
      setAns("Ans1")
    }

    
  }

  const displayq=(e)=>{
    const QList= questions;
    console.log("QList",QList)
    

  }

  const handleSection=(e)=>{
    console.log(e)
    setSection(e)
    displayq(e)
  }



  const handleClick = () => {
    navigate('/page4');  
  };
  const handleClick1 = () => {
    navigate('/page1');  
  };
  console.log(userInfomation.name)

   const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

    return (
      <div>
        <Fragment>
          <div className ="app" style={{
                backgroundImage: `url(${img2})`,
                height:'200vh',
                width: '100vw',
                marginTop:'0px',
                fontSize:'50px',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'repeat'
          }}>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <div class="container-fluid">
                <a class="navbar-brand" style={{
                  fontSize: ' 20px',
                }}href="#">Hi {userInfomation.name}</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav" style={{
                  fontSize: ' 20px',
                }} >
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="#">Previous Feedback</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Logout</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <div>
                <Grid container spacing={20}>
                <Grid item xs={4}>
                  <div className='backbtn'>
                    <button className="back"  size="medium" onClick={handleClick1}>  {'<<'} Back </button>
                  </div>
                  </Grid>
                  <Grid item xs={4}>
                  <div className="exmbtn">
                    <button className="back" size="medium" onClick={handleClick}>Next</button>

                    </div>
                  </Grid>
                </Grid>
            </div>
            <div style={{position:'absolute',
            left:'35%',
            top:'25%',
            fontSize:'45px',
            fontWeight : 'bold',
            color: '#FFF'
            }}>Patient History Taking

            </div>
            <div style={{position:'absolute',
            left:'10%',
            top:'35%',
            fontSize:'30px',
            fontWeight : 'bold',
            color: '#FFF'
            }}>Case ID: 001

            </div>
            <Grid container spacing={1}>
              <Grid Item xs={6}>
            <div className="cardDesc">
              <Card sx={{ maxWidth: 500 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    alt="Case Description"
                    image={img1}
                  />
                  <CardContent>
                    <div className='case'>
                    Case 001
                    </div>
                    <div className='casedes'>
                    A 38-year-old patient presents with a painful tooth on the right side upper arch.
                    </div>
                  
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
            </Grid>
            <Grid Item xs={6}>
            <div className='qna'>
              <Card sx={{ maxWidth: 600 }}>
                <CardActionArea>
                  <CardMedia
                    height="500"
                    alt="Case Description"
                  />
                  <CardContent>
                  <div className='case'>
                    Your Questions
                    </div>
                      <QcardPack questionList={selectedQ}/>
                    {/* {Section && qId ?  
                    <Typography variant="body2" color="text.secondary">
                   
                    {questions.filter(question => question.id.includes(qId)).map(filteredName => (
                         <h4>{filteredName.cat}</h4>
                    ))}
                    {questions.filter(question => question.id.includes(qId)).map(filteredName => (
                         <h4>{filteredName.q}</h4>
                    ))}
                    {questions.filter(question => question.id.includes(qId)).map(filteredName => (
                         <h4>{filteredName.a}</h4>
                    ))}
                    </Typography>
                    : null} */}
                    {/* <Qcard Qlist={questions} selectedQId={selectedQId}/> */}
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
            </Grid>
            </Grid>
            <div className="cardsd">
              <Card sx={{ maxWidth: 500, maxHeight: 1000}}>
                <CardActionArea>
                  <CardContent sx={{maxHeight: 1000}} >
                    <div className='ddown'>
                  <DropdownButton
                    alignRight
                    title="Select the Section"
                    id="dropdown-menu-align-right"
                    onSelect={handleSection}
                  >
                    <Dropdown.Item eventKey="complaint" >History of the presenting complaint</Dropdown.Item>
                    <Dropdown.Item eventKey="medicalH" >Medical history</Dropdown.Item>
                    <Dropdown.Item eventKey="habits" >Habits</Dropdown.Item>
                    <Dropdown.Item eventKey="plaque" >Plaque control</Dropdown.Item>
                    <Dropdown.Item eventKey="history" >Dietary history</Dropdown.Item>
                    <Dropdown.Item eventKey="pretreate" >Previous dental treatments</Dropdown.Item>
                    <Dropdown.Item eventKey="shistory" >Social history</Dropdown.Item>
                    
                    {/* <Dropdown.Divider />
                    <Dropdown.Item eventKey="some link">some link</Dropdown.Item> */}
                  </DropdownButton>
          <div className='sect'>
                  {Section==='complaint' ?
          <label>History of the presenting complaint</label> :null}
          {Section==='habits' ?
          <label>Habits</label> :null}
          {Section==='medicalH' ?
          <label>Medical history</label> :null}
          {Section==='plaque' ?
          <label>Plaque control</label> :null}
          {Section==='dhistory' ?
          <label>Dietary history</label> :null}
          {Section==='pretreate' ?
          <label>Previous dental treatments</label> :null}
           {Section==='shistory' ?
          <label>Social history</label> :null}
</div>
            </div>
            <div>
                  <DropdownButton
                    alignRight
                    title="Select the question"
                    id="dropdown-menu-align-right"
                    onSelect={handleSelect}
                  >
                    {questions.filter(question => question.cat.includes(Section)).map(filteredName => (
                      <li>
                         <Dropdown.Item onClick={handleSelect} eventKey={filteredName.id}>{filteredName.q}</Dropdown.Item>
                      </li>
                    ))}
                   
                    {/* <Dropdown.Item onClick={handleSelect} eventKey="Question-2">Question-2</Dropdown.Item>
                    <Dropdown.Item eventKey="Question-3">Question 3</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="some link">some link</Dropdown.Item> */}
                  </DropdownButton>
            </div>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          </div>
            </Fragment>
      </div>
    );
}
export default CaseDesc;