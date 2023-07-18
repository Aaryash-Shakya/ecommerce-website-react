import { API } from "../config";

//  for sign up
export const signUp = user =>{
    return fetch(`${API}/register`,{
        method: 'POST',
        headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(user)
        .then(res => {
            return res.json()
        })
        .catch(err => console.log(err))
    })
}