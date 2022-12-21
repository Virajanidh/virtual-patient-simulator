import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SignIn from "./Components/SignIn";
import CaseDesc from "./Components/UI/CaseDesc"
import Exam from "./Components/UI/Exam"
import store from './store';
import { Provider } from 'react-redux';
import CaseSelect from "./Components/UI/CaseSelect";
import Radio from "./Components/UI/Radiographs/Radio";
import Invest from "./Components/UI/Invest/Invest";
import Diagnosis from "./Components/UI/Diagnosis/Diagnosis"
//import PrivateRoute from "./Components/auth/PrivateRoute";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    {/* <Route exact path="/home" element={<Home/>}/> */}
                    <Route exact path="/" element={<SignIn/>}/>
                    <Route path="*" element={<NotFound/>}/>
                    <Route path="/caseSelect" element={<CaseSelect/>}/>
                    <Route path="/page1" element={<CaseDesc/>}/>
                    <Route path="/page2" element={<Exam/>}/>
                    <Route path="/page3" element={<Radio/>}/>
                    <Route path="/page4" element={<Invest/>}/>
                    <Route path="/page5" element={<Diagnosis/>}/>
                </Routes>
            </Router>
            </Provider>
    );
}

export default App;

function NotFound() {
    return <h2>404- no page found</h2>;
}
