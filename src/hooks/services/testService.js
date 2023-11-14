import api from "api";

const test = async (username, password) => {
    try {
      const response = await api.get('entries');
      console.log(response);
    } catch (error) {
      throw error;
    }
  };

export default test;