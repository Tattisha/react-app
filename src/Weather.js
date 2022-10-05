import React from "react";
import axios from "axios";
import { Oval } from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.name} is ${response.data.main.temp} C`
    );
  }
  let apiKey = "e5329350d8d59ba6afe48bd7271155da";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <Oval
      ariaLabel="loading-indicator"
      height={100}
      width={100}
      strokeWidth={5}
      strokeWidthSecondary={1}
      color="blue"
      secondaryColor="white"
    />
  );
}
