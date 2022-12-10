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
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import firebase from '../../Config/Config'
import img1 from "../../Images/case1.png";
import img2 from "../../Images/case2.jpg";
import img3 from "../../Images/newBack.jpg";

function CaseSelect() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
    const {userInfomation} = useSelector((state) => state.user)

    const navigate = useNavigate();
    const [cases,setCase]=useState([])

    const handleClick = () => {
      navigate('/page1');
      
    };

    useEffect(() => {
      console.log("hii")
      fetchCase();
    }, []);
   
  
    const fetchCase=async()=>{
      console.log("hii")
      const snapshot = await firebase.firestore().collection('Cases').get()
      const qArray= snapshot.docs.map(doc => doc.data())
      console.log(qArray);
      if(cases.length<qArray.length){
      setCase(cases.concat(qArray));
      }
      console.log(cases);
    }
   console.log(userInfomation.name)
    return (
      <div>
        <Fragment>
          <div className ="app" style={{
              backgroundImage: `url(${img3})`,
              height:'120vh',
              marginTop:'0px',
              fontSize:'50px',
              backgroundSize: 'cover',
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
              <div style={{position:'absolute',
              left:'35%',
              top:'20%',
              fontSize:'50px',
              fontWeight : 'bold',
              color: '#FFF'
              }}>Case Selection 

              </div>
              <Grid container spacing={1}>
                <Grid Item xs={6}>
                  <div className='cards'>
                    <Card sx={{ maxWidth: 445 }}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="200"
                          alt="Case 1"
                          image={img1}
                        />
                        <CardContent>
                        <div className='case'>
                    Case 001
                    </div>
                    <div className='casedes'>
                    A 38-year-old patient presents with a painful tooth on the right side upper arch.
                    </div>
                          <Typography className="caseBtn">
                              <Chip label= 'Select Case' color="primary" size="medium" onClick={handleClick}/>
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </div>
              </Grid>
              <Grid Item xs={6}>
                  <div className='cards'>
                    <Card sx={{ maxWidth: 445 }}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="200"
                          alt="Case 1"
                          image={img2}
                        /> 
                        <CardContent>
                        <div className='case'>
                    Case 002
                    </div>
                    <div className='casedes'>
                    A 38-year-old patient presents with a painful tooth on the right side upper arch.
                    </div>
                          <Typography className="caseBtn">
                              <Chip label= 'Select Case' color="primary" size="medium" onClick={handleClick}/>
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </div>
                </Grid>
              </Grid>
          </div>

            </Fragment>
        </div>
    );
}

export default CaseSelect;