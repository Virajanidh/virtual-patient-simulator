import './Case.css'
import React from 'react';
import helpGif from "../../../Images/help.gif"
import Help from './Help'
import Grid from '@mui/material/Grid';

function Instructions() {
    return (
      <div>
      <div className="title3">
        Choose the resources you want from the given tabs and use for the patient Examination
      </div>

     {/* <div className='contsix'>
              <div class="grid-container2">
                <div class="grid-item item1">
                <div >
              <div className='fontForlist2'>

                  <div className="alert alert-dismissible alert-secondary" >
                    It contains following sections and subsections
                    
                    <li>
                    In Extra-oral view it contains, how the patient look like
                    </li>
                    <li>
                    Under intra-oral , there are subsection for intra-oral view, Periodental chart, Plaque chart and soft tissue assesment that you can choose for examination
                    </li>
                    </div>
              </div>
              </div>
              <div class="grid-item item2">
                  
              <Help/>
                  
               </div>
              </div>
              
        </div> 
    </div> */}
    <div className="insgrid">
    <Grid container spacing={1}>
              <Grid Item xs={6}>
              <div className='fontForlist2'>

                <div className="alert alert-dismissible alert-secondary" >
                  It contains following sections and subsections
                  
                  <li>
                  In Extra-oral view it contains, how the patient look like
                  </li>
                  <li>
                  Under intra-oral , there are subsection for intra-oral view, Periodental chart, Plaque chart and soft tissue assesment that you can choose for examination
                  </li>
                  <li>
                  In intra-oral view use your mouse pointer to see 3D view.
                  </li>
                  </div>
                </div>
              </Grid>
              <Grid Item xs={5}>
              <Help/>
              </Grid>
              </Grid>
              </div>


    </div>

        
        
      
    )
  }
  
  export default Instructions;
  