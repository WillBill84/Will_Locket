import React, { useEffect, useRef } from 'react';
import Parallax from 'parallax-js';
import cloudOne from '../../assets/images/1.png';
import cloudTwo from '../../assets/images/c4_2.png';
import './Home.css';
import { motion } from "framer-motion";
import pageTransition from '../Animations/pageTransition';


const Home = () => {
    const sceneEl = useRef(null);

    useEffect(() => {
        const parallaxInstance = new Parallax(sceneEl.current, {
            relativeInput: true,
        })

        parallaxInstance.enable();

        return () => parallaxInstance.disable();

    }, [])


    return (
        <motion.div initial="out" animate="in" exit="out" variants={pageTransition} transition={pageTransition}>

            <div data-relative-input="true" id="scene" ref={sceneEl}>
                <div className="background" data-depth="0.05">
                    <div className="homeText">
                        <h1>Will Locket</h1>
                        <p>Web Developer</p>
                        <p>Melbourne, Australia.</p>
                    </div>
                </div>
                <img src={cloudOne} alt="mountain clouds" data-depth=".8" className="cloudOne" />
                <img src={cloudTwo} alt="mountain clouds" data-depth=".2" className="cloudTwo" />
            </div>
        </motion.div>
    );
}




export default Home;