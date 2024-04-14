import React from 'react'
import {render} from 'react-dom';
import {motion} from 'framer-motion'
// import {useInView} from 'react-intersection-observer'
// import {useEffect} from 'react'
// import {useAnimation} from 'framer-motion'
import './home.scss'
import './mobilehome.scss'
import Nav from '../../component/nav/Nav'
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import Recdecor from '../../component/recdecor/Recdecor';
import Circles from '../../component/circles/Circles';
import vrman from '../../pics/vrman.png'
import Install from '../../component/install/Install';
import StraightenRoundedIcon from '@mui/icons-material/StraightenRounded';
import BackupRoundedIcon from '@mui/icons-material/BackupRounded';
import SmartToyRoundedIcon from '@mui/icons-material/SmartToyRounded';
import Imagdecor from '../../component/imgdecor/Imagdecor';
import Tabs from '../../component/tabs/Tabs';
import Footer from '../../component/footer/Footer';
import Testimonial from '../../component/testimonial/Testimonial';
import introone from '../../pics/jessica-lewis-DeyfdybVQhA-unsplash.png'
import introtwo from '../../pics/minh-pham-AHCmAX0k_J4-unsplash.png'
import introthree from '../../pics/stem-t4l-wqLswHmf6j4-unsplash.png'
import quote from '../../pics/quote.png'

const Home = () => {


  const slides = [
    { url: introone, title: "Measure Me App is Just my Goto Tool", message: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.", author: "Antonio Bandarass" },
    { url: introtwo, title: "Measure Me App is Just my Goto Tool", message: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.", author: "Antonio Bandarass"  },
    { url: introthree, title: "Measure Me App is Just my Goto Tool", message: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.", author: "Antonio Bandarass"  },
    { url: introone, title: "Measure Me App is Just my Goto Tool", message: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.", author: "Antonio Bandarass" },
    { url: introtwo, title: "Measure Me App is Just my Goto Tool", message: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.", author: "Antonio Bandarass"  },
    { url: introthree, title: "Measure Me App is Just my Goto Tool", message: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.", author: "Antonio Bandarass"  },
  ];

  const words = {
    measurement: "Convert units, calculate area and volume, and even measure length and height using your device's camera.",
    collabortaion: "Allows you to save and share your calculations, making it easy to collaborate with others or keep track of your measurements over time.",
    augmented: "Allows you to visualize your designs in real-world scale and see how they would look after you take accurate measurements."
  }

  

  return (
    <div style={{overflowX: 'hidden'}} >
        
        <section className="head pr" id='head'>
            
            <Recdecor id='rec1' />
            <Recdecor id='rec2' />
            <Recdecor id='rec3' />
            <Recdecor id='rec4' />
            <Nav/>
            <div className="headmain df">
              <div className="headleft">
                
                <div className="headtitle">
                  <h2 id="title">LET'S EXPLORE THE FUTURE OF TECHNOLOGY</h2><br />
                  <p id="headsubtitle">Measue Me helps you with all your measurement and calculation needs, whether you are a student, a professional.</p>
                  
                  <div id="headlinks" className="df">
                    <motion.a initial={{y: '-50vh'}} animate={{ y: '0' }} transition={{delay: 0.3, duration: 0.7, type: 'spring'}} href="" className="pinkbtn getstart">GET STARTED</motion.a>
                    <motion.a initial={{y: '-50vh'}} animate={{ y: '0' }} transition={{duration: 0.7, type: 'spring'}} className='df' href="" id="go"><PlayArrowRoundedIcon id='playbtn' /><p id="seevid">See Video</p></motion.a>
                  </div>
                </div>
              </div>
              <div className="headright l">
                <Circles/>
                <motion.div initial={{scale: 0}} animate={{ scale: 1 }} transition={{delay: 0.6, duration: 0.7, type: 'spring'}} whileHover={{y: -50, x:50}} className="charts" id='virtual' >Virtualization</motion.div>
                <motion.div initial={{scale: 0}} animate={{ scale: 1 }} transition={{delay: 0.3, duration: 0.7, type: 'spring'}} whileHover={{y: -50, x:50}} className="charts" id='ml' >Machine Learning</motion.div>
                <motion.img initial={{x: '-100vw'}} animate={{ x: '0' }} transition={{duration: 0.7, type: 'spring'}}  src={vrman} id='vrman' alt="" />
              </div>
            </div>
        </section>

        <section className="whatsinstall">
          <div className="top">
            <h2>Get the best out of <span id="purplemeasure">Measure Me</span> by getting to know what's in stall</h2><br />
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequa.</p>
          </div>
          <br /><br /><br /><br />
          <div  className="df" id='installcards' >
            <motion.div initial={{y: -50, x: -200}} whileInView={{ y: '0', x: 0 }} transition={{duration: 0.7, type: 'spring'}}><Install icon=<StraightenRoundedIcon style={{transform: 'rotate(160deg)', background: '#E35DB6'}} /> title='Measurement' words={words.measurement} name='measure' /></motion.div>
            <motion.div initial={{y: -50}} whileInView={{ y: '0' }} transition={{duration: 0.7, type: 'spring'}}><Install icon=<BackupRoundedIcon style={{background: '#7554CF'}} /> title='Collaboration' words={words.collabortaion} name='none' /></motion.div>
            <motion.div initial={{y: -50, x: 200}} whileInView={{ y: '0', x: 0 }} transition={{duration: 0.7, type: 'spring'}}><Install icon=<SmartToyRoundedIcon style={{background: '#4C87F3'}} /> title='Augmented Reality' words={words.augmented} name='none' /></motion.div>
          </div>
        </section>

        <section className="abouthome">
          <div className="df homeabout">
            <div className="aboutsee">
              <h3 id='aboutsee' >About <br/> <span id="purplemeasure">Measure <br/> Me</span> </h3>
              <br />
              <div id='line'></div>
            </div>
            <motion.div initial={{x: 100}} whileInView={{x: 0 }} transition={{duration: 0.7, type: 'spring'}}><Imagdecor img='beach' squarecol='#E6402B' /></motion.div>
            <motion.div initial={{x: -100}} whileInView={{x: 0 }} transition={{duration: 0.7, type: 'spring'}} className="right" id='right' >
              <div className="aboutnotsee">
                <h3>About <br/> <span id="purplemeasure">Measure <br/> Me</span> </h3>
                <br />
                <div id='line'></div>
              </div>
              <br /><br />
              <h3>We're a Team of Expert conducting AR, AI and Machine Learning Enabled Solution</h3>
              <p>A cutting-edge mobile application for measurement, visualization, and data management. With the power of Augmented Reality (AR), Artificial Intelligence (AI) and machine learning, Measure Me revolutionizes the way you take measurements, visualize your designs and manage your data.</p>
              <br /><br />
              <a href="" className="pinkbtn learn">Learn More</a>
            </motion.div>
          </div>
          <div className="df homeabout phone">
            <motion.div initial={{x: 100}} whileInView={{x: 0 }} transition={{duration: 0.7, type: 'spring'}} className="left">
              <h3>With the aid of Machine Learning AI and AR.</h3>
              <p>A cutting-edge mobile application for measurement, visualization, and data management. With the power of Augmented Reality (AR), Artificial Intelligence (AI) and machine learning, Measure Me revolutionizes the way you take measurements, visualize your designs and manage your data.</p>
              <br /><br />
              <a href="" className="pinkbtn learn">Learn More</a>
            </motion.div>
            <motion.div initial={{x: -100}} whileInView={{x: 0 }} transition={{duration: 0.7, type: 'spring'}} className="imgspace"><Imagdecor img='phone' squarecol='#FFCB63' /></motion.div>
          </div>
        </section>

        <section className="plans">
          <div className="tabside">
            <h2 className='title'>Choosing a <span className="pink">Pricing Plan</span></h2><br />
            <p className="subtitle">Our plans are at a very affordable rate, hurry and do not miss this.</p><br /><br />
            <Tabs/>
            <div className="dot pdot" style={{background: '#5931C5'}} ></div>
            <div className="dot odot" style={{background: '#E11900'}}></div>
            <div className="dot pidot" style={{background: '#DD3CA7'}}></div>
          </div>
        </section>

        <section>
          <div className="testimony">
            <h2 className='title'>What <span className="pink">Our Clients</span> Have To Say About Us</h2>
            <p className="subtitle">Our clients are an integral part of our success</p><br />
            <div className="testimg">
              <img id='quote' src={quote} />
              <Testimonial slides={slides}/>
            </div>
          </div>
        </section>

        <section >
          <Footer/>
        </section>
    </div>
  )
}

export default Home