import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React, { useEffect,useState, Fragment } from 'react';
import './Case.css'
import { useNavigate, Link} from 'react-router-dom';
import ButtonGroup from '@mui/material/ButtonGroup';
import Intra from './Intra/Intra'
import Extra from './Extra'
import img3 from "../../../Images/examBck.jpg"
import Instructions from './Instructions';
import Grid from '@mui/material/Grid';
import { useSelector} from "react-redux";
import Navbar from '../../Navbar';

const Invest = () => {
  const {userInfomation} = useSelector((state) => state.user)
  const navigate = useNavigate();
  const handleClick1 = () => {
    navigate('/historyTaking');  
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
      extra: true,
      help: false
    })
    const btn1 = document.getElementById('help');
    btn1.style.backgroundColor = 'rgb(9, 105, 239)';
    const btn2 = document.getElementById('intra');
    btn2.style.backgroundColor = 'rgb(9, 105, 239)';
    const btn3 = document.getElementById('extra');
    btn3.style.backgroundColor =  'rgb(95,129,182)';
  };


  const onClickHandler4 = () => {
    console.log("button clicked")
    setexam_inv({
        intra: true,
        extra: false,
        help: false
    })
    const btn1 = document.getElementById('help');
    btn1.style.backgroundColor = 'rgb(9, 105, 239)';
    const btn2 = document.getElementById('intra');
    btn2.style.backgroundColor = 'rgb(95,129,182)';
    const btn3 = document.getElementById('extra');
    btn3.style.backgroundColor =  'rgb(9, 105, 239)';
  };

  const onClickHandler5= () => {
    setexam_inv({
        intra: false,
        extra: false,
        help: true
    })
    const btn1 = document.getElementById('help');
    btn1.style.backgroundColor = 'rgb(95,129,182)';
    const btn2 = document.getElementById('intra');
    btn2.style.backgroundColor = 'rgb(9, 105, 239)';
    const btn3 = document.getElementById('extra');
    btn3.style.backgroundColor =  'rgb(9, 105, 239)';


  };

  if(exam_inv.help && !exam_inv.intra && !exam_inv.extra){
    const btn1 = document.getElementById('help');
    btn1.style.backgroundColor = 'rgb(95,129,182)';
  }

  
  return (
    <div className ="app" style={{
        backgroundImage: `url(${img3})`,
        height:'400vh',
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
        <ButtonGroup size="large" aria-label="large button group">
            <button id= 'extra' button type="button" class="btn btn-primary" onClick={() => onClickHandler2()} >
            Extra Oral
            </button>
            <button id= 'intra' type="button" class="btn btn-primary" onClick={() => onClickHandler4()}>
            Intra Oral
            </button>
            <button id= 'help' onClick={() => onClickHandler5()}  button type="button" class="btn btn-primary">
            Guide
            </button>
        </ButtonGroup>
        
        </div> 
     
        {/* <div className='contsix'>
              <div class="grid-container">
                <div class="grid-item item1">
                  {
                      !exam_inv.intra && !exam_inv.extra && !exam_inv.help || exam_inv.extra ? <Extra/> : null
                  }           
              </div>
              <div class="grid-item item2">
                  {
                      !exam_inv.intra && !exam_inv.extra || exam_inv.extra  ? <ToothGIF/> : null
                  }
               </div>
              </div>
              
        </div>  */}

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
        <div className='setExtra2'>
        {exam_inv.help ?
           <Instructions/> :
           null
        }
        </div>
        <div className='setExtra'>
        {
          !exam_inv.intra && !exam_inv.extra && !exam_inv.help ? <Instructions/> : null
        }
        </div>

      </div>

    </div>
  );
};


export default Invest;