import axios from 'axios';
const { REACT_APP_BACKEND_URL: BACKEND_URL } = process.env;

const axiosInstance = axios.create({
	baseURL: `${BACKEND_URL}`
});

export default axiosInstance;
