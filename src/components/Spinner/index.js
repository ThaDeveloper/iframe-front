import React from 'react';
import PropTypes from 'prop-types';


const getClassSize = (size) => {
  switch(size){
    case 'small': return "spinner-border-sm";
    default: return ""
  }
}

const Loader = ({ size, color }) => (
  <div className={`spinner-border ${getClassSize(size)} text-${color}`} role="status">
    <span className="sr-only">Loading...</span>
  </div>
);

Loader.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string
};

Loader.defaultProps = {
  size: "",
  color: "primary"
}

export default Loader;
