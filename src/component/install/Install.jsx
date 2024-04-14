import React from 'react'
import './install.scss'
import './mobileinstall.scss'
const Install = ({icon, title, words, name}) => {
  return (
    <div>
        <div className="con">
            <div className='icon' >{icon}</div>
            <br />
            <h3 className='installtitle'>{title}</h3> <br/>
            <p className="installwords">{words}</p>
            {name === 'measure' ? 
            <br/>
            :
            <></>
            }
        </div>
    </div>
  )
}

export default Install