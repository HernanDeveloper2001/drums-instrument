import "./style.css"
import { Howl } from "howler"
import { useVolume } from "../../../context/DataVolume"
import { useInitialButtonPower } from "../../../context/valueButtonPower"
import PropTypes from "prop-types";


const Buttons = ({ letter,audio }) => {
  //Context Volume
  const {valueVolume} = useVolume();

  //Context Power
  const {valueButtonPower} = useInitialButtonPower()

  function handleSound(){
    const sound = new Howl({
      src:[audio],
      volume:valueVolume,
    })
    sound.play()
  }

  return (
    <>
      {
        valueButtonPower 
        ?<div 
            className="drum-pad" 
            onClick={handleSound}>
            {letter}
          </div> 
        : <div 
            className="drum-pad" >
            {letter}
          </div> 
      }
    </>
  )
}

Buttons.propTypes = {
  letter:PropTypes.node.isRequired,
  audio:PropTypes.node.isRequired,
}
export default Buttons
