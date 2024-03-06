import "./hero.scss"
import HeroText from './heroText/HeroText'
import HeroImg from './heroImg/HeroImg'
import HeroArrow from "./heroArrow/HeroArrow"

const Hero = ({showDelay}) => {
  return (
    <div className='hero'>
      <HeroText showDelay={showDelay}/>
      <HeroImg showDelay={showDelay}/>
      <HeroArrow />
    </div>
  )
}

export default Hero
