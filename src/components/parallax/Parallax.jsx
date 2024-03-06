import { useRef } from 'react'
import "./parallax.scss"
import { motion, useScroll, useTransform } from "framer-motion"

const Parallax = ({ type }) => {

    const ref = useRef()
    const { scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end" , "end start"],
    })
    const yText = useTransform(scrollYProgress, [0, 1], ["-500%", "500%"]);
    const yplanets = useTransform(scrollYProgress, [0, 1], ["300%", "-300%"]);
    return (
        <motion.div className='parallax' ref={ref}>
            <motion.h1 style={{y : yText}}>{type === "services" ? "What I do?" : "What I made?"}</motion.h1>
            <motion.div className="back1"></motion.div>
            <motion.div className="back2"></motion.div>
            <motion.div className="back3"></motion.div>
            <motion.div className="moon" style={{y : yplanets, x : yplanets}}></motion.div>
        </motion.div>
    )
}

export default Parallax
