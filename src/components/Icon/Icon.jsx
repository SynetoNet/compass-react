import React      from 'react'
import PropTypes  from "prop-types"
import classNames from "classnames"

const Icon = ({ name, color, size }) => {
  const classes = classNames({
    [ name ]: name,
    [ `fa-${size}` ]: size
  })

  return (
    <i
      className={ classes }
      style={ { color } }
    />
  )
}

Icon.propTypes = {
  name:  PropTypes.string.isRequired,
  color: PropTypes.string,
  size:  PropTypes.oneOf([ 'xs', 'sm', 'md', 'lg' ])
}

Icon.defaultProps = {
  size: 'lg'
}

export default Icon





