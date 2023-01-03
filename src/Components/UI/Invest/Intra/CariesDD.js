// import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
 import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';

// export default function CariesDD() {
//   const [age, setAge] = React.useState('');

//   const handleChange = (event) => {
//     setAge(event.target.value);
//   };

//   return (
//     <div>
//       <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
//         <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
//         <Select
//           labelId="demo-simple-select-standard-label"
//           id="demo-simple-select-standard"
//           value={age}
//           onChange={handleChange}
//           label="Age"
//         >
//           <MenuItem value="">
//             <em>None</em>
//           </MenuItem>
          
//           <MenuItem value={10}>Ten</MenuItem>
//           <MenuItem value={20}>Twenty</MenuItem>
//           <MenuItem value={30}>Thirty</MenuItem>
//         </Select>
//       </FormControl>
//     </div>
//   );
// }

import React from "react";

const options = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,26, 27, 28, 29, 30, 31, 32,];

class CariesDD extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        tooth: "1",
      };
  
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(e) {
      console.log("Tooth Selected!!");
      this.setState({ tooth: e.target.value });
    }
  
    render() {
      return (
        <div id="App">
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel className="dd1" id="demo-simple-select-standard-label">Tooth</InputLabel>
            <select className="dd1" value={this.state.tooth} onChange={this.handleChange} labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard">
              {options.map((option) => (
                <option value={option} className="dd">{option}</option>
              ))}
            </select>
            </FormControl>
        </div>
      );
    }
  }
  
  export default CariesDD;