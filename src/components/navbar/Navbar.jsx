import "./navbar.scss"
import Location from "./location/Location"

const Navbar = ({showDelay}) => {
  return (
    <div className="navbar">
      <div className="menu">
        <a href="#Projects">Work</a>
        <a href="https://www.linkedin.com/in/aadhar-j/">About</a>
        <a href="#Contact">Contact</a>
      </div>
      <Location showDelay={showDelay}/>
    </div>
  )
}

export default Navbar
