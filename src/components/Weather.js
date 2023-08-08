import React from "react";
import { useState, useEffect } from "react";
import MockApi from "./services/mockApi";
import openWeather from "./services/openWeatherApi";
import Requests from "./Requests";
import openAPI from "./services/openWeatherApi";
import LocationRequests from "./locationRequest";
import PostForm from "./Form";
import Select from "./Select";

export default function Weather(props) {
  const [weatherRequest, setWeatherRequest] = useState([]);
  const [inputValue, setinputValue] = useState("");
  const [coordRequest, setCoordRequests] = useState([]);
  const [radioSelected, setRadioSelected] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const M_Api = MockApi;
  const Open_Api = openWeather;

  useEffect(() => {
    M_Api.getWeatherRequests().then((data) => {
      setWeatherRequest(data);
      //console.log(data);
    });
  }, []);

  function handleInputChange(event) {
    console.log(event.target.value);
    setinputValue(event.target.value);
    openAPI.getCoordinates(event.target.value).then((data) => {
      setCoordRequests(data);
      console.log(data);
    });
  }

  function handleInputChangeButton(event) {
    let locationLat = coordRequest[radioSelected].lat;
    let locationLng = coordRequest[radioSelected].lon;
    //console.log(coordRequest[radioSelected].name, lat, lon);
    let temp = [...weatherRequest];
    Open_Api.getWeather(locationLat, locationLng).then((data) => {
      console.log(data);
      console.log(data.main.temp, data.weather[0].description);
      setRadioSelected("");
      setCoordRequests([]);
      setinputValue("");
      let newObj = {
        name: data.name,
        temp: data.main.temp,
        winds: data.wind.speed,
        condition: data.weather[0].description,
        lat: locationLat,
        lng: locationLng,
      };
      console.log(newObj);

      M_Api.postRequest(newObj).then((data) => {
        newObj = data;

        temp.push(newObj);
        setWeatherRequest(temp);
        console.log(data);
      });
    });
  }

  function handleDeleteRequest(event) {
    let temp = [...weatherRequest];
    let index = event.target.parentNode.parentNode.getAttribute("name");
    let id = temp[index].id;
    console.log(temp);
    console.log(index, id);
    temp.splice(index, 1);
    console.log(temp);
    setWeatherRequest(temp);
    M_Api.deleteRequest(id).then((data) => console.log(data));
  }

  function radioOptionChange(event) {
    setRadioSelected(event.target.value);
    console.log(coordRequest[event.target.value]);
  }

  function handleOptionChange(event) {
    setSelectedValue(event.target.value);
    console.log(event.target.value);
  }

  function handleEditButton(event) {
    console.log(weatherRequest[selectedValue]);
    let id = weatherRequest[selectedValue].id;
    let latt = coordRequest[radioSelected].lat;
    let lon = coordRequest[radioSelected].lon;
    //console.log(coordRequest[radioSelected].name, lat, lon);
    Open_Api.getWeather(latt, lon).then((data) => {
      console.log(data);
      console.log(data.main.temp, data.weather[0].description);
      setRadioSelected("");
      setCoordRequests([]);
      setinputValue("");
      setSelectedValue("-1");

      let newObj = {
        name: data.name,
        temp: data.main.temp,
        winds: data.wind.speed,
        condition: data.weather[0].description,
        lat: latt,
        lng: lon,
      };
      console.log(newObj);

      let temp = [...weatherRequest];

      temp[selectedValue] = newObj;
      setWeatherRequest(temp);

      M_Api.putRequest(id, newObj).then((data) => console.log(data));
    });
  }

  return (
    <div className="row">
      <div className="col-12">
        <h2>Weather Request by City Name.</h2>
      </div>
      <div className="col-sm-12">
        <PostForm cityInputValue={inputValue} inputChange={handleInputChange} />
      </div>
      <div className="col-sm-12">
        <LocationRequests
          cityRequest={coordRequest}
          radioOptionChange={radioOptionChange}
          selected={radioSelected}
        />
      </div>
      <div className="col-12 d-grid gap-2 my-2">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleInputChangeButton}
        >
          Create Request
        </button>
      </div>
      <div className="col-12">
        <Select
          currentRequests={weatherRequest}
          optionChange={handleOptionChange}
          option={selectedValue}
          editButton={handleEditButton}
        />
      </div>
      <div className="col-12 table-responsive">
        <Requests array={weatherRequest} onClick={handleDeleteRequest} />
      </div>
    </div>
  );
}
