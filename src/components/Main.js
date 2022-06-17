// Import dependencies
import { useRef, useState, useEffect } from "react";
// 1. TODO - Import required model here
// e.g. import * as tfmodel from "@tensorflow-models/tfmodel";
import Webcam from "react-webcam";
// 2. TODO - Import drawing utility here
// e.g. import { drawRect } from "./utilities";

const Main = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const videoConstraints = {
    width: 700,
    height: 700,
    facingMode: "user",
  };

  return (
    <div className="h-screen inline-block">
      <div className="flex justify-center items-center">
        <Webcam
          className="h-screen"
          audio={false}
          mirrored={true}
          videoConstraints={videoConstraints}
        />
        <div className="h-screen">
          <h1 className="text-5xl text-mainTextC">Thank You!</h1>
        </div>
      </div>
    </div>
  );
};

export default Main;
