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

{/*
const Exam = () => {
    const [imageClicked, setImageClicked] = useState({
        first: false,
        second: false,
        ground: false
      });

      const handleClick = (order) => {
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
    return(
        <div className ="app" style={{
            backgroundImage: `url(${background})`,
            height:'100vh',
            marginTop:'0px',
            fontSize:'50px',
            backgroundSize: 'cover',
            }}>
            <div className="justify-content-end">
                <ButtonGroup size="lg" className="mb-2">
                    <button onClick={handleClick} className="ground">Radiographs</button>
                    <Button>Lab Reports</Button>
                    <Button>Tests</Button>
                </ButtonGroup>
                <div className="image">
                    {imageClicked.ground && <img src={background} alt="ground" />}
                    
                </div>
            </div> 
        </div>
    )
}*/}




const Exam = () => {
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
    console.log("button clicked")
    setexam_inv({
      intra: false,
    radio: false,
    lab: false,
    mark: false,
    xray : true,
    help: false
    })
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
        backgroundImage: `url(${background})`,
        height:'100vh',
        marginTop:'0px',
        fontSize:'50px',
        backgroundSize: 'cover',
        }}>
      <div className="Ccontainer">
      <ButtonGroup size="lg" className="mb-2">
            <Button onClick={() => onClickHandler2()} className="ground">
            Intra-Oral-View
            </Button>
            <Button onClick={() => onClickHandler3()} className="ground">
            Mark Sheet
            </Button>
            <Button onClick={() => onClickHandler5()} className="ground">
            Radiographs
            </Button>
            <Button onClick={() => onClickHandler4()} className="ground">
            Laboratary Investigations
            </Button>
            <Button onClick={() => onClickHandler6()} className="ground">
            Help
            </Button>
        </ButtonGroup>
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
        {exam_inv.xray ?
           <Xray/> :
           null
        }
        {exam_inv.help ?
           <Instructions/> :
           null
        }
        {
          !exam_inv.mark && !exam_inv.lab && !exam_inv.intra && !exam_inv.xray ? <Instructions/> : null
        }

      </div>
      <div className="image">
        {imageClicked.ground && <img src={background} alt="ground" />}
        {imageClicked.first && <img src={img1} alt="first" />}
        {imageClicked.second && <img src={background} alt="second" />}
      </div>
    </div>
  );
};


export default Exam;