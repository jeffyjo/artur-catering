import { STORAGE_KEY } from "./const";

/**
 * Save data in sessionStorage
 * @param {object} json
 */
export const setStorage = json => {
  const storage = getStorage();
  if (Array.isArray(storage)) {
    const newStorage = storage.concat([json]);
    localStorage.setItem(STORAGE_KEY, jsonToStr(newStorage));
  } else {
    if (storage !== null) {
      const newStorage = [];
      newStorage.push(storage);
      newStorage.push(json);
      localStorage.setItem(STORAGE_KEY, jsonToStr(newStorage));
    } else {
      localStorage.setItem(STORAGE_KEY, jsonToStr(json));
    }
  }
};

export const removeFromStorage = json => {
  const storage = getStorage();
  if (Array.isArray(storage)) {
    storage.map((item, index) => {
      if (item.plan.name === json.plan.name) {
        delete storage[index];
        localStorage.setItem(STORAGE_KEY, jsonToStr(json));
      }
      return 1;
    });
  } else {
    localStorage.clear();
  }
};

export const updateStorage = (name, amount) => {
  const storage = getStorage();
  if (Array.isArray(storage)) {
  } else {
    if (findInStorage(name)) {
      storage.amount = amount;
      localStorage.setItem(STORAGE_KEY, jsonToStr(storage));
    }
  }
};

export function removeFromCartByName(name) {
  const storage = getStorage();
  if (Array.isArray(storage)) {
    storage.map(item => {
      if (item.plan.name === name) {
        localStorage.removeItem(item);
      }
    });
  } else {
    console.log(storage);
    if (storage.plan.name === name) {
      localStorage.removeItem(STORAGE_KEY, storage);
    }
    console.log(getStorage());
    return;
  }
}
/**
 * Get data from sessionStorage
 * @returns {json} cartItems
 */
export const getStorage = () => {
  return strToJson(localStorage.getItem(STORAGE_KEY));
};

export function findInStorage(name) {
  const json = getStorage();
  if (json === "undefined" || json === null) return false;
  if (Array.isArray(json)) {
    var res = json.map((item, index) => {
      if (item.plan.name === name) {
        return true;
      } else return false;
    });
    if (res.indexOf(true) > -1) return true;
    else return false;
  } else {
    if (json.plan.name === name) return true;
    else return false;
  }
}

/**
 * Private method for converting string to json
 */
const strToJson = str => JSON.parse(str);

/**
 * Private method for converting json to string
 */
const jsonToStr = json => JSON.stringify(json);
