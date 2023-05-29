import React from 'react'
import PropTypes from 'prop-types';

const Picture = ({normal,children}) => {
    console.log(children)
  return (
    <div>
        <h2>{normal}</h2>
        <img src={children} alt="" />

    </div>
  )
}
Picture.defaultProps={
    children:"https://c8.alamy.com/compfr/mrpm90/jeune-homme-cartoon-mrpm90.jpg"
}
Picture.propTypes = {
    children: PropTypes.string
  };

export default Picture