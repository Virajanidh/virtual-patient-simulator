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
import Soft from './Soft'
import Periodental from './Periodental'
import Mark from '../../resources/Mark'
import img3 from "../../../../Images/examBck.jpg"
import ThreeD from '../../resources/ThreeD';

const Intra = () => {
  const navigate = useNavigate();
  
  const [exam_inv, setexam_inv] = useState({
    perio: false,
    soft: false,
    mark: false,
    intraview : false
  });

  const onClickHandler1 = () => {
    console.log("button clicked")
    
    setexam_inv({
      perio: false,
      soft: false,
      mark: false,
      intraview : true
    })
    const btn1 = document.getElementById('perio');
    btn1.style.backgroundColor = 'brown';
    const btn2 = document.getElementById('soft');
    btn2.style.backgroundColor = 'brown';
    const btn3 = document.getElementById('plaq');
    btn3.style.backgroundColor =  'brown';
    const btn4 = document.getElementById('intrav');
    btn4.style.backgroundColor =  '#660000';
  };

  const onClickHandler2 = () => {
    console.log("button clicked")
    
    setexam_inv({
      perio: true,
      soft: false,
      mark: false,
      intraview : false
    })
    const btn1 = document.getElementById('perio');
    btn1.style.backgroundColor = '#660000';
    const btn2 = document.getElementById('soft');
    btn2.style.backgroundColor = 'brown';
    const btn3 = document.getElementById('plaq');
    btn3.style.backgroundColor =  'brown';
    const btn4 = document.getElementById('intrav');
    btn4.style.backgroundColor =  'brown';
  };


  const onClickHandler4 = () => {
    console.log("button clicked")
    setexam_inv({
      perio: false,
      soft: true,
      mark: false,
      intraview : false
    })
    const btn1 = document.getElementById('perio');
    btn1.style.backgroundColor = 'brown';
    const btn2 = document.getElementById('soft');
    btn2.style.backgroundColor = '#660000';
    const btn3 = document.getElementById('plaq');
    btn3.style.backgroundColor =  'brown';
    const btn4 = document.getElementById('intrav');
    btn4.style.backgroundColor =  'brown';
  };
  const onClickHandler5 = () => {
    console.log("button clicked")
    setexam_inv({
      perio: false,
      soft: false,
      mark: true,
      intraview : false
    })
    const btn1 = document.getElementById('perio');
    btn1.style.backgroundColor = 'brown';
    const btn2 = document.getElementById('soft');
    btn2.style.backgroundColor = 'brown';
    const btn3 = document.getElementById('plaq');
    btn3.style.backgroundColor =  '#660000';
    const btn4 = document.getElementById('intrav');
    btn4.style.backgroundColor =  'brown';
  };
  
  return (
    <div className ="app" style={{
        backgroundImage: `url(${img3})`,
        height:'200vh',
        marginTop:'0px',
        fontSize:'50px',
        backgroundSize: 'cover',
        }}>
             
      <div className="contTwo">
      <ButtonGroup size="lg" className="btnGrp">
            <Button onClick={() => onClickHandler1()} className="btnGrp" id='intrav'>
            Intra-Oral view
            </Button>
            <Button onClick={() => onClickHandler2()} className="btnGrp" id='perio'>
            Periodental Chart
            </Button>
            <Button onClick={() => onClickHandler4()} className="btnGrp" id='soft'>
            Soft Tissue Assesment
            </Button>
            <Button onClick={() => onClickHandler5()} className="btnGrp" id='plaq'>
            Plaque Chart
            </Button>
        </ButtonGroup>
        </div>
        <div className='contThr1'>
        {exam_inv.perio ?
          
           <Periodental /> :
           null
          
        }
        {exam_inv.soft ?
           <Soft/> :
           null
        }
        {exam_inv.mark ?
           <Mark/> :
           null
        }
        <div style={{font:"black"}}>
        {exam_inv.intraview ?
           <ThreeD/> :
           null
        }
        </div>
       
        {
          !exam_inv.perio && !exam_inv.soft && !exam_inv.mark && !exam_inv.intraview ? <ThreeD/> : null
        }

</div>
      
    </div>
  );
};


export default Intra;
  