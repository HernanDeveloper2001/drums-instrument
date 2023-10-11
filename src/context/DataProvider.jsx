import {createContext, useContext, useState} from "react";
import PropTypes from "prop-types";


const InitialValue = createContext()

export const DataProvider = ({ children }) => {


  const [value, setValue] = useState(false);

  function handleValue() {
    setValue(!value)
  }

  return (
    <InitialValue.Provider value={{value, handleValue}}>
      {children}
    </InitialValue.Provider>
  )
}

DataProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export function useValue() {
  return useContext(InitialValue);
}