import React, {useState} from "react";
import PropTypes         from "prop-types";
import PieChart          from 'react-minimal-pie-chart';
import "./Chart.scss"

const dataMock = [
  {
    color: '#1bba80',
    title: 'One',
    value: 60
  },
  {
    color: '#E1E8F1',
    title: 'Two',
    value: 20
  },
  {
    color: '#e76974',
    title: 'Three',
    value: 20
  }
]

const Chart = (props) => {
  const [data, setData] = useState(
    dataMock.map(entry => ({
      ...entry,
      ...{ style: { strokeWidth: 6 } },
    }))
  )

  const onMouseOver = (event, propsData, index) => {
    const dataSet = propsData.map((entry, i) => {
      return i === index
             ? {
          ...entry,
          color: 'grey',
        }
             : entry;
    });

    setData(dataSet);
  }

  const onMouseOut = (event, propsData, index) => {
    const dataSet = propsData.map((entry, i) => {
      return i === index
             ? {
          ...entry,
          color: dataMock[index].color,
        }
             : entry;
    });

    setData(dataSet);
  }

  return (
    <PieChart
      animate={false}
      animationDuration={500}
      animationEasing="ease-out"
      cx={50}
      cy={50}
      data={data}
      label
      labelPosition={70}
      lengthAngle={360}
      lineWidth={15}
      onClick={undefined}
      onMouseOut={(event, propsData, index) => onMouseOut(event, propsData, index)}
      onMouseOver={(event, propsData, index) => onMouseOver(event, propsData, index)}
      paddingAngle={0}
      radius={50}
      rounded={false}
      startAngle={0}
      viewBoxSize={[
        100,
        100
      ]}
    />
  );
};

Chart.propTypes = {
  type: PropTypes.string,
};

Chart.defaultProps = {};

export default Chart;
