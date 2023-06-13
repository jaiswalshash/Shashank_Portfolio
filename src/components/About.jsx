import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';

import {styles} from "../style";
import {services} from "../constants";
import {fadeIn, textVariant} from "../utils/motion";

const   About = () => {

  const ServiceCard = ({index, title, icon}) => {
    return(
      <Tilt className ="xs:w-[250px]  w-full">
        <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
         className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >
          <div
            options = {{
              max:45,
              scale:  1,
              speed:450
            }}
            className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
          >
            <img src= {icon} alt={title} className='w-16 h-16 object-contain' />
            <h3 className='text-white font-bold text-center text-[20px]'>{title}</h3>
          </div>
        </motion.div>
      </Tilt>
    )
  }
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      
      <motion.p variants={fadeIn("", "", 0.1, 1)}
       className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
      Lorem ipsum dolor sit amet, consectetur 
      adipiscing elit. Etiam nec lorem ultrices, 
      imperdiet nisl ut, laoreet lorem. Fusce consequat 
      ipsum ut enim vehicula viverra. Cras id porttitor 
      libero. Suspendisse aliquet risus eget orci iaculis, 
      sit amet blandit ipsum feugiat. In non felis massa.
       Praesent rutrum eu ex quis iaculis. Quisque tincidunt e
       st libero, non rutrum enim auctor ac. Nam eu libero sit 
       amet massa semper vestibulum non eu dolor. Fusce tempor 
       purus augue, sed sollicitudin urna tempus imperdiet. 
       Aliquam metus sem, laoreet vitae rhoncus id, hendrerit 
       vitae tellus. In id eleifend diam. Nulla vitae consectetur 
       leo. Morbi viverra cursus massa, id iaculis eros condimentum in.

      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => {
          return(
            <ServiceCard key={service.title} index={index} {...service}/>
          );
        })

        }
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")