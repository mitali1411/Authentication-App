import axios from "axios"

const API_URL = 'https://authentication-2-qgze.onrender.com/api/user'


// REGISTER
const register = async(formData) => {
    const response = await axios.post(API_URL + '/register', formData);
    localStorage.setItem('user', JSON.stringify(response.data));
    return response.data
}


// LOGIN
const login = async(formData) => {
    const response = await axios.post(API_URL + '/login', formData);
    localStorage.setItem('user', JSON.stringify(response.data));
    return response.data;
}

const authService = {
    register,
    login
};

export default authService;