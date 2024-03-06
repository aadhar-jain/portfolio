import "./name.scss"
import {motion} from "framer-motion"

const Name = ({showDelay}) => {
  return (
    <div className='name' >
      <motion.span initial={{y:100}} 
        animate={{y:0}} 
        transition={{
          delay: showDelay,
          type: "spring",
          stiffness: 200,
          damping: 60,
        }}>Aadhar Jain</motion.span>
    </div>
  )
}

export default Name
