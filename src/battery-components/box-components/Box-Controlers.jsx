import "./Box-Controler-style.css"
import OnOff from "./controler-components/onOff/OnOff"
import InputRange from "./controler-components/inputRange/InputRange"
import { useValue } from "../../context/DataProvider"
import { useVolume } from "../../context/DataVolume";
import { useInitialButtonPower } from "../../context/valueButtonPower"

const BoxControlers = () => {
  //Button bank
  const {value, handleValue} = useValue()

  //Context volume
  const {valueVolume, handleVolume} = useVolume()

  //Context Button Power
  const {valueButtonPower, handleButtonPower} = useInitialButtonPower()

  return (
    <div className='controls-container'>

      {
        valueButtonPower 
        ? <OnOff 
            value={`Power: ${valueButtonPower}`} 
            handleClickStatus={handleButtonPower}
              statusButton={valueButtonPower} />
        : <OnOff 
            value={`Power: ${valueButtonPower}`} 
            handleClickStatus={handleButtonPower}
            statusButton={valueButtonPower} />
      }

      {
        valueButtonPower ? <p className="entry">{`Volume: ${valueVolume}`}</p> : <p className="entry">Off</p>
      }
       
      <InputRange 
        handleSoundVolume={handleVolume}
        value={valueVolume} />
      {
        value 
        ? <OnOff
            value="Smooth Piano Kit"
            statusButton={value}
            handleClickStatus={handleValue} />
        : <OnOff
            value= "Heater Kit"
            statusButton={value}
            handleClickStatus={handleValue} />
      }

    </div>
  )
}

export default BoxControlers
