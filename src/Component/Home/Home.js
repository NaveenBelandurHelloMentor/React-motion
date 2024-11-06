import React from 'react'
import { Link } from 'react-router-dom'; 
import {delay, motion} from 'framer-motion'   
import './home.css'
// import Loader from '../Loader/Loader';

// if we want to animation anything make motion elements motion.change that element motion.h2

// import motion 
// add motion with element tag 


// Yo yo Help us to repeat the animation repeatly
const buttonVariants = {
  hover:{
    scale: 1.1,
    textShadow:'0px 0px 8px rgb(255,255,255)',
    boxShadow:'0px 0px 8px rgb(255,255,255)',
    transition:{
      duration:0.3,
      yoyo:Infinity
    }
  }
}

const Containervariant = {
  hidden:{
    opacity:0
  },
  visiable:{
    opacity:1,
    transition:{
      delay:1.5,
      duration:1.5
    }
  }
}
const Home = () =>{
    return (
        <>
        <motion.div variants={Containervariant} initial='hidden' animate='visiable' className='home_container' >
          <p className='home_title_fnt'>Welcome to the pizza joint</p>
          <Link to="/base">
          <motion.button
          variants={buttonVariants}
          whileHover='hover'
           
           >Create Your Pizza</motion.button>
          </Link>
          {/* <Loader/> */}
        </motion.div>
        </>
    )
}



export default Home