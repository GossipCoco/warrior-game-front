import AuthService from '../services/auth.service'

const user = JSON.parse(localStorage.getItem('user'))
const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null }
// console.log(initialState)
export const auth = {
  namespaced: true,
  state: initialState,
  actions: {
    login ({ commit }, userId) {
      return AuthService.login(userId).then(
        user => {
          if (user.isSuccess) {
            console.log('loginSuccess')
            commit('loginSuccess', user)
            return Promise.resolve(user)
          } else {
            console.log('loginFailure')
            commit('loginFailure')
            return Promise.reject(user)
          }
        },
        error => {
          console.log(error)
          console.log('loginFailure')
          commit('loginFailure')
          return Promise.reject(error)
        }
      )
    },
    refreshToken({ commit }, accessToken) {
      commit('refreshToken', accessToken);
    },
    logout ({ commit }) {
      AuthService.logout()
      commit('logout')
    },
    allUsers ({ commit }) {
      return AuthService.allUsers().then(
        users => {
          console.log(users)
          return Promise.resolve(users)
        },
        error => {
          console.log('loginFailure')
          commit('loginFailure')
          return Promise.reject(error)
        }
      )
    },
  },
  mutations: {
    loginSuccess (state, user) {
      state.status.loggedIn = true
      state.user = user
    },
    loginFailure (state) {
      state.status.loggedIn = false
      state.user = null
    },
    logout (state) {
      state.status.loggedIn = false
      state.user = null
    },
    refreshToken(state, accessToken) {
      state.status.loggedIn = true;
      state.user = { ...state.user, accessToken: accessToken };
    }
  }
}