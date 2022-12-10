import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React, { useEffect,useState, Fragment } from 'react';
import './Case.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Chip from '@mui/material/Chip';
import { useNavigate, Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Intra from './Intra/Intra'
import Extra from './Extra'
import img3 from "../../../Images/examBck.jpg"
import Grid from '@mui/material/Grid';
import { useSelector} from "react-redux";

const Invest = () => {
  const {userInfomation} = useSelector((state) => state.user)
  const navigate = useNavigate();
  const handleClick1 = () => {
    navigate('/page1');  
  };
  const handleClick2 = () => {
    navigate('/page2');  
  };
  const [exam_inv, setexam_inv] = useState({
    intra: false,
    extra: false
  });

  const onClickHandler2 = () => {
    console.log("button clicked")
    setexam_inv({
        
        intra: false,
    extra: true
    })
  };


  const onClickHandler4 = () => {
    console.log("button clicked")
    setexam_inv({
        intra: true,
        extra: false
    })
  };
  
  return (
    <div className ="app" style={{
        backgroundImage: `url(${img3})`,
        height:'200vh',
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

            <div>
                <Grid container spacing={20}>
                <Grid item xs={4}>
                  <div className='backbtn'>
                    <button className="back"  size="medium" onClick={handleClick1}>Back</button>
                  </div>
                  </Grid>
                  <Grid item xs={4}>
                  <div className="exmbtn">
                    <button className="back" size="medium" onClick={handleClick2}>Next</button>
                    </div>
                  </Grid>
                  
                </Grid>
            </div>
             <div style={{position:'absolute',
              left:'35%',
              top:'15%',
              fontSize:'50px',
              fontWeight : 'bold',
              color: '#000'
              }}>Examination

              </div>
      <div className="contOne">
      <ButtonGroup size="lg" className="mb-2">
            <Button onClick={() => onClickHandler2()} className="ground">
            Extra Oral
            </Button>
            <Button onClick={() => onClickHandler4()} className="ground">
            Intra Oral
            </Button>
        </ButtonGroup>

        </div>
        <div className='contThr'>
        {exam_inv.intra ?
           <Intra /> :
           null
        }
        </div>
        <div className='contFr'>
        {exam_inv.extra ?
           <Extra/> :
           null
        }
        
        {
          !exam_inv.intra && !exam_inv.extra  ? <Extra/> : null
        }

      </div>

    </div>
  );
};


export default Invest;