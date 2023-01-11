import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React, { useEffect,useState, Fragment } from 'react';
import './Case.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate, Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Soft from './Soft'
import Periodental from './Periodental'
import Hard from './Hard'
import img3 from "../../../../Images/examBck.jpg"
import ThreeD from '../../resources/ThreeD';
import Grid from '@mui/material/Grid';

const Intra = () => {
  const navigate = useNavigate();
  
  const [exam_inv, setexam_inv] = useState({
    perio: false,
    soft: false,
    mark: false,
    intraview : false,
    ging: false
  });

  const onClickHandler1 = () => {
    console.log("button clicked")
    
    setexam_inv({
      perio: false,
      soft: false,
      mark: false,
      intraview : true,
      ging: false
    })
    const btn1 = document.getElementById('perio');
    btn1.style.backgroundColor = 'brown';
    const btn2 = document.getElementById('soft');
    btn2.style.backgroundColor = 'brown';
    const btn3 = document.getElementById('plaq');
    btn3.style.backgroundColor =  'brown';
    const btn4 = document.getElementById('intrav');
    btn4.style.backgroundColor =  '#660000';
    const btn5 = document.getElementById('ging');
    btn5.style.backgroundColor =  'brown';
  };

  const onClickHandler2 = () => {
    console.log("button clicked")
    
    setexam_inv({
      perio: true,
      soft: false,
      mark: false,
      intraview : false,
      ging: false
    })
    const btn1 = document.getElementById('perio');
    btn1.style.backgroundColor = '#660000';
    const btn2 = document.getElementById('soft');
    btn2.style.backgroundColor = 'brown';
    const btn3 = document.getElementById('plaq');
    btn3.style.backgroundColor =  'brown';
    const btn4 = document.getElementById('intrav');
    btn4.style.backgroundColor =  'brown';
    const btn5 = document.getElementById('ging');
    btn5.style.backgroundColor =  'brown';
  };


  const onClickHandler4 = () => {
    console.log("button clicked")
    setexam_inv({
      perio: false,
      soft: true,
      mark: false,
      intraview : false,
      ging: false
    })
    const btn1 = document.getElementById('perio');
    btn1.style.backgroundColor = 'brown';
    const btn2 = document.getElementById('soft');
    btn2.style.backgroundColor = '#660000';
    const btn3 = document.getElementById('plaq');
    btn3.style.backgroundColor =  'brown';
    const btn4 = document.getElementById('intrav');
    btn4.style.backgroundColor =  'brown';
    const btn5 = document.getElementById('ging');
    btn5.style.backgroundColor =  'brown';
  };
  const onClickHandler5 = () => {
    console.log("button clicked")
    setexam_inv({
      perio: false,
      soft: false,
      mark: true,
      intraview : false,
      ging: false
    })
    const btn1 = document.getElementById('perio');
    btn1.style.backgroundColor = 'brown';
    const btn2 = document.getElementById('soft');
    btn2.style.backgroundColor = 'brown';
    const btn3 = document.getElementById('plaq');
    btn3.style.backgroundColor =  '#660000';
    const btn4 = document.getElementById('intrav');
    btn4.style.backgroundColor =  'brown';
    const btn5 = document.getElementById('ging');
    btn5.style.backgroundColor =  'brown';
  };
  const onClickHandler6 = () => {
    console.log("button clicked")
    setexam_inv({
      perio: false,
      soft: false,
      mark: false,
      intraview : false,
      ging: true
    })
    const btn1 = document.getElementById('perio');
    btn1.style.backgroundColor = 'brown';
    const btn2 = document.getElementById('soft');
    btn2.style.backgroundColor = 'brown';
    const btn3 = document.getElementById('plaq');
    btn3.style.backgroundColor =  'brown';
    const btn4 = document.getElementById('intrav');
    btn4.style.backgroundColor =  'brown';
    const btn5 = document.getElementById('intrav');
    btn5.style.backgroundColor =  '#660000';
  };
  
  return (
    <div className ="app" style={{
        backgroundImage: `url(${img3})`,
        height:'200vh',
        marginTop:'0px',
        fontSize:'50px',
        backgroundSize: 'cover',
        }}>
             
        <div className='contThr1'>
          {exam_inv.perio ?
            <Grid item xs={12}>
            <Periodental /> </Grid> :
            null
          }
          {exam_inv.soft ?
          <Grid container spacing={10}>
            <Grid item xs={9}>
            <ThreeD/></Grid>
            <Grid item xs={3}>
                <ButtonGroup size="lg" className="btnGrp" vertical>
                      <Button onClick={() => onClickHandler1()} className="btnGrp" id='intrav'>
                      Intra-Oral view
                      </Button>
                      <Button onClick={() => onClickHandler2()} className="btnGrp" id='perio'>
                      Periodental Screening
                      </Button>
                      <Button onClick={() => onClickHandler4()} className="btnGrp" id='soft'>
                      Soft Tissue Assesment
                      </Button>
                      <Button onClick={() => onClickHandler5()} className="btnGrp" id='plaq'>
                      Hard Tissue Assesment
                      </Button>
                      <Button onClick={() => onClickHandler6()} className="btnGrp" id='ging'>
                      Gingivel Assesment
                      </Button>
                  </ButtonGroup>
                  <div className='softcard'> 
                    <Card>
                      <div className='quest'>
                        Oral Mucosa
                      </div>
                      <div className='ans'>
                        Normal in color and texture
                      </div>
                    </Card>
                  </div>
            </Grid>
          </Grid>: 
            null
          }
          
          {exam_inv.mark ?
            <Hard/> :
            null
          }
          
          {exam_inv.intraview ?
          <Grid item xs={9}>
            <ThreeD/></Grid>:
            null
            
          }
          
          {exam_inv.ging ?
          <Grid container spacing={5}>
            <Grid item xs={9}>
            <ThreeD/></Grid>
            <Grid item xs={3}>
                <ButtonGroup size="lg" className="btnGrp" vertical>
                      <Button onClick={() => onClickHandler1()} className="btnGrp" id='intrav'>
                      Intra-Oral view
                      </Button>
                      <Button onClick={() => onClickHandler2()} className="btnGrp" id='perio'>
                      Periodental Screening
                      </Button>
                      <Button onClick={() => onClickHandler4()} className="btnGrp" id='soft'>
                      Soft Tissue Assesment
                      </Button>
                      <Button onClick={() => onClickHandler5()} className="btnGrp" id='plaq'>
                      Hard Tissue Assesment
                      </Button>
                      <Button onClick={() => onClickHandler6()} className="btnGrp" id='ging'>
                      Gingivel Assesment
                      </Button>
                  </ButtonGroup>
                  <div className='softcard'> 
                    <Card>
                      <div className='quest'>
                        Color
                      </div>
                      <div className='ans'>
                        Pinkish red
                      </div>
                      <div className='quest'>
                        Inflammatory status
                      </div>
                      <div className='ans'>
                      Mild & marginal  inflammation
                      </div>

                    </Card>
                  </div>
            </Grid>
          </Grid>: 
            null
          }
          
          {
            !exam_inv.perio && !exam_inv.soft && !exam_inv.mark && !exam_inv.intraview && !exam_inv.ging ? <Grid container spacing={5}>
            <Grid item xs={9}>
            <ThreeD/></Grid>
            <Grid item xs={3}>
                <ButtonGroup size="lg" className="btnGrp" vertical>
                      <Button onClick={() => onClickHandler1()} className="btnGrp" id='intrav'>
                      Intra-Oral view
                      </Button>
                      <Button onClick={() => onClickHandler2()} className="btnGrp" id='perio'>
                      Periodental Screening
                      </Button>
                      <Button onClick={() => onClickHandler4()} className="btnGrp" id='soft'>
                      Soft Tissue Assesment
                      </Button>
                      <Button onClick={() => onClickHandler5()} className="btnGrp" id='plaq'>
                      Hard Tissue Assesment
                      </Button>
                      <Button onClick={() => onClickHandler6()} className="btnGrp" id='ging'>
                      Gingivel Assesment
                      </Button>
                  </ButtonGroup>
            </Grid>
          </Grid>: null
          }
        </div>
      
    </div>
  );
};


export default Intra;
  