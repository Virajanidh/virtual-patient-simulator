import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import background from "../../Images/DentistryBackgound.jpg";
import React, { useEffect,useState, Fragment } from 'react';
import { useSelector} from "react-redux";
import './Case.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Chip from '@mui/material/Chip';
import { useNavigate, Link} from 'react-router-dom';
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import NativeSelect from '@mui/material/NativeSelect'
import { makeStyles } from '@material-ui/core/styles'
import './SelectedQ'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { maxHeight } from '@mui/system';
import img1 from "../../Images/images.jpeg";
import img2 from "../../Images/Img2.jpg";
import { QuestionAnswer } from '@mui/icons-material';

const useStyles = makeStyles({
    label: {
      color: "black",
      "&.Mui-focused": {
        color: "black",
      },
    },
  });
  
  

function CaseDesc() {

  const handleSelect=(e)=>{
    console.log(e);
    setValue(e)
    
    if(e==="Question-1"){
      setAns("Ans1")
    }
    
  }
  const handleSection=(e)=>{
    setSection(e)
  }
    const {userInfomation} = useSelector((state) => state.user)
    const classes = useStyles();
    const navigate = useNavigate();
    const [value,setValue]=useState('');
    const [Section,setSection]=useState('');
    const [ans,setAns] = useState('');

    const handleClick = () => {
      navigate('/page2');
      
    };
   console.log(userInfomation.name)

   const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

    
    return (
      <div>
        <Fragment>
          <div className ="app" style={{
                backgroundImage: `url(${img2})`,
                height:'100vh',
                width: '100vw',
                marginTop:'0px',
                fontSize:'50px',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'repeat'
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
            <div style={{position:'absolute',
            left:'45%',
            top:'10%',
            fontSize:'70px',
            fontWeight : 'bold',
            color: '#FFF'
            }}>Case 1

            </div>
            <Grid container spacing={1}>
              <Grid Item xs={6}>
            <div className='cardDesc'>
              <Card sx={{ maxWidth: 500 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="100"
                    alt="Case Description"
                    image="./case1.jpeg"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Case Name
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      this is the description of the case
                    </Typography>
                  
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
            </Grid>
            <Grid Item xs={6}>
            <div className='qna'>
              <Card sx={{ maxWidth: 600 }}>
                <CardActionArea>
                  <CardMedia
                    height="500"
                    alt="Case Description"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Your Questions
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <h4>{value}</h4>
                      <h4>{Section}</h4>
                      <h4>{ans}</h4>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
            </Grid>
            </Grid>
            <div className="cardsd">
              <Card sx={{ maxWidth: 500, maxHeight: 1000}}>
                <CardActionArea>
                  <CardContent sx={{maxHeight: 1000}} >
                    <div className='ddown'>
                  <DropdownButton
            alignRight
            title="Select the Section"
            id="dropdown-menu-align-right"
            onSelect={handleSection}
            
              >
              <Dropdown.Item eventKey="History of the presenting complaint">History of the presenting complaint</Dropdown.Item>
              <Dropdown.Item eventKey="Medical history">Medical history</Dropdown.Item>
              <Dropdown.Item eventKey="Habits">Habits</Dropdown.Item>
              <Dropdown.Item eventKey="Plaque control">Plaque control</Dropdown.Item>
              <Dropdown.Item eventKey="Previous dental treatments">Previous dental treatments</Dropdown.Item>
              <Dropdown.Item eventKey="Social history">Social history</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="some link">some link</Dropdown.Item>
      </DropdownButton>
               
            </div>
                    <div>
                  <DropdownButton
            alignRight
            title="Select the question"
            id="dropdown-menu-align-right"
            onSelect={handleSelect}
              >
              <Dropdown.Item onClick={handleSelect} eventKey="Question-1">Question-1</Dropdown.Item>
              <Dropdown.Item onClick={handleSelect} eventKey="Question-2">Question-2</Dropdown.Item>
              <Dropdown.Item eventKey="Question-3">Question 3</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="some link">some link</Dropdown.Item>
      </DropdownButton>
            </div>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
            <Typography className="NextChip">
              <Chip className="chips" label= 'Examination and Investigation' color="primary" size="medium" onClick={handleClick}/>
            </Typography>
          </div>
            </Fragment>
      </div>
    );
}
export default CaseDesc;