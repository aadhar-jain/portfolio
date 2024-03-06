import "./heroImg.scss"
import {motion} from "framer-motion"


const HeroImg = ({showDelay}) => {
  return (
    <div className='heroImg'>
      <div className="container" >
        <motion.img src="/pic.png" alt="" initial={{y:350}} 
        animate={{y:0}} 
        transition={{
          delay: showDelay,
          type: "spring",
          stiffness: 200,
          damping: 60,
        }}/>
      </div>
    </div>
  )
}

export default HeroImg
