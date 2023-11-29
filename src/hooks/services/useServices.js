import api from 'api';
import { useQuery } from 'react-query';

const useServices = () => {
  const fetchServices = async () => {
    try {
      const services = await api.get('services');
      return services?.data;
      //const data = await templates.json();
    } catch (e) {
      return Promise.reject(e);
    }
  };

  return useQuery(['services'], fetchServices, {
    refetchOnWindowFocus: false,
  });
};

export default useServices;
