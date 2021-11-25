import axios from 'axios'
import { BASE_URL } from '../config/constants'

export const getSearchResults = (tag) => {
  axios
    .get(`${BASE_URL}tag=${tag}`)
    // .then((response) => (this.response = response.data.items.map((item) => item.title)))
    .then((response) => response.data.items)
    .catch((error) => console.error(error))
    .finally(() => console.log('FINALLY'))
}

export const getAutoCompleteResults = (inname) => {
  axios
    .get(`${BASE_URL}inname=${inname}`)
    .then((response) => (this.response = response.data.items.map((item) => item.title)))
    // .then((response) => response.data.items)
    .catch((error) => console.error(error))
    .finally(() => console.log('FINALLY'))
}
