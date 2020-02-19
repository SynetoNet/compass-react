import React          from "react";
import PropTypes      from "prop-types";
import { DonutChart } from "./components/DonutChart"
import "./Chart.scss"

const Chart = (props) => {
  const {type, data, donutLabel, multipleLabels} = props

  switch (type) {
    case 'donut':
      return <DonutChart data={data} donutLabel={donutLabel} multipleLabels={multipleLabels} />
    default:
      return null
  }
};

Chart.propTypes = {
  /**
   * [
   {
                color: '#1bba80',
                value: 60
            },
   {
                color: '#E1E8F1',
                value: 20
            },
   {
                color: '#e76974',
                value: 20
            }
   ]
   */
  data: PropTypes.array,
  type: PropTypes.oneOf(["donut"]),
  donutLabel: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
  multipleLabels: PropTypes.bool
};

Chart.defaultProps = {
  multipleLabels: false
};

export default Chart;
