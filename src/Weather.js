import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    alert(`It is in Paris ${response.data.main.temp} C`);
  }
  let apiKey = "e5329350d8d59ba6afe48bd7271155da";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return <h2>Hello weather forecast</h2>;
}
