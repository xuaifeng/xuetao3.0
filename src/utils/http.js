import axios from 'axios'

const GET = ({url})=> {
  return new Promise((resolve, reject) => {
    axios({
      url
    })
    .then(result => {
      resolve(result)
    })
    .then(err => {
      reject(err)
    })
  })
}

export {
  GET
}