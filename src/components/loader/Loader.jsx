import ReactDOM from "react-dom";

const Loader = () => {
  return ReactDOM.createPortal(
    <div
      className="overlay"
      style={{
        backdropFilter: "saturate(100%) blur(1rem)",
        zIndex: "999",
      }}
    >
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-semibold mb-4 text-center">
          {" "}
          Please wait , This might take a while
        </h1>
        <div className="loader"></div>
      </div>
    </div>,
    document.getElementById("loader")
  );
  // return (
  // 	<div className="overlay">
  // 		<div class="loader"></div>
  // 	</div>
  // );
};

export default Loader;
