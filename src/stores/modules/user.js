import axios from '../../axios/index'

const user = {
  state: {
    name: '',

  },

  mutations: {
    SET_NAME: (state, name) => {
      state.name = name
    },
  },

  action: {
    Login: ({commit}, userInfo) => {
      const name = userInfo.name.trim()
      const password = userInfo.password.trim()
      return new Promise((resolve, reject) => {
        axios.doGet('/user/login', {name: name, password: password})
          .then(res => {
            commit('SET_NAME', res.data.userName)
            resolve(res.data)
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  }
}

export default user
