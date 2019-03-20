import { STORAGE_KEY } from './const'

/**
 * Save data in sessionStorage
 * @param {object} json
 */
export const setStorage = json => (
    localStorage.setItem(STORAGE_KEY, jsonToStr(json))
)

/**
 * Get data from sessionStorage
 * @returns {json} cartItems
 */
export const getStorage = () => (
    strToJson(localStorage.getItem(STORAGE_KEY))
)

/**
 * Private method for converting string to json
 */
const strToJson = str => JSON.parse(str)

/**
 * Private method for converting json to string
 */
const jsonToStr = json => JSON.stringify(json)

