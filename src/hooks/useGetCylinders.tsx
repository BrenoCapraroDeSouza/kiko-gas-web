import { useQuery } from 'react-query';

import { CylinderDTO } from '@/@types';
import { api } from '@/config';
import { Storage } from '@/helpers';

export function useGetCylinders() {
  async function fetchQuery(): Promise<CylinderDTO[]> {
    const accessToken = Storage.getItem('token');

    const { data } = await api.get<CylinderDTO[]>('/gas', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        page: 1,
        pageSize: 100,
      },
    });

    return data;
  }

  const {
    isLoading,
    isFetching,
    data: cylinders,
    refetch: refreshCylinders,
  } = useQuery({
    queryKey: ['cylinders'],
    initialData: [],
    refetchOnWindowFocus: 'always',
    refetchOnReconnect: 'always',
    queryFn: fetchQuery,
  });

  return {
    cylinders: cylinders || [],
    isCylindersLoading: isLoading || isFetching,
    refreshCylinders,
  };
}
