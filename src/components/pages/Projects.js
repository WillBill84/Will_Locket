import './Projects.css';
import Project from '../Projects/Project';
import { motion } from "framer-motion";
import pageTransition from '../Animations/pageTransition';


export default function Projects() {


    return (
        <motion.div initial="out" animate="in" exit="out" variants={pageTransition} transition={pageTransition}>
            <Project />
        </motion.div>
    );
}