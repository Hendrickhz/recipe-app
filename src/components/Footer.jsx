import React from 'react'
import { FaFacebookF , FaTwitter , FaGoogle, FaInstagram, FaLinkedin, FaGithub , FaCopyright} from 'react-icons/fa'
import {GiCoffeeCup, GiMeal, GiHotMeal} from 'react-icons/gi'
import { Link } from 'react-router-dom'
import "./css/footer.css"
const Footer = () => {
  return (
  <div className=" footer text-white">
      <div className=" w-[90%] md:w-[80%] mx-auto flex flex-col md:flex-row items-center md:gap-0 gap-10 pt-10 pb-5">
        <div className=" md:w-[50%] flex flex-col gap-4  xl:gap-8 ">
          <h1 className=' capitalize font-semibold tracking-wider text-2xl'>Flavour Fiesta Recipes</h1>
          <p className=' text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam saepe pariatur quam voluptatibus commodi molestiae, soluta doloribus fugiat distinctio ea voluptas quaerat ad numquam hic!</p>
          <div className="  flex gap-6 text-xl">
            <Link to={'/'}><FaFacebookF/></Link>
            <Link to={'/'}>  <FaGoogle/></Link>
            <Link to={'/'}><FaTwitter/></Link>
            <Link to={'/'}><FaInstagram/></Link>
            {/* <Link to={'/'}><FaLinkedin/></Link>
            <Link to={'/'}><FaGithub/></Link> */}
          
          
          </div>
        </div>
        <div className="md:w-[45%] mx-auto flex text-lg gap-16 font-semibold">
          <div className=" flex flex-col items-center tracking-wider text-center ">
            <GiMeal className='  text-4xl mb-4'/>
            <p>OUR MEALS</p>
          </div>
          <div className=" flex flex-col items-center ">
            <GiHotMeal className='  text-4xl mb-4'/>
            <p>SPECIALS</p>
          </div>
          <div className=" flex flex-col items-center ">
            <GiCoffeeCup  className='  text-4xl mb-4'/>
            <p>DRINKS</p>
          </div>
         
        </div>
      </div>
      <p className='md:text-base text-sm text-center italic py-4 '>
       Copyright <FaCopyright className=' inline-block'/> 2023. Designed By Hendrickhz.
      </p>
    
  </div>
  )
}

export default Footer
