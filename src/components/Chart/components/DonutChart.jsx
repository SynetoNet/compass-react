import React    from "react"
import { PieChart } from "react-minimal-pie-chart"

export const DonutChart = (props) => {
  const {data, donutLabel, multipleLabels} = props

  const renderLabel = (props) => {
    const { dataEntry, dx, dy, textAnchor, x, y } = props;
    
    return (
      <text
        text-anchor={textAnchor}
        dominant-baseline="middle"
        fill={dataEntry.color}
        x={x}
        y={y}
        dx={dx}
        dy={dy}
      >
        {dataEntry.value}
      </text>
    );
  }

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
          label={multipleLabels ? renderLabel : null}
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
