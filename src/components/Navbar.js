import React, { useEffect, useState } from 'react';
import Logo from "../assets/img/outcess-logo.png";

const Navbar = () => {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    window.onscroll = () => {
      const scrollUp = window.pageYOffset
      if(scrollUp > offset) {
        document.getElementById("navbar").style.top = "-5rem";
      } else {
        document.getElementById("navbar").style.top = "0";
      }
      setOffset(scrollUp)
    }

    if(offset > 0) {
      document.getElementById("navbar").style.boxShadow = "0 5px 5px rgba(0,0,0,0.09)";
    } else {
      document.getElementById("navbar").style.boxShadow = "none";
    }

  }, [offset]);

  return (
    <nav id="navbar">
      <div id="logo">
        <a href="#">
          <img src={Logo} alt="Outcess LTD"/>
        </a>
      </div>
      <div className="right-nav">
        <ul>
          <li>
            <a href="#">Company</a>
          </li>
          <li>
            <a href="#">Solutions</a>
          </li>
          <li>
            <a href="#">Case Studies</a>
          </li>
          <li>
            <a href="#">REQUEST QUOTE</a>
          </li>
        </ul>
        <button>Be remote ready</button>
      </div>
    </nav>
  )
}

export default Navbar;
