import "./location.scss"
import {motion} from "framer-motion"

const Location = ({showDelay}) => {
  return (
    <motion.div initial={{y:200}} 
    animate={{y:0}} 
    transition={{
      delay: showDelay,
      type: "spring",
      stiffness: 200,
      damping: 60,
    }}className='location'>
      <ul>
        <li>I</li>
        <li>N</li>
        <li>D</li>
        <li>I</li>
        <li>A</li>
      </ul>
      <img src="./earth.png" alt="" />
    </motion.div>
  )
}

export default Location
