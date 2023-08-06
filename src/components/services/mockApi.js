const API_ENDPOINT =
  "https://64954eacb08e17c91791e500.mockapi.io/weatherRequest";

export default class MockApi {
  static getWeatherRequests = async () => {
    try {
      const resp = await fetch(API_ENDPOINT);
      const data = await resp.json();
      return data;
    } catch (e) {
      console.log("MockApi could not be reached", e);
    }
  };

  static deleteRequest = async (id) => {
    try {
      const resp = await fetch(`${API_ENDPOINT}/${id}`, {
        method: "DELETE",
      });
      return await resp.json();
    } catch (e) {
      console.log("Delete Method request has failed", e);
    }
  };

  static postRequest = async (object) => {
    try {
      const resp = await fetch(`${API_ENDPOINT}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(object),
      });
      return await resp.json();
    } catch (e) {
      console.log("Post request failed", e);
    }
  };

  static putRequest = async (id, object) => {
    try {
      const resp = await fetch(`${API_ENDPOINT}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(object),
      });
      return await resp.json();
    } catch (e) {
      console.log("Put request failed", e);
    }
  };
}
