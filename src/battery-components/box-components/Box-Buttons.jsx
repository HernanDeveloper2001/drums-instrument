import "./Box-Button-style.css";
import Buttons from './buttons-components/Buttons';
import {useSelector} from "react-redux";
import { useValue } from "../../context/DataProvider";

const BoxButtons = () => {
  const accsesoriesState = useSelector(state => state.accessories)
  const {value} = useValue()
  const heaterKit = accsesoriesState[0]
  const SmoothPianoKit = accsesoriesState[1]

  return (
    <div className="pad-bank">
      {
        value 
        ? SmoothPianoKit.Piano.map(item => {
          return (
            <Buttons 
              key={item.id}
              letter={item.letter}
              audio={item.audio}
              title={item.title} />
          )
        })
        : heaterKit.Heater.map(item => {
          return (
            <Buttons 
              key={item.id}
              letter={item.letter}
              audio={item.audio}
              title={item.title} />
          )
        })
      }
    </div>
  )
}

export default BoxButtons
