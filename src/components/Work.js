import React from 'react';

//motion
import { motion } from "framer-motion";

//Variants
import { fadeIn } from "../variants";

import Image from "../assets/portfolio-img1.png";
import Image2 from "../assets/portfolio-img2.png";
import Image3 from "../assets/portfolio-img3.png";

const Work = () => {
  return <div className='section  lg:mt-[20%]' id='work' >
      <div className='container mx-auto lg:h-screen'>


        <div className='flex flex-col lg:flex-row gap-x-10'>

          
             <motion.div variants={fadeIn('right' , 0.5)} initial="hidden" whileInView="show" viewport={{ once: false , amount: 0.3}}  className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>

              {/* text */}
                   <div>

                    <h2 className=' h2 leading-tight text-accent'>My Latest <br/> Work.</h2>
                    <p className='max-w-sm mb-16'>
                      My Latest Work is  available  at  Work samples can include reports, menus, photos of projects, artwork, documents, etc.
                    </p>
                        <button className='btn btn-sm '>View all projects</button>
                   </div>
                   {/* image */}
                     
                   <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                    {/* overlay */}
                    <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-500'></div>

                    {/* img */}
                    <img src={Image} className='group-hover:scale-125'  alt='img'/>
 
                    <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-gradient'>UI/UX Design</span></div>


                    <div  className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                      <span className='text-3xl text-white '>Project Title</span>
                    </div>
                   </div>
                  
                   {/* end */}
             </motion.div>

             
             <motion.div variants={fadeIn('left' , 0.2)} initial="hidden" whileInView="show" viewport={{ once: false , amount: 0.3}} className='flex-1 flex flex-col gap-y-10'>
              {/* image2 */}

              <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                    {/* overlay */}
                    <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-500'></div>

                    {/* img */}
                    <img src={Image2} className='group-hover:scale-125'  alt='img'/>
 
                    <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-gradient'>UI/UX Design</span></div>


                    <div  className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                      <span className='text-3xl text-white '>Project Title</span>
                    </div>
                   </div>

                   <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                    {/* overlay */}
                    <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-500'></div>

                    {/* img */}
                    <img src={Image3} className='group-hover:scale-125'  alt='img'/>
 
                    <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-gradient'>UI/UX Design</span></div>


                    <div  className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                      <span className='text-3xl text-white '>Project Title</span>
                    </div>
                   </div>
                   {/* end */}
             </motion.div>
        </div>
      </div>
  </div>
};

export default Work;
