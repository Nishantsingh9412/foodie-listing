import axios from 'axios'

const API = axios.create({ baseURL: import.meta.env.VITE_API_URL })

// For authentication purpose  

// API.interceptors.request.use((req) => {
//     if (localStorage.getItem('Profile')) {
//         req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`;
//     }
//     return req;
// });

// End For Authentication Purpose

// Authentication API's 
export const SignupAPI = (newUser) => API.post('/auth/signup', newUser)

export const LoginAPI = (logindata) => API.post('/auth/login', logindata)

export const sendOTPAPI = (email) => API.post('/otp/send-otp', email)

// export const loginSignUpGoogleAPI = () => API.get('/auth/google/callback')

// export const validateOTPAPI = (validateOTPData) => API.post('/otp/validate-otp', validateOTPData)

// Weblist API's 
export const setWebListAPI = (newWebList) => API.post('/weblist/set-weblist', newWebList)

export const getWebListAPI = () => API.get('/weblist/get-weblist')

export const UpdateWebListAPI = (id, updatedWebList) => API.patch(`/weblist/update-weblist/${id}`, updatedWebList)

export const getWebListCreatedBy = (createdBy) => API.get(`/weblist/get-weblist/${createdBy}`)

export const deleteWebListAPI = (id) => API.delete(`/weblist/delete-weblist/${id}`)