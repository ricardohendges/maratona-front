import { clientAPI } from '../configs/config'

export default class Dupla {
    static async getDuplas (data) {
        return new Promise((res, rej) => {
            clientAPI.get('/dupla', data)
                .then(processado => res(processado))
                .catch(err => rej(err.response))
        })
    }

    static async patchDuplas (data) {
        return new Promise((res, rej) => {
            clientAPI.patch('/dupla', data)
                .then(processado => res(processado))
                .catch(err => rej(err.response))
        })
    }
}