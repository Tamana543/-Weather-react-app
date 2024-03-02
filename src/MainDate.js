import React from "react";

export default function MainDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.Time.getDay()];
  let Hours = props.Time.getHours();
  let Minutes = props.Time.getMinutes();
  if (Minutes < 10) {
    Minutes = `0${Minutes}`;
  }
  return `${day}  ${Hours}:${Minutes}`;
}
