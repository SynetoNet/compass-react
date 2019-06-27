import React     from 'react'
import PropTypes from "prop-types"

const Icon = ({ type, color, size, rotate, animate }) => {
  return (
    <i
      className={ `${ type } ${ size } ${ rotate } ${ animate }` }
      style={ { color } }
    />
  )
}

Icon.propTypes = {
  type:    PropTypes.string.isRequired,
  color:   PropTypes.string,
  size:    PropTypes.oneOf([ 'fa-xs', 'fa-sm', 'fa-lg', 'fa-2x', 'fa-3x', 'fa-4x', 'fa-5x', 'fa-6x', 'fa-7x', 'fa-8x', 'fa-9x', 'fa-10x' ]),
  rotate:  PropTypes.oneOf([ 'fa-rotate-90', 'fa-rotate-180', 'fa-rotate-270', 'fa-flip-horizontal', 'fa-flip-vertical', 'fa-flip-both' ]),
  animate: PropTypes.oneOf([ 'fa-spin', 'fa-pulse' ])
}

export default Icon
