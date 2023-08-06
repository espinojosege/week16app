import React from "react";

export default function LocationRequests(props) {
  return (
    <>
      {props.cityRequest.map((item, index) => (
        <div
          className="form-check form-check-inline"
          key={`${item.name}${index}`}
        >
          <input
            className="form-check-input"
            type="radio"
            name={`${item.state}${item.name}`}
            id={`${index}${item.state}`}
            value={index}
            onChange={props.radioOptionChange}
            checked={props.selected === `${index}`}
          ></input>
          <label className="form-check-label" htmlFor={`${index}${item.state}`}>
            City: {item.name}
            <ul>
              <li>Country: {item.country}</li>
              <li>State: {item.state}</li>
            </ul>
          </label>
        </div>
      ))}
    </>
  );
}
