import "./heroText.scss"
import { motion } from "framer-motion"

const HeroText = ({showDelay}) => {
    return (
        <motion.div className='heroText' initial={{ y: 200 }}
            animate={{ y: 0 }}
            transition={{
                delay: showDelay,
                type: "spring",
                stiffness: 200,
                damping: 60,
            }}>
            <span className='good'>good</span>
            <div className='line'>
                <span>I write</span>
                <span className='code' >Code</span>
            </div>
            <img src="./upArrow.png" alt="" />
        </motion.div>
    )
}

export default HeroText
