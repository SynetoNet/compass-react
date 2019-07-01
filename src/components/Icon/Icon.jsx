import React      from 'react'
import PropTypes  from "prop-types"
import classNames from "classnames"

const Icon = ({ name, color, size }) => {
  const classes = classNames({
    [ name ]: name,
    [ size ]: size
  })

  console.log(classes)

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
  size:  PropTypes.oneOf([ 'fa-xs', 'fa-sm', 'fa-md', 'fa-lg' ])
}

Icon.defaultProps = {
  color: '#000000',
  size:  'fa-lg'
}

export default Icon





