import axios from 'axios'

export const instans =  axios.create({
    withCredential: true,
    baseURL: 'http://localhost:8050',
    headers: {
        'Content-Type': 'application/json',
    }
})