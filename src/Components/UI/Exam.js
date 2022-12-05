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
            <Button onClick={() => onClickHandler("ground")} className="ground">
            Ground Floor
            </Button>
            <Button onClick={() => onClickHandler("first")} className="ground">
            First Floor
            </Button>
            <Button onClick={() => onClickHandler("second")} className="ground">
            Second Floor
            </Button>
        </ButtonGroup>
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