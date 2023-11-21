import api from 'api';
import { useQuery } from 'react-query';

const useItems = () => {
  const fetchItems = async () => {
    try {
      const services = await api.get('services');
      //const data = await templates.json();
    } catch (e) {
      return Promise.reject(e);
    }
  };

  return useQuery(['items'], fetchItems, {
    refetchOnWindowFocus: false,
  });
};

export default useItems;
