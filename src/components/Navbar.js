import React from 'react'
import PropTypes from 'prop-types'
import AboutUs from './AboutUs'
import {Link} from "react-router-dom";

export default function Navbar(props) {
  return (

<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>   { /* here we used the props to fetch the passed item from App.js to Navbar.js */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  to='/AboutUS' >About Us</Link>
          </li>
  
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary" type="submit">Search</button>
      </form>

      <div className ={`form-check form-switch mx-3 text-${props.mode === 'light'? 'dark':'light'} `} >
  <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label " htmlFor="flexSwitchCheckDefault">  {props.modeText}  </label>
</div>

    </div>

  </div>


</nav>


  )  
}

Navbar.propTypes = {title : PropTypes.string}    // This line is used to set a constraint that the passed title must be a string else we gwt a warning in console



Navbar.defaultProps = {                     // This is used to set a default value for the title prop if in case it is not passed   
  title : "Enter The Title Here"
}

