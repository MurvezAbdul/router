import React from 'react';
import {Link} from 'react-router-dom'
import "../App.css" 

export default function Navigation() {
  return(
    <div className="nav">
        <Link className="h" to="/">Home</Link>
        <Link className="a" to="/about">About</Link>
        <Link className="c" to="/contact">Contact</Link>

    </div>
  )
}
