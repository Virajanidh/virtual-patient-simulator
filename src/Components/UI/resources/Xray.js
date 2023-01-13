import './styles.css'
import { Table } from 'react-bootstrap';
import { Card } from '@mui/material';

function Xray() {

  
    return (
      <div>
        <div className="HAtopic1">Fasting blood sugar levels (Taken last month)</div>
        <div className="HAsec1">
          <Card sx={{ maxWidth: 1000, maxHeight: 500}}>
            <div className='HAtable1'>
              <Table striped bordered hover>
                <tbody>
                  <tr>
                    <th>BLOOD GLUCOSE</th>
                    <th>RESULT<br></br>(mmol/l)</th>
                    <th>REF. RANGE<br></br>(mmol/l)</th>
                  </tr>
                  <tr>
                    <td>
                      Fasting
                    </td>
                    <td>
                      9.0
                    </td>
                    <td>
                      4.2-6.1
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Post Prandial
                    </td>
                    <td>
                      
                    </td>
                    <td>
                      4.2-6.5
                    </td>
                  </tr>
                  <tr>
                    <td>
                    Random
                    </td>
                    <td>
                      
                    </td>
                    <td>
                      4.2-8.1
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div className="HAtopic1">FBS 162 mg/dl</div>
          </Card>
        </div>
      </div>
    );
  }
  
  export default Xray;
  