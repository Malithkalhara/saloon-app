import api from 'api';
import { useMutation, useQueryClient } from 'react-query';

const useCreateService = () => {
  const queryClient = useQueryClient();

  const createService = async (newServiceData) => {
    try {
      const createdService = await api.post('services', newServiceData);
      return createdService.data;
    } catch (error) {
      throw new Error(
        error.response ? error.response.data.message : 'Error creating service'
      );
    }
  };

  const mutation = useMutation(createService, {
    onSuccess: () => {
      // Invalidate and refetch the 'items' query after a successful mutation
      queryClient.invalidateQueries('services');
    },
  });

  return mutation;
};

export default useCreateService;
