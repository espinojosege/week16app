import React from "react";

export default function PostForm(props) {
  return (
    <>
      <div className="input-group input-group-lg">
        <span className="input-group-text" id="CityName">
          City Name
        </span>
        <input
          type="text"
          className="form-control"
          aria-label="City Name Input"
          aria-describedby="CityName"
          value={props.cityInputValue}
          onChange={props.inputChange}
        ></input>
      </div>
    </>
  );
}
