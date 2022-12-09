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
  };

  const onClickHandler2 = () => {
    console.log("button clicked")
    
    setexam_inv({
      perio: true,
      soft: false,
      mark: false,
      intraview : false
    })
  };


  const onClickHandler4 = () => {
    console.log("button clicked")
    setexam_inv({
      perio: false,
      soft: true,
      mark: false,
      intraview : false
    })
  };
  const onClickHandler5 = () => {
    console.log("button clicked")
    setexam_inv({
      perio: false,
      soft: false,
      mark: true,
      intraview : false
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
             
      <div className="contTwo">
      <ButtonGroup size="lg" className="btnGrp">
            <Button onClick={() => onClickHandler1()} className="btnGrp">
            Intra-Oral view
            </Button>
            <Button onClick={() => onClickHandler2()} className="btnGrp">
            Periodental Chart
            </Button>
            <Button onClick={() => onClickHandler4()} className="btnGrp">
            Soft Tissue Assesment
            </Button>
            <Button onClick={() => onClickHandler5()} className="btnGrp">
            Plaque Chart
            </Button>
        </ButtonGroup>
        </div>
        <div className='contThr'>
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
        {exam_inv.intraview ?
           <ThreeD/> :
           null
        }
       
        {
          !exam_inv.perio && !exam_inv.soft && !exam_inv.mark && !exam_inv.intraview ? <ThreeD/> : null
        }

</div>
      
    </div>
  );
};


export default Intra;
  