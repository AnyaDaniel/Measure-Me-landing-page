import React from 'react'
import { useState, useEffect } from 'react'
import './footer.scss'
import './mobilefoot.scss'
import cc from '../../pics/Vector.png'
import logobg from '../../pics/logobg.png'
import ig from '../../pics/ig.png'
import tweeter from '../../pics/tweeter.png'
import fb from '../../pics/fb.png'
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';


const Footer = () => {
    const [color, setColor] = useState(false)
	const changeColor = () => {
		if (window.scrollY >= 150) {
			setColor(true)
		} else {
			setColor(false)
		}
	}
	window.addEventListener ('scroll', changeColor)
  return (
    <div className='footer' >
        <div className="top">
            <div className="img">
                <a href=""><img src={logobg} alt="" /></a>
            </div>
            <div className="abt">
                <ul>
                    <li><a href="">About Us</a></li>
                    <li><a href="">More Searches</a></li>
                    <li><a href="">Testimonials</a></li>
                    <li><a href="">Events</a></li>
                    <li><a href="">FAQ</a></li>
                </ul>
            </div>
            <div className="serv">
                <ul>
                    <li><a href="">Services</a></li>
                    <li><a href="">Support</a></li>
                    <li><a href="">Privacy Policy</a></li>
                    <li><a href="">About Us</a></li>
                </ul>
            </div>
            <div className="join">
                <h3>Join The <span id="purplemeasure">Waiting List</span> </h3><br />

                <form action="">
                    <input type="email" name="" id="" placeholder='Email Address' />
                    <button className='pinkbtn' type="submit">Get Started</button>
                </form><br />

                <div className="socials df">
                    <a href=""><img src={ig} alt="" /></a>
                    <a href=""><img src={tweeter} alt="" /></a>
                    <a href=""><img src={fb} alt="" /></a>
                </div>
            </div>
        </div>
        <div className="bottom">
            <img src={cc} alt="" /> 2023 All Rights Reserved
        </div>
        <a href="#head" className={color ? 'totop totopd' : 'totop'} ><KeyboardArrowUpRoundedIcon/></a>
    </div>
  )
}

export default Footer