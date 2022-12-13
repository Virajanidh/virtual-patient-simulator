import React, { useEffect } from 'react'
import { useSelector,useDispatch} from "react-redux";
import { createTest } from '../../Actions/historyTakingQ/historyTakingActions'
import {logout, UserLogoutActions} from '../../Actions/User/UserLogoutActions'
import { useNavigate, Link} from 'react-router-dom';
import './nav.css'

function Navbar(){

   const {userInfomation} = useSelector((state) => state.user)
   const dispatch = useDispatch()
   const navigate = useNavigate();
  //  const dispatch =useDispatch()
  //  useEffect(() => {
  //   dispatch(createTest({"messsage":"hello Test"}))
  // }, []);
  const handleClick2=(e)=>{
    console.log("logout")
    dispatch(UserLogoutActions.logout());
    navigate("/")
  }

    return(
<div>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Hi {userInfomation.name}</a>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">PreviousFeedback</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        
        
        
        
      </ul>
    </div>
  </div>
  <button onClick={handleClick2} className="logoutbtn" >
        Logout
        
        </button>
</nav>
</div>
    )
}
export default Navbar;