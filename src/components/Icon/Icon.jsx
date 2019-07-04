import React      from 'react'
import PropTypes  from "prop-types"
import classNames from "classnames"

const allSizes = {
  xs: 'fa-xs',
  sm: 'fa-sm',
  md: 'fa-md',
  lg: 'fa-lg'
}

const Icon = ({ name, color, size }) => {
  const classes = classNames({
    [ name ]: name,
    [ allSizes[size] ]: allSizes[size]
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





