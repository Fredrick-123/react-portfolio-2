import React from 'react';


import {BsArrowUpRight} from 'react-icons/bs'

//motion
import { motion } from "framer-motion";

//Variants
import { fadeIn } from "../variants";

//service data

const services = [
  {
    name: 'UI/UX Design',
    description: 'I am a UI/UX design who creates beautiful interfaces',
    link: 'Learn more'
  },

  {
    name: 'Development',
    description: 'I am a UI/UX design who creates beautiful interfaces',
    link: 'Learn more'
  },


  {
    name: 'Digital Marketing',
    description: 'I am a UI/UX design who creates beautiful interfaces',
    link: 'Learn more'
  },

  {
    name: 'Product Brandign',
    description: 'I am a UI/UX design who creates beautiful interfaces',
    link: 'Learn more'
  },
]


const Services = () => {

  
  return <div className='section ' id='services'>
    <div className='container mx-auto lg:h-screen lg:mt-[10%] ' >

      <div className='flex flex-col lg:flex-row    '>
     {/* text  & image*/}
      <motion.div variants={fadeIn('up' , 0.5)} initial="hidden" whileInView="show" viewport={{ once: false , amount: 0.3}}   className='flex-1 lg:bg-services  lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'> 
        <h2 className='h2 text-accent mb-6'>What do i do</h2>
        <h3 className='h3 max-w-[455px] mb-16'>I'm a Freelance Developer with over 5 years of experience</h3>
        <button className='btn btn-sm'> See my work</button>
        </motion.div>
    {/* service */}
      <div >
        {
          services.map((service, i) =>{

            const {name , description ,link} = service
            // destructure service
             return (
                  <motion.div variants={fadeIn('left' , 1  )} initial="hidden" whileInView="show" viewport={{ once: false , amount: 0.3}}  className='border-b border-white/20 h-[146px] mb-[38px] flex ' key={i}>
                      
                      <div className='max-w-[476px]'>
                        <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                        <p className='fobt-secondary leading-tight'>{description}</p>
                      </div>

                    <div className='flex flex-col  flex-1   items-end'>
                      <a href='#' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'><BsArrowUpRight/></a>
                      <a href='#' className='text-gradient text-sm'> {link}</a>
                    </div>
                   
                   </motion.div>
             )
          })
        }
      </div>

      </div>

    </div>
  </div>
};

export default Services;
