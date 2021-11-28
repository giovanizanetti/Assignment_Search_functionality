import axios from 'axios'
import { BASE_URL } from '../config/constants'

export const fetchSearchResults = (term, page) => {
  return axios
    .get(
      `${BASE_URL}questions/unanswered?pagesize=5&order=desc&sort=activity&site=stackoverflow&tagged=${term}&page=${page}`
    )
    .then((response) => response.data.items)
    .catch((error) => console.error(error))
}

export const fetchAutocompleteResults = (query) => {
  return axios
    .get(`${BASE_URL}tags?pagesize=10&order=desc&sort=popular&site=stackoverflow&inname=${query}`)
    .then((response) => response.data.items)
    .catch((error) => console.error(error))
}
