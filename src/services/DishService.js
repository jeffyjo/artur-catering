import React from "react";

import Dish from "../components/Dish/Dish";

export async function getDishesAsync() {
  const url = "https://reqres.in/api/users";
  var response = await fetch(url);
  console.log(response);
  var resultJson = await response.json();
  console.log(resultJson.data);
  const dishes = Array.from(resultJson.data, (key, value) => key);
  console.log(`dishes: ${dishes}`);
  return dishes;
}

export function getDishes() {
  const url = "https://reqres.in/api/users";
  fetch(url)
    .then(response => response.json())
    .then(json => Array.from(json.data, (value, key) => value));
}
