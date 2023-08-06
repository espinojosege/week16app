import react from "react";

export default function Requests(props) {
  return (
    <table className="table table-dark table-striped table-hover table-sm align-middle table-bordered">
      <caption>Total Number of Requests: {props.array.length}</caption>
      <thead className="table-light">
        <tr>
          <th scope="col">City</th>
          <th scope="col">&deg;F</th>
          <th scope="col">Winds</th>
          <th scope="col">Condition</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody className="table-group-divider">
        {props.array.map((item, index) => (
          <tr key={`${index}${item.id}`} name={index} className="">
            <th scope="col">{item.name}</th>
            <td>
              {Math.trunc(item.temp)}
              <sup>&deg;F</sup>
            </td>
            <td>
              {Math.trunc(item.winds)}
              <sup>mph</sup>
            </td>
            <td>{item.condition}</td>
            <td>
              <button
                onClick={props.onClick}
                type="button"
                className="btn btn-secondary"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
