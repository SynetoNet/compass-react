import React, {useState, useEffect}  from 'react'
import {Form} from "../../../index"
import "./customFilter.scss"

export const ColumnFilter = (props) => {
  const {onFilter, column, filterOptions, filterDefault } = props

  const [selectedOption, setSelectedOption] = useState(undefined)

  useEffect(() => {
    if (filterDefault) setSelectedOption(filterDefault)
  }, [])

  useEffect(() => {
    onFilter(selectedOption)
  }, [selectedOption])

  const handleChange = (event) => {
    setSelectedOption(event.target.value)
  }

  return (
    <Form.Control
      as="select"
      onChange={handleChange}
      className="custom-filter"
      value={selectedOption}
      key={Math.random()}
    >
      <option value="">Select {column.text}</option>

      {
        filterOptions && filterOptions.length && filterOptions.map((option, index) => {
          return <option key={index} value={option.value}>{option.label}</option>
        })
      }
    </Form.Control>
  )
}
