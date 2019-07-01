import axios from 'axios'
import { POSITIONS_URL, POSITION_INFORMATION_URL } from './urls'

export default {
  positions: {
    list (positionParams) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'GET',
          url: POSITIONS_URL,
          params: positionParams,
          timeout: 10000
        })
          .then((response) => {
            resolve(response.data)
          })
          .catch((error) => {
            reject(new Error(error))
          })
      })
    },
    read (id) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'GET',
          url: `${POSITION_INFORMATION_URL}${id}.json`,
          params: {
            id
          },
          timeout: 10000
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
