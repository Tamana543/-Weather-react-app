import React from "react";

export default function MainDate({ Time }) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = days[Time.getDay()];
  const hours = Time.getHours();
  const minutes = Time.getMinutes();
  // minutes = minutes < 10 ? `0${minutes}` : minutes;

  return (
    <div>
      <p>{`${day} ${hours}:${minutes}`}</p>
    </div>
  );
}
