import axios from 'axios'
import { POSITIONS_URL, POSITION_INFORMATION_URL } from './urls'

export default {
  positions: {
    /**
    * Gets list of jobs by parameters of search
    *
    * @param {Object} positionParams - search params object
    * @typedef {Object} positionParams
    * @property {String} description - A search term. Inputs in search field.
    * @property {String} location -  A city name, zip code, or other location search term.
    * @property {String} [lat] - A specific latitude.
    * @property {String} [long] - A specific longitude.
    * @property {Boolean} [full_time] - Is limit results to full time positions
    * @return {Promise} - Promise object with data or error
    */
    list (positionParams) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'GET',
          url: POSITIONS_URL,
          params: positionParams
        })
          .then((response) => {
            resolve(response.data)
          })
          .catch((error) => {
            reject(new Error(error))
          })
      })
    },
    /**
    * Gets list of jobs by parameters of search
    *
    * @param {String} id - id of single job position
    * @param {Boolean} markdown - Set to 'true' to get the description and how_to_apply fields as Markdown
    * @return {Promise} - Promise object with data or error
    */
    read (id, markdown = false) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'GET',
          url: `${POSITION_INFORMATION_URL}${id}.json`,
          params: {
            markdown
          }
        })
          .then((response) => {
            resolve(response.data)
          })
          .catch((error) => {
            reject(new Error(error))
          })
      })
    }
  }
}
