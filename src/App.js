import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SignIn from "./Components/SignIn";

import store from './store';
import { Provider } from 'react-redux';
//import PrivateRoute from "./Components/auth/PrivateRoute";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    {/* <Route exact path="/home" element={<Home/>}/> */}
                    <Route exact path="/" element={<SignIn/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </Router>
        </Provider>
            
    );
}

export default App;

function NotFound() {
    return <h2>404- no page found</h2>;
}