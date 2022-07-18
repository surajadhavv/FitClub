import React from 'react'
import Header from '../Header/Header'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'
import './Hero.css'
import { motion } from 'framer-motion'
import NumberCounter from 'number-counter';
import { Link } from 'react-scroll'

export const Hero = () => {

    const transition = {type :'spring', duration: 3}
    const mobile = window.innerWidth <= 768 ? true : false; 
  return (
   <div className="hero" id='home'>
    <div className="blur blur-hero"></div>
    <div className="left-h">

        <Header/>

        <div className="the-best-ad">
            <motion.div
            initial={{left: mobile ?'178px':'238px'}}
            whileInView={{left:'8px'}}
            transition={{...transition,type:'tween'}}
            >

            </motion.div>
            <span>The best fitness club in the town</span>
        </div>

        <div className="hero-text">
            <div>
                <span className='stroke-text'>Shape </span>
                <span>Your</span>
            </div>
            <div>
                <span>Ideal Body</span>
            </div>
            <div>
                <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
            </div>
        </div>

        <div className="figures">
            <div>
                <span>
                    <NumberCounter start={100} end={140} preFix='+' delay='4'/>
                </span>
                <span>EXPERT COACHES</span>
            </div>
            <div>
                <span>
                <NumberCounter start={890} end={944} preFix='+' delay='4'/>
                </span>
                <span>MEMBERS JOINED</span>
            </div>
            <div>
                <span>
                <NumberCounter start={30} end={50} preFix='+' delay='4'/>
                </span>
                <span>FITNESS PROGRAMS</span>
            </div>
        </div>

        <div className="hero-btn">
            <button className="btn">Get Started</button>
            <button className="btn">Learn More</button>
        </div>

    </div>

    <div className="right-h">

        <button className="btn">
            <Link
            to='join'
            span={true}
            smooth={true}>Join Now</Link>
        </button>

        <motion.div 
        initial={{right:'-1rem'}}
        whileInView={{right:'4rem'}}
        transition={{transition}}
        className="heart-rate">
            <img src={Heart} alt="" />
            <span>Heart Rate</span>
            <span>116 bpm</span>
        </motion.div>

        <img src={hero_image} alt="" className="hero-image" />
        <motion.img 
        initial={{right:'11rem'}}
        whileInView={{right:'20rem'}}
        transition={{transition}}
        src={hero_image_back} alt="" className="hero-image-back" />

        <motion.div 
        initial={{right:'37rem'}}
        whileInView={{right:'28rem'}}
        transition={{transition}}
        className="calories">
            <img src={Calories} alt="" />
            <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
            </div>
            
        </motion.div>
        
        
    </div>
   </div>
  )
}
