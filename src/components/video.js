import React from "react";
import Finalproject from "../finalproject.mp4";
export default function Video() {
  return (
    <>
      <video controls src={Finalproject} width={`100%`}></video>
    </>
  );
}
