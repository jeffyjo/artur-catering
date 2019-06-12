import { STORAGE_KEY } from "./const";

/**
 * Save data in sessionStorage
 * @param {object} json
 */
export const setStorage = json => {
  console.log(json);
  localStorage.setItem(STORAGE_KEY, jsonToStr(json));
};

export const removeFromStorage = json => {
  localStorage.removeItem(STORAGE_KEY, jsonToStr(json));
};

/**
 * Get data from sessionStorage
 * @returns {json} cartItems
 */
export const getStorage = () => strToJson(localStorage.getItem(STORAGE_KEY));

export const findInStorage = name => {
  const json = strToJson(localStorage.getItem(STORAGE_KEY));
  console.log();
  if (json === null) return false;

  if (Array.isArray(json)) {
    json.map((item, index) => {
      if (item.plan.name === name) return true;
      else return false;
    });
  } else {
    console.log(json);
    if (json.plan.name === name) return true;
    else return false;
  }
};

/**
 * Private method for converting string to json
 */
const strToJson = str => JSON.parse(str);

/**
 * Private method for converting json to string
 */
const jsonToStr = json => JSON.stringify(json);
