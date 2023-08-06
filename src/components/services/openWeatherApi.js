const openapikey = "bba16a2689ade1949b15147c99f08b22";
const coordinatesApi = `https://api.openweathermap.org/geo/1.0/direct?q=`;
const weatherApi = `https://api.openweathermap.org/data/2.5/weather?`;

export default class openAPI {
  static getCoordinates = async (city) => {
    try {
      const resp = await fetch(
        `${coordinatesApi}/${city}&limit=5&appid=${openapikey}`
      );
      return await resp.json();
    } catch (e) {
      console.log("Retrieving city coordinates failed.", e);
    }
  };

  static getWeather = async (lat, lon) => {
    try {
      const resp = await fetch(
        `${weatherApi}lat=${lat}&lon=${lon}&appid=${openapikey}&units=imperial`
      );
      return await resp.json();
    } catch (e) {
      console.log("Retrieving Weather has failes.", e);
    }
  };
}
