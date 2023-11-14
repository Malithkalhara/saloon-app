import api from "api";

const login = async (username, password) => {
    try {
      const response = await api.post('auth/login', {
        username,
        password,
      });
      return response?.data;
    } catch (error) {
      console.log(error);
    }
  };

export default login;