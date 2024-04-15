import React from "react";
import CountUp from "react-countup";
import { useRef } from "react";
import { useInView } from "framer-motion";

//motion

import { motion } from "framer-motion";

//Variants
import { fadeIn } from "../variants";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  //  const [ref , inView] = useInView({
  //    threshold: 0.5,

  //  })

  return (
    <section id="about" className="section " ref={ref}>
      <div className="container mx-auto  " >
        <div className="flex flex-col gap-y-10  lg:flex-row  lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div variants={fadeIn('up' , 0.5)} initial="hidden" whileInView="show" viewport={{ once: false , amount: 0.3}}   className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top "></motion.div>

          <div className="flex-1">
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="h3 mb-4">
              I am a software engineer based in the San Francisco Bay Area. I
              have a passion for building beautiful, responsive, and scalable
              web applications.
            </h3>

            <p className="mb-6 ">you can find more information about my projects here</p>

            {/*stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {isInView ? (
                    <CountUp start={0} end={13} duration={3} />
                  ) : null}
                </div>

                <div className="font-primary text-sm tracking-[2px]">
               
                  Years of <br /> Experience
                </div>
              </div>


              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {isInView ? (
                    <CountUp start={0} end={15} duration={3} />
                  ) : null}
                  K+
                </div>

                <div className="font-primary text-sm tracking-[2px]">
                  
                  Projects <br /> Completed
                </div>
              </div>



              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {isInView ? (
                    <CountUp start={0} end={13} duration={3} />
                  ) : null}
                  K+
                </div>

                <div className="font-primary text-sm tracking-[2px]">
                  
                  Satisfied <br /> Clients
                </div>
              </div>

            </div>
            <motion.div variants={fadeIn('left' , 1)} initial="hidden" whileInView="show" viewport={{ once: false , amount: 0.3}} className="flex gap-x-8 items-center">
            <button className="btn btn-lg">Contact me</button>
            <a href="#" className="text-gradient btn-link">My Portfolio</a>
          </motion.div>
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default About;
