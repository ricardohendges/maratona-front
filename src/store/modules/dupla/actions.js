import Dupla from '@/services/dupla'
import * as types from './mutation-types'

export const doLogin = async ({ commit }, data) => {
    const request = await Dupla.doLogin(data)
    commit(types.SET_USER, request.data.duplas[0])
}

export const getDuplas = async ({ commit }, data) => {
    const request = await Dupla.getDuplas(data)
    commit(types.GET_DUPLAS, request.data.duplas)
}

export const getProfile = async ({ commit }) => {
    const request = await Dupla.getProfile()
    commit(types.SET_USER, request.data)
}

export const doLogout = async ({ commit }) => {
    await Dupla.doLogout()
    commit(types.SET_USER, null)
}