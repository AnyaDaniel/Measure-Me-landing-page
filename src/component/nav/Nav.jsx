import React from 'react'
import { useState, useEffect } from 'react'
import './nav.scss'
import './mobilenav.scss'
import LogonoBg from '../../pics/logonobg.png'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const Nav = () => {
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
    <div className={color ? 'nav df navbg' : 'nav df'}>
        <div className="left df">
            <img src={LogonoBg} alt="" />
        </div>
        <ul className="center df notvisible ">
            <li className='navlink'><a href="">Home</a></li>
            <li className='navlink'><a href="">About Us</a></li>
            <li className='navlink'><a href="">Product</a></li>
            <li className='navlink'><a href="">Pricing</a></li>
            <li className='navlink'><a href="">Testimonial</a></li>
        </ul>
        <div className="sign df notvisible ">
            <a href="" className="sup">Sign In</a>
            <a href="" className="pinkbtn free">Start Free</a>
        </div>
        <MenuRoundedIcon className='menuvis'/>
    </div>
  )
}

export default Nav