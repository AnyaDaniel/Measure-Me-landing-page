import React from 'react'
import './paytab.scss'
import './mobiletab.scss'
import CheckBoxRoundedIcon from '@mui/icons-material/CheckBoxRounded';

const Paytab = ({plan, amount, writeup, check1, check2, check3, check4, cl}) => {
  return (
    <div className='paytab' >
        <div className="top">
            <h4 className={cl} >{plan}</h4><br />
            <h2>{amount}</h2>
            <p>{writeup}</p>
        </div>
        <div className="check">
            <p><CheckBoxRoundedIcon /> {check1}</p>
            <p><CheckBoxRoundedIcon/> {check2}</p>
            <p><CheckBoxRoundedIcon/> {check3}</p>
            <p><CheckBoxRoundedIcon/> {check4}</p>
        </div>
    </div>
  )
}

export default Paytab