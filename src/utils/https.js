import axios from "axios";
import Cookies from "js-cookie";

const https = () => {
  const token = Cookies.get('token');

  return axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    timeout: 30000,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }
  });
}

export default https;
