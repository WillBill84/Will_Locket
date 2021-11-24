import React from 'react';
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";


const Project = props => {

    const [ref, isVisible] = useInView({ threshold: .1 });
    const imagevariant = {

    visible: {
      opacity: 1,
      y: 0,
    },

    hidden: {
      opacity: .3,
      y: -15,
    },
};

const descriptionVarient = {

    visible: {
      opacity: 1,
      y: -8,
    },

    hidden: {
      opacity: .1,
      y: 0,
    },
};

    return (
  
        <div className="row">
        <div className="col-sm-8 hover-overlay">

        <motion.div
          ref={ref}
          variants={imagevariant}
          animate={isVisible ? "visible" : "hidden"}
          transition={{ duration: 1.3, ease: "easeInOut", type: "spring", stiffness: 20 }}
        >

                <img src={props.imgsrc} alt={props.imgalt} width="100%" />
                <a href={props.link} target="_blank" rel="noopener noreferrer">
                    <div className='mask overlay' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
                </a>

             </motion.div>
            </div>
            

            <div className="projectDesc col-sm-4">

            <motion.div
            ref={ref}
            variants={descriptionVarient}
            animate={isVisible ? "visible" : "hidden"}
            transition={{ duration: 2.5, ease: "easeInOut",  type: "spring", stiffness: 50 }}
            style={{ marginLeft: "10px" }}
            >    

                <h4>{props.title}</h4>
                <p>{props.description}</p>
                <a className="btn btn-dark" href={props.link} role="button" target="_blank" rel="noopener noreferrer">View Project</a>
           
            </motion.div>
            </div>
        </div>

       
    );

}

export default Project;