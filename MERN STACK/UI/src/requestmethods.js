import axios from 'axios';


const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNzNkNjdmYjNmNGVmNzk3YjczY2Q1OSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MDM0ODE0NywiZXhwIjoxNjcwNjA3MzQ3fQ.Jgouh0JO0KLqo4zYIJZrKuLh_vXQSO-UVZBCmqOGiRk"

export const  publicrequest =  axios.create({
    baseURL : BASE_URL,
})

export const  userrequest =  axios.create({
    baseURL : BASE_URL,
    header : {token : `bearer ${TOKEN}`},
})
