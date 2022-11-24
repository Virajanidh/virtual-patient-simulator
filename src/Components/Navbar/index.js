import React, { useEffect } from 'react'
import { useSelector,useDispatch} from "react-redux";
import { createTest } from '../../Actions/historyTakingQ/historyTakingActions'


function Navbar(){

   const {userInfomation} = useSelector((state) => state.user)
   console.log(userInfomation.name)
  //  const dispatch =useDispatch()
  //  useEffect(() => {
  //   dispatch(createTest({"messsage":"hello Test"}))
  // }, []);

    return(
<div>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Hi {userInfomation.name}</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
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
</div>
    )
}
export default Navbar;