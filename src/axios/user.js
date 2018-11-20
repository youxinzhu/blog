import axios from 'axios'

export default{
  login: () => {
    return new Promise((resolve, reject) => {
      axios.get('axios').then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  }
}
