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
import Navbar from '../../Navbar';
import CBCT from './CBCT';

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
    const btn1 = document.getElementById('OPG');
    btn1.style.backgroundColor = '#999900';
    const btn2 = document.getElementById('IOPA');
    btn2.style.backgroundColor = '#e6e600';
    const btn3 = document.getElementById('Bitewing');
    btn3.style.backgroundColor =  '#e6e600';
    const btn4 = document.getElementById('Other');
    btn4.style.backgroundColor =  '#e6e600';
    const btn5 = document.getElementById('cbct');
    btn5.style.backgroundColor =  '#e6e600';
  };


  const onClickHandler4 = () => {
    console.log("button clicked")
    setexam_inv({
        iopg: true,
        opg: false,
        bitewing: false,
        other: false,
        cbct:false
    })
    const btn1 = document.getElementById('OPG');
    btn1.style.backgroundColor = '#e6e600';
    const btn2 = document.getElementById('IOPA');
    btn2.style.backgroundColor = '#999900';
    const btn3 = document.getElementById('Bitewing');
    btn3.style.backgroundColor =  '#e6e600';
    const btn4 = document.getElementById('Other');
    btn4.style.backgroundColor =  '#e6e600';
    const btn5 = document.getElementById('cbct');
    btn5.style.backgroundColor =  '#e6e600';
  };
  const onClickHandler5 = () => {
    setexam_inv({
        iopg: false,
        opg: false,
        bitewing: true,
        other: false,
        cbct:false
    })
    const btn1 = document.getElementById('OPG');
    btn1.style.backgroundColor = '#e6e600';
    const btn2 = document.getElementById('IOPA');
    btn2.style.backgroundColor = '#e6e600';
    const btn3 = document.getElementById('Bitewing');
    btn3.style.backgroundColor =  '#999900';
    const btn4 = document.getElementById('Other');
    btn4.style.backgroundColor =  '#e6e600';
    const btn5 = document.getElementById('cbct');
    btn5.style.backgroundColor =  '#e6e600';
  };

  const onClickHandler6 = () => {
    console.log("button clicked")
    setexam_inv({
        iopg: false,
        opg: false,
        bitewing: false,
        other: true,
        cbct:false
    })
    const btn1 = document.getElementById('OPG');
    btn1.style.backgroundColor = '#e6e600';
    const btn2 = document.getElementById('IOPA');
    btn2.style.backgroundColor = '#e6e600';
    const btn3 = document.getElementById('Bitewing');
    btn3.style.backgroundColor =  '#e6e600';
    const btn4 = document.getElementById('Other');
    btn4.style.backgroundColor =  '#999900';
    const btn5 = document.getElementById('cbct');
    btn5.style.backgroundColor =  '#e6e600';

  };
  const onClickHandler7 = () => {
    console.log("button clicked")
    setexam_inv({
        iopg: false,
        opg: false,
        bitewing: false,
        other:false,
        cbct:true
    })
    const btn1 = document.getElementById('OPG');
    btn1.style.backgroundColor = '#e6e600';
    const btn2 = document.getElementById('IOPA');
    btn2.style.backgroundColor = '#e6e600';
    const btn3 = document.getElementById('Bitewing');
    btn3.style.backgroundColor =  '#e6e600';
    const btn4 = document.getElementById('Other');
    btn4.style.backgroundColor =  '#e6e600';
    const btn5 = document.getElementById('cbct');
    btn5.style.backgroundColor =  '#999900';

  };

  const onClickHandler = (order) => {
    const resetImages = {
      first: false,
      second: false,
      ground: false,
      
          
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
<div className='navText'>
              <Navbar/>
              </div>

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
              top:'20%',
              fontSize:'50px',
              fontWeight : 'bold',
              color: '#FF5'
              }}>Radiographs

              </div>


      <div className="contOnes">
      <ButtonGroup size="lg" className="mb-2">
            <Button style={{ border: " 2px  solid gray", background:"#e6e600", color:'black' }} 
            id='OPG' onClick={() => onClickHandler2()} className="ground">
            OPG
            </Button>
            <Button style={{ border: " 2px  solid gray",background:"#e6e600" , color:'black'}} 
            id='IOPA' onClick={() => onClickHandler4()} className="ground">
            IOPA
            </Button>
            <Button style={{ border: " 2px  solid gray",background:"#e6e600", color:'black' }} 
            id='Bitewing' onClick={() => onClickHandler5()} className="ground">
            Bitewing
            </Button>
            <Button style={{ border: " 2px  solid gray",background:"#e6e600", color:'black' }} 
            id='cbct' onClick={() => onClickHandler7()} className="ground">
            CBCT
            </Button>
            <Button style={{ border: " 2px  solid gray", background:"#e6e600", color:'black' }} 
            id='Other' onClick={() => onClickHandler6()} className="ground">
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
         {exam_inv.cbct ?
           <CBCT/> :
           null
        }
        
        {
          !exam_inv.iopg && !exam_inv.opg && !exam_inv.bitewing && !exam_inv.other && !exam_inv.cbct ? <IOPG/> : null
        }

      </div>
    </div>
  );
};


export default Radio;