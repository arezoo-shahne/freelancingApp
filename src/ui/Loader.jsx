import { ThreeDots } from "react-loader-spinner";

function Loading({ width = "45", height = "20" }) {
  return (
    <ThreeDots
      height={height}
      width={width}
      radius={9}
      color="rgb(var(--color-primary-900))"
      wrapperStyle={{
        display: "flex",
        justifyContent: "center",
      }}
      visible={false}
    />
  );
}
export default Loading;