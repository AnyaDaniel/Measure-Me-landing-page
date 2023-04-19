import React from 'react'
import './nav.scss'
import LogonoBg from '../../pics/logonobg.png'

const Nav = () => {
  return (
    <div className='nav df'>
        <div className="left df">
            <img src={LogonoBg} alt="" />
        </div>
        <ul className="center df">
            <li className='navlink'><a href="">Home</a></li>
            <li className='navlink'><a href="">About Us</a></li>
            <li className='navlink'><a href="">Product</a></li>
            <li className='navlink'><a href="">Pricing</a></li>
            <li className='navlink'><a href="">Testimonial</a></li>
        </ul>
        <div className="sign df">
            <a href="" className="sup">Sign In</a>
            <a href="" className="pinkbtn free">Start Free</a>
        </div>
    </div>
  )
}

export default Nav