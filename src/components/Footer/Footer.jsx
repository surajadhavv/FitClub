import React from 'react'
import './Footer.css'
import github from "../../assets/github.png"
import instagram from '../../assets/instagram.png'
import linkden from '../../assets/linkedin.png'
import logo from '../../assets/logo.png'


function Footer() {
  return (
    <div className="footer-container">
        <hr/>
        <div className="footer">

            <div className="social-link">
            <img src={github} alt="" />
            <img src={instagram} alt="" />
            <img src={linkden} alt="" />
            </div>

            <div className="logo-f">
                <img src={logo} alt="" />
            </div>
            
        </div>

        <div className="blur blur-footer"></div>
    </div>
  )
}

export default Footer