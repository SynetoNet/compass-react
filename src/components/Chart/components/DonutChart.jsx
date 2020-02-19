import React    from 'react'
import PieChart from "react-minimal-pie-chart"

export const DonutChart = (props) => {
  const {data, donutLabel, multipleLabels} = props

  return (
    <div className="donut-chart">
      <div className="donut-chart-border">
        <PieChart
          animate={false}
          animationDuration={500}
          animationEasing="ease-out"
          cx={50}
          cy={50}
          data={data}
          label={multipleLabels}
          labelPosition={65}
          lengthAngle={360}
          lineWidth={18}
          onClick={undefined}
          onMouseOut={undefined}
          onMouseOver={undefined}
          paddingAngle={0}
          radius={50}
          rounded={false}
          startAngle={0}
          viewBoxSize={[
            100,
            100
          ]}
        />
      </div>

      { donutLabel ? <div className="donut-chart-label">{donutLabel}</div> : null }
    </div>
  );
}
