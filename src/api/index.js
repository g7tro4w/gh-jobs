import axios from 'axios'
import { POSITIONS_URL } from './urls'

export default {
    positions: {
        list(positionParams) {
            return new Promise((resolve, reject) => {
                axios({
                    method: 'GET',
                    url: POSITIONS_URL,
                    params: positionParams
                })
                .then((response) => {
                    console.log(response.data)
                })
                .catch((error) => {
                    reject(new Error(error))
                })
            })
        },
        read() {

        }
    }   
}