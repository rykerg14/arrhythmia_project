/* App.js */
import React, { PureComponent } from "react";
import CanvasJSReact from "./canvasjs.stock.react";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSStockChart = CanvasJSReact.CanvasJSStockChart;

class Chart extends PureComponent {
  render() {
    const options = {
      animationEnabled: true,
      exportEnabled: true,
      charts: [
        {
          axisX: {
            title: "Time (s)",
            crosshair: {
              enabled: true,
              snapToDataPoint: true,
            },
            stripLines: this.props.predictions,
          },
          axisY: {
            title: "Measurement (hz)",
            minimum: -1,
            maximum: 2.5,
            interval: 0.25,
            crosshair: {
              enabled: true,
            },
          },
          data: [
            {
              type: "scatter",
              markerSize: 8,
              toolTipContent: "{x} s: {y} hz, Annotation: {label}",
              dataPoints: this.props.annotations,
              color: "green",
            },
            {
              type: "scatter",
              dataPoints: this.props.predictData,
              // Doesn't actually work :(
              indexLabelOrientation: "horizontal",
            },
            {
              type: "spline",
              toolTipContent: "{x} s: {y} hz",
              dataPoints: this.props.data,
              color: "#4F81BC",
            },
          ],
        },
      ],
      rangeSelector: {
        inputFields: {
          valueFormatString: "###0",
        },

        buttons: [
          {
            label: "5",
            range: 5,
            rangeType: "number",
          },
          {
            label: "10",
            range: 10,
            rangeType: "number",
          },
          {
            label: "20",
            range: 20,
            rangeType: "number",
          },
          {
            label: "All",
            rangeType: "all",
          },
        ],
      },
    };
    const containerProps = {
      width: "100%",
      height: "450px",
      margin: "auto",
    };
    return (
      <div>
        <div>
          <CanvasJSStockChart
            containerProps={containerProps}
            options={options}
          />
        </div>
      </div>
    );
  }
}

export default Chart;
