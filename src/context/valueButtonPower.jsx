import {createContext, useContext, useState} from "react";
import PropTypes from "prop-types";


const initialButtonPower = createContext()

export const DataButtonPower = ({ children }) => {

  const [valueButtonPower, setValueButtonPower] = useState(true);

  function handleButtonPower() {
    setValueButtonPower(!valueButtonPower)
  }

  return (
    <initialButtonPower.Provider value={{valueButtonPower, handleButtonPower}}>
      {children}
    </initialButtonPower.Provider>
  )
}

DataButtonPower.propTypes = {
  children: PropTypes.node.isRequired
}

export function useInitialButtonPower() {
  return useContext(initialButtonPower);
}