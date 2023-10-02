import React from 'react';
import '../../App.css';
import myLogo from '../../assets/features-number-01.png';
import NotesIcon  from "@mui/icons-material/Notes";

export default function NavBar() {
  return (
<nav className="navbar navbar-expand-lg bg-dark">
    <div className='container'>
    <a className="navbar-brand" href="/">
        <img src={myLogo} alt='' className='mylogo'/>
    </a>
    <button className class="navbar-toggler" type="button" 
    data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <NotesIcon style={{color:'#fff'}}/>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav  external">
        <li className="nav-item active">
          <a className="nav-link " aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Work</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Contacts</a>
        </li>
      </ul>
    </div>
        </div>
</nav>
  )
}
