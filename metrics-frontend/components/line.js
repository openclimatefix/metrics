import { ResponsiveLine } from "@nivo/line";

const TICK_COLOR = "rgb(156, 163, 175)"; //tw-gray-400
const LINE_COLOR = "rgb(0, 0, 0)"; //tw-yellow-400

const MyResponsiveLine = ({ data }) => (
  <ResponsiveLine
    data={data}
    theme={{
      textColor: TICK_COLOR,
      axis: {
        ticks: {
          line: {
            stroke: TICK_COLOR,
          },
        },
      },
    }}
    margin={{ top: 5, right: 5, bottom: 25, left: 35 }}
    xScale={{
      type: "time",
      format: "%Y-%m-%d",
      useUTC: false,
      precision: "day",
    }}
    xFormat="time:%Y-%m-%d"
    yScale={{
      type: "linear",
      min: "auto",
      max: "auto",
      stacked: true,
    }}
    // curve="natural"
    axisBottom={{
      format: "%b",
      tickSize: 0,
      tickValues: 5,
    }}
    axisLeft={{
      tickSize: 0,
      tickValues: 5,
    }}
    lineWidth={3}
    enableGridX={false}
    enableGridY={false}
    colors={LINE_COLOR}
    enablePoints={false}
    useMesh={true}
  />
);

export default MyResponsiveLine;
