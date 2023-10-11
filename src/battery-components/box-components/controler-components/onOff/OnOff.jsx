import "./OnOff.css"
import PropTypes from "prop-types";


const OnOff = ({ value, handleClickStatus,statusButton }) => {
  return (
    <div className="controls">
      <p>{value}</p>
      <div className="select" onClick={() => handleClickStatus(value)}>
        <div className={statusButton ? "active" : "inner"}></div>
      </div>
    </div>
  )
}

OnOff.propTypes = {
  value: PropTypes.node.isRequired,
  handleClickStatus: PropTypes.node.isRequired,
  statusButton: PropTypes.node.isRequired,
}

export default OnOff
