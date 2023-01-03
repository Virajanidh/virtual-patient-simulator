import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { useSelector} from "react-redux";
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { green, red } from '@mui/material/colors';
import CariesDD from './CariesDD'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
function Hard() {

  const {selectedCaseDetails} = useSelector((state) => state.caseSelected)
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (
      <div>
        <div style={{position:'absolute',
              left:'35%',
              top:'50%',
              fontSize:'40px',
              fontWeight : 'bold',
              color: '#198A1E'
              }}>Hard Tissue Assesment</div>
        <div style={{position:'absolute',
              left:'5%',
              top:'60%',
              fontSize:'30px',
              fontWeight : 'bold',
              color: '#000'
              }}>1. Tool selection</div>
        <div style={{position:'absolute',
              left:'5%',
              top:'70%',
              fontSize:'20px',
              fontWeight : '10px',
              color: '#000'
              }}>1. Select the most suitable tools. Wrong selections will carry negative marks.</div>
        <div className="cardDesc1">
          <Grid container spacing={5}>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 300 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="250"
                    alt="Tool1"
                    image={selectedCaseDetails.intra_ToolA}
                  />
                  {/* <CardContent>
                    <div className='case'>
                          Case {selectedCaseDetails.name}
                          </div>
                          <div className='casedes'>
                        {selectedCaseDetails.description}
                    </div>
                        
                  </CardContent> */}
                </CardActionArea>
              </Card>
              <FormControlLabel
                label="Tool_1"
                control={
              <Checkbox
                {...label}
                sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } ,color:"red",
                '&.Mui-checked': {
                  color: red[700],color: red[600],
                },
              }}
              />}/>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 300 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="250"
                    alt="Tool2"
                    image={selectedCaseDetails.intra_ToolB}
                  />
                  {/* <CardContent>
                    <div className='case'>
                          Case {selectedCaseDetails.name}
                          </div>
                          <div className='casedes'>
                        {selectedCaseDetails.description}
                    </div>
                        
                  </CardContent> */}
                </CardActionArea>
              </Card>
              <FormControlLabel
                label="Tool_2"
                control={
              <Checkbox
                {...label}
                sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } ,color:"red",
                '&.Mui-checked': {
                  color: red[700],color: red[600],
                },
              }}
              />}/>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 300 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="250"
                    alt="Tool3"
                    image={selectedCaseDetails.intra_ToolC}
                  />
                  {/* <CardContent>
                    <div className='case'>
                          Case {selectedCaseDetails.name}
                          </div>
                          <div className='casedes'>
                        {selectedCaseDetails.description}
                    </div>
                        
                  </CardContent> */}
                </CardActionArea>
              </Card>
              <FormControlLabel
                label="Tool_3"
                control={
              <Checkbox
                {...label}
                sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } ,color:"red",
                '&.Mui-checked': {
                  color: red[700],color: red[600],
                },
              }}
              />}/>
            </Grid>
            </Grid>
            <div className="tool">
            <Grid container spacing={5}>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 300 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="250"
                    alt="Tool4"
                    image={selectedCaseDetails.intra_ToolD}
                  />
                  {/* <CardContent>
                    <div className='case'>
                          Case {selectedCaseDetails.name}
                          </div>
                          <div className='casedes'>
                        {selectedCaseDetails.description}
                    </div>
                        
                  </CardContent> */}
                </CardActionArea>
              </Card>
              <FormControlLabel
                label="Tool_4"
                control={
              <Checkbox
                {...label}
                sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } ,color:"red",
                '&.Mui-checked': {
                  color: red[700],color: red[600],
                },
              }}
              />}/>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 300 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="250"
                    alt="Tool5"
                    image={selectedCaseDetails.intra_ToolE}
                  />
                  {/* <CardContent>
                    <div className='case'>
                          Case {selectedCaseDetails.name}
                          </div>
                          <div className='casedes'>
                        {selectedCaseDetails.description}
                    </div>
                        
                  </CardContent> */}
                </CardActionArea>
              </Card>
              <FormControlLabel
                label="Tool_5"
                control={
              <Checkbox
                {...label}
                sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } ,color:"red",
                '&.Mui-checked': {
                  color: red[700],color: red[600],
                },
              }}
              />}/>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 300 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="250"
                    alt="Tool6"
                    image={selectedCaseDetails.intra_ToolF}
                  />
                  {/* <CardContent>
                    <div className='case'>
                          Case {selectedCaseDetails.name}
                          </div>
                          <div className='casedes'>
                        {selectedCaseDetails.description}
                    </div>
                        
                  </CardContent> */}
                </CardActionArea>
              </Card>
              <FormControlLabel
                label="Tool_6"
                control={
              <Checkbox
                {...label}
                sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } ,color:"red",
                '&.Mui-checked': {
                  color: red[700],color: red[600],
                },
              }}
              />}/>
            </Grid>
          </Grid>
          </div>
        </div>
        <div className='chart'>2. Dental Chart</div>
        <div className='chart'>3. Caries status</div>
        <div style={{position:'absolute',
              left:'6%',
              top:'215%',
              fontSize:'20px',
              fontWeight : '10px',
              color: '#000'
              }}>Are there any Caries?</div>
        <div className='caries'><CariesDD/></div>
        <div className='cariesCard'>
        <Card sx={{ maxWidth: 500 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    paddingLeft="50px"
                  />
                  {/* <CardContent>
                    <div className='case'>
                          Case {selectedCaseDetails.name}
                          </div>
                          <div className='casedes'>
                        {selectedCaseDetails.description}
                    </div>
                        
                  </CardContent> */}
                </CardActionArea>
              </Card></div>
        <div className='chart'>4. Restorations</div>
        <div className='caries'><CariesDD/></div>
        <div className='cariesCard'>
        <Card sx={{ maxWidth: 500 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    paddingLeft="50px"
                  />
                  {/* <CardContent>
                    <div className='case'>
                          Case {selectedCaseDetails.name}
                          </div>
                          <div className='casedes'>
                        {selectedCaseDetails.description}
                    </div>
                        
                  </CardContent> */}
                </CardActionArea>
              </Card></div>
              <div className='chart'>4. Answer the Questions</div>
              <div className='mainqs'>What is the plaque score?</div>
              <div className='qs'>
              <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: '20ch' },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField id="standard-basic" label="Your answer" variant="standard" />
              </Box></div>
              <div className='mainqs'>What is the bleeding score?</div>
              <div className='qs'>
              <Box
                  component="form"
                  sx={{
                    '& > :not(style)': { m: 1, width: '20ch' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField id="standard-basic" label="Your answer" variant="standard" />
                </Box></div>
              </div>
     
    );
  }
  
  export default Hard;
  