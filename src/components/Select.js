import React from "react";

export default function Select(props) {
  return (
    <div className="row my-1">
      <div className="col-sm-6">
        <select
          className="form-select"
          aria-label="Edit City"
          onChange={props.optionChange}
          value={props.option}
        >
          <option key={"-1Select"} value={-1}>
            Select City and Edit
          </option>
          {props.currentRequests.map((item, index) => (
            <option key={`${index}${item.id}`} value={index}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <div className="col-sm-6 d-grid">
        <button className="btn btn-secondary" onClick={props.editButton}>
          Edit
        </button>
      </div>
    </div>
  );
}
