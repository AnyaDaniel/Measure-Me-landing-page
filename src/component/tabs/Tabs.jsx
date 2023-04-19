import React from 'react'
import { useState, useEffect } from 'react'
import './tabs.scss'
import Paytab from '../paytab/Paytab';


const Tabs = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <div
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          <p>Monthly</p>
        </div>
        <div
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          <p>Yearly</p>
        </div>
      </div><br />

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <div className="locations">
            <Paytab 
              plan='Basic' 
              amount='N9,000' 
              writeup='Only for members, per month' 
              check1='Unlimited access to app'
              check2='10GB storage capacity'
              check3='Free access to AR'
              check4='Unlimited access to features'
              cl='yellow'
            />
            <Paytab 
              plan='Standard' 
              amount='N19,000' 
              writeup='Only for members, per month' 
              check1='Unlimited access to app'
              check2='10GB storage capacity'
              check3='Free access to AR'
              check4='Unlimited access to features'
              cl='purple'
            />
            <Paytab 
              plan='Pro' 
              amount='N29,000' 
              writeup='Only for members, per month' 
              check1='Unlimited access to app'
              check2='10GB storage capacity'
              check3='Free access to AR'
              check4='Unlimited access to features'
              cl='blue'
            />
          </div>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <div className="locations">
          <Paytab 
              plan='Basic' 
              amount='N108,000' 
              writeup='Only for members, per month' 
              check1='Unlimited access to app'
              check2='10GB storage capacity'
              check3='Free access to AR'
              check4='Unlimited access to features'
              cl='yellow'
            />
            <Paytab 
              plan='Standard' 
              amount='N228,000' 
              writeup='Only for members, per month' 
              check1='Unlimited access to app'
              check2='10GB storage capacity'
              check3='Free access to AR'
              check4='Unlimited access to features'
              cl='purple'
            />
            <Paytab 
              plan='Pro' 
              amount='N348,000' 
              writeup='Only for members, per month' 
              check1='Unlimited access to app'
              check2='10GB storage capacity'
              check3='Free access to AR'
              check4='Unlimited access to features'
              cl='blue'
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Tabs