import { type UserRegister } from '../types'

export const getRegister = async (user: UserRegister) => {
  return await fetch('http://localhost:3000/', {
    method: 'POST',
    headers: {
      'Content-Type': 'Application/json'
    },
    body: JSON.stringify(user)
  })
    .then(async resp => {
      if (!resp.ok) throw new Error('algo salio mal')
      return await resp.json()
    })
    .then(json => {
      console.log({ json })
      return json
    })
    .catch(e => { console.log(e) })
}
