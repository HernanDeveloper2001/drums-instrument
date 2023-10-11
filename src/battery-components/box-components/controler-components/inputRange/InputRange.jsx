import "../../Box-Controler-style.css"
import PropTypes from "prop-types";


const InputRange = ({ handleSoundVolume,value }) => {

  return (
      <input 
        className="input-range"
        type="range" 
        step="0.01"
        max="1" 
        min="0" 
        onChange={handleSoundVolume}
        value={value} />
  )
}

InputRange.propTypes = {
  handleSoundVolume: PropTypes.node.isRequired,
  value: PropTypes.node.isRequired,
}


export default InputRange
