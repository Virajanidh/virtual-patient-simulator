import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Dessert (100g serving)</StyledTableCell>
            <StyledTableCell align="right">Calories</StyledTableCell>
            <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import React, { useEffect,useState, Fragment } from 'react';
// import './Case.css'
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';
// import { useNavigate, Link} from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import Soft from './Soft'
// import Periodental from './Periodental'
// import Mark from '../../resources/Mark'
// import img3 from "../../../../Images/examBck.jpg"
// import ThreeD from '../../resources/ThreeD';
// import Grid from '@mui/material/Grid';

// const Intra = () => {
//   const navigate = useNavigate();
  
//   const [exam_inv, setexam_inv] = useState({
//     perio: false,
//     soft: false,
//     mark: false,
//     intraview : false
//   });

//   const onClickHandler1 = () => {
//     console.log("button clicked")
    
//     setexam_inv({
//       perio: false,
//       soft: false,
//       mark: false,
//       intraview : true
//     })
//     const btn1 = document.getElementById('perio');
//     btn1.style.backgroundColor = 'brown';
//     const btn2 = document.getElementById('soft');
//     btn2.style.backgroundColor = 'brown';
//     const btn3 = document.getElementById('plaq');
//     btn3.style.backgroundColor =  'brown';
//     const btn4 = document.getElementById('intrav');
//     btn4.style.backgroundColor =  '#660000';
//   };

//   const onClickHandler2 = () => {
//     console.log("button clicked")
    
//     setexam_inv({
//       perio: true,
//       soft: false,
//       mark: false,
//       intraview : false
//     })
//     const btn1 = document.getElementById('perio');
//     btn1.style.backgroundColor = '#660000';
//     const btn2 = document.getElementById('soft');
//     btn2.style.backgroundColor = 'brown';
//     const btn3 = document.getElementById('plaq');
//     btn3.style.backgroundColor =  'brown';
//     const btn4 = document.getElementById('intrav');
//     btn4.style.backgroundColor =  'brown';
//   };


//   const onClickHandler4 = () => {
//     console.log("button clicked")
//     setexam_inv({
//       perio: false,
//       soft: true,
//       mark: false,
//       intraview : false
//     })
//     const btn1 = document.getElementById('perio');
//     btn1.style.backgroundColor = 'brown';
//     const btn2 = document.getElementById('soft');
//     btn2.style.backgroundColor = '#660000';
//     const btn3 = document.getElementById('plaq');
//     btn3.style.backgroundColor =  'brown';
//     const btn4 = document.getElementById('intrav');
//     btn4.style.backgroundColor =  'brown';
//   };
//   const onClickHandler5 = () => {
//     console.log("button clicked")
//     setexam_inv({
//       perio: false,
//       soft: false,
//       mark: true,
//       intraview : false
//     })
//     const btn1 = document.getElementById('perio');
//     btn1.style.backgroundColor = 'brown';
//     const btn2 = document.getElementById('soft');
//     btn2.style.backgroundColor = 'brown';
//     const btn3 = document.getElementById('plaq');
//     btn3.style.backgroundColor =  '#660000';
//     const btn4 = document.getElementById('intrav');
//     btn4.style.backgroundColor =  'brown';
//   };
  
//   return (
//     <div className ="app" style={{
//         backgroundImage: `url(${img3})`,
//         height:'200vh',
//         marginTop:'0px',
//         fontSize:'50px',
//         backgroundSize: 'cover',
//         }}>
             
//         <div className='contThr1'>
//         <Grid container spacing={5}>
        
//           {exam_inv.perio ?
//             <Grid item xs={12}>
//             <Periodental /> </Grid> :
//             null
            
//           }
//           {exam_inv.soft ?
//             <Grid item xs={9}>
//             <ThreeD/><Grid item xs={2}>df</Grid></Grid> : 
//             null
//           }
//           {exam_inv.mark ?
//             <Mark/> :
//             null
//           }
          
          
//           {exam_inv.intraview ?
//           <Grid item xs={9}>
//             <ThreeD/></Grid>:
//             null
            
//           }
          
           
          
//           {
//             !exam_inv.perio && !exam_inv.soft && !exam_inv.mark && !exam_inv.intraview ? <Grid item xs={9}> <ThreeD/> </Grid>: null
//           }
          
          
//             <Grid item xs={3}>
//                 <ButtonGroup size="lg" className="btnGrp" vertical>
//                       <Button onClick={() => onClickHandler1()} className="btnGrp" id='intrav'>
//                       Intra-Oral view
//                       </Button>
//                       <Button onClick={() => onClickHandler2()} className="btnGrp" id='perio'>
//                       Periodental Screening
//                       </Button>
//                       <Button onClick={() => onClickHandler4()} className="btnGrp" id='soft'>
//                       Soft Tissue Assesment
//                       </Button>
//                       <Button onClick={() => onClickHandler5()} className="btnGrp" id='plaq'>
//                       Hard Tissue Assesment
//                       </Button>
//                       <Button onClick={() => onClickHandler5()} className="btnGrp" id='plaq'>
//                       Gingivel Assesment
//                       </Button>
//                   </ButtonGroup>
              
//             </Grid>
//           </Grid>
//         </div>
      
//     </div>
//   );
// };


// export default Intra;
  