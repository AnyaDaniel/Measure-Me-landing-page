import React from 'react'
import './imagedecor.scss'
import './mobileimage.scss'
import { color } from 'framer-motion'

const Imagdecor = ({img, squarecol}) => {
  return (
    <div className='imagedecor' >
        
        {img==='beach'?
        <>
            <div className="img1" ></div>
            <div className="square" style={{backgroundColor: '#E6402B'}} ></div>
            <div className="dotgrid" style={{backgroundColor: '#ffc04350'}} ></div>
        </>
        :
        <>
            <div className="img2" ></div>
            <div className="square" style={{backgroundColor: '#FFC043'}} ></div>
            <div className="dotgrid" style={{backgroundColor: '#e11a0050'}} ></div>
        </>
        }
        
        
    </div>
  )
}

export default Imagdecor