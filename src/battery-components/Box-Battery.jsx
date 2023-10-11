import BoxButtons from "./box-components/Box-Buttons";
import BoxControlers from "./box-components/Box-Controlers";
import Logo from "../logo/Logo"
import "./style.css";
import { AiFillGithub ,AiFillLinkedin} from 'react-icons/ai';

const BoxBattery = () => {
  return (
    <div id="display">
      <Logo />
      <div className="box-container">
        <BoxButtons />
        <BoxControlers />
      </div>
      <div className="box-icons">
        <p>
          By Hernan  
          <a href="https://github.com/HernanDeveloper2001" target="_blank" rel="noopener noreferrer">
            <i> <AiFillGithub /></i>
          </a> 
          <a href="https://www.linkedin.com/in/hernandariocalvo/" target="_blank" rel="noopener noreferrer">
            <i> <AiFillLinkedin /></i>
          </a>
        </p>
        
      </div>
    </div>
  )
}

export default BoxBattery
