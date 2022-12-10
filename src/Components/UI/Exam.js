import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import background from "../../Images/HistoryBack.jpeg";
import img1 from "../../Images/images.jpeg";
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
import ThreeD from './resources/ThreeD';
import Investigation from './resources/Investigation';
import Mark from './resources/Mark'
import Xray  from './resources/Xray';
import Instructions from './resources/Instructions';
import img2 from "../../Images/invBck2.webp";
import img3 from "../../Images/newBack.jpg";
import Grid from '@mui/material/Grid';
import { useSelector} from "react-redux";
import giphy from '../../Images/giphy.gif';


const Exam = () => {
  const {userInfomation} = useSelector((state) => state.user)
  const navigate = useNavigate();
  const [imageClicked, setImageClicked] = useState({
    first: false,
    second: false,
    ground: false
  });
  const [exam_inv, setexam_inv] = useState({
    intra: false,
    radio: false,
    lab: false,
    mark: false,
    help: false
  });

  const onClickHandler2 = () => {
    console.log("button clicked")
    setexam_inv({
      intra: true,
    radio: false,
    lab: false,
    mark: false,
    xray : false,
    help: false
    })
  };

  const onClickHandler3 = () => {
    console.log("button clicked")
    setexam_inv({
      intra: false,
    radio: false,
    lab: false,
    mark: true,
    xray : false,
    help: false
    })
  };

  const onClickHandler4 = () => {
    console.log("button clicked")
    setexam_inv({
      intra: false,
    radio: false,
    lab: true,
    mark: false,
    xray : false,
    help: false
    })
  };
  const onClickHandler5 = () => {
    // console.log("button clicked")
    // setexam_inv({
    //   intra: false,
    // radio: false,
    // lab: false,
    // mark: false,
    // xray : true,
    // help: false
    // })
    navigate('/page3');
  };
  const handleClick = () => {
    navigate('/page5');  
  };
  const handleClick1 = () => {
    navigate('/page4');  
  };
  const onClickHandler6 = () => {
    console.log("button clicked")
    setexam_inv({
      intra: false,
    radio: false,
    lab: false,
    mark: false,
    xray : true,
    help: true
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
        backgroundImage: `url(${img2})`,
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
                    <button  className="back"  size="medium" onClick={handleClick1}>Back</button>
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
              textAlign: "center",
              left:'35%',
              top:'20%',
              fontSize:'50px',
              fontWeight : 'bold',
              color: 'darkblue',
              }}>Investigation

              </div>
              {/* <div className='instr'>
        {
          !exam_inv.mark && !exam_inv.lab && !exam_inv.intra && !exam_inv.xray ? <Instructions/> : null
        }
        </div> */}
      <div className="Examsect" >
        
        <ButtonGroup size="lg" className="mb-2">
            {/* <Button onClick={() => onClickHandler2()} className="ground">
            Intra-Oral-View
            </Button> */}
            {/* <Button onClick={() => onClickHandler3()} className="ground">
            Dental Chart
            </Button> */}
            <Button id='Radio' onClick={() => onClickHandler5()} className="ground">
            Radiographs
            </Button>
            <Button id='Invest' onClick={() => onClickHandler4()} className="ground">
            Laboratory Investigations
            </Button>
            <Button id='Help' onClick={() => onClickHandler6()} className="ground">
            Help
            </Button>
        </ButtonGroup>
        </div>
        <div className='contThr'>
        {exam_inv.intra ?
           <ThreeD /> :
           null
        }
        {exam_inv.lab ?
           <Investigation /> :
           null
        }
        {exam_inv.mark ?
           <Mark /> :
           null
        }
        {/* {exam_inv.xray ?
           <Xray/> :
           null
        } */}
        {exam_inv.help ?
           <Instructions/> :
           null
        }
        

      </div>
      <img src={giphy} className="invGif" />
      <div className="image">
        {imageClicked.ground && <img src={background} alt="ground" />}
        {imageClicked.first && <img src={img1} alt="first" />}
        {imageClicked.second && <img src={background} alt="second" />}
      </div>
    </div>
  );
};


export default Exam;