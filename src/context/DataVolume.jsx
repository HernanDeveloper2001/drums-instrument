import {createContext, useContext, useState} from "react";
import PropTypes from "prop-types";


const initialVolume = createContext()

export const DataVolume = ({ children }) => {

  const [valueVolume, setValueVolume] = useState("0");

  function handleVolume({target}) {
    const {value} = target;
    setValueVolume(value);
  }

  return (
    <initialVolume.Provider value={{valueVolume, handleVolume}}>
      {children}
    </initialVolume.Provider>
  )
}

DataVolume.propTypes = {
  children: PropTypes.node.isRequired
}

export function useVolume() {
  return useContext(initialVolume);
}