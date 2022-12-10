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
import IOPG from "./IOPG"
import Bitewing from "./Bitewing"
import OPG from "./OPG"
import Other from "./Other"
import img3 from "../../../Images/radioBck.jpg"
import Grid from '@mui/material/Grid';
import { useSelector} from "react-redux";

const Radio = () => {
  const {userInfomation} = useSelector((state) => state.user)
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/page2');  
  };
  const [imageClicked, setImageClicked] = useState({
    first: false,
    second: false,
    ground: false
  });
  const [exam_inv, setexam_inv] = useState({
    iopg: false,
    opg: false,
    bitewing: false,
    other: false
  });

  const onClickHandler2 = () => {
    console.log("button clicked")
    setexam_inv({
        iopg: false,
        opg: true,
        bitewing: false,
        other: false
    })
  };


  const onClickHandler4 = () => {
    console.log("button clicked")
    setexam_inv({
        iopg: true,
        opg: false,
        bitewing: false,
        other: false
    })
  };
  const onClickHandler5 = () => {
    setexam_inv({
        iopg: false,
        opg: false,
        bitewing: true,
        other: false
    })
  };

  const onClickHandler6 = () => {
    console.log("button clicked")
    setexam_inv({
        iopg: false,
        opg: false,
        bitewing: false,
        other: true
    })
  };

  const onClickHandler = (order) => {
    const resetImages = {
      first: false,
      second: false,
      ground: false
    };
    setImageClicked({
      ...resetImages,
      [order]: true
    });
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
                    <button className="back1" size="medium" onClick={handleClick}>Back</button>
                  </div>
                  </Grid>
                  
                </Grid>
            </div>
             <div style={{position:'absolute',
              left:'40%',
              top:'25%',
              fontSize:'50px',
              fontWeight : 'bold',
              color: '#FF5'
              }}>Radiographs

              </div>


      <div className="contOnes">
      <ButtonGroup size="lg" className="mb-2">
            <Button id='OPG' onClick={() => onClickHandler2()} className="ground">
            OPG
            </Button>
            {/* <Button onClick={() => onClickHandler3()} className="ground">
            Dental Chart
            </Button> */}
            <Button id='IOPA' onClick={() => onClickHandler4()} className="ground">
            IOPA
            </Button>
            <Button id='Bitewing' onClick={() => onClickHandler5()} className="ground">
            Bitewing
            </Button>
            <Button id='Other' onClick={() => onClickHandler6()} className="ground">
            Other
            </Button>
        </ButtonGroup>
        </div>
        <div className='contThr'>
        {exam_inv.opg ?
           <OPG /> :
           null
        }
        {exam_inv.iopg ?
           <IOPG /> :
           null
        }
        {exam_inv.bitewing?
           <Bitewing /> :
           null
        }
        {exam_inv.other ?
           <Other/> :
           null
        }
        
        {
          !exam_inv.iopg && !exam_inv.opg && !exam_inv.bitewing && !exam_inv.other ? <IOPG/> : null
        }

      </div>
    </div>
  );
};


export default Radio;