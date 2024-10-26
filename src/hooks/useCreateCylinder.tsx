import { useState } from 'react';
import { useMutation } from 'react-query';

import { CylinderResponseProps, RegisterCylinderProps } from '@/@types';
import { api } from '@/config';
import { Storage } from '@/helpers';

export function useCreateCylinder() {
  const [isCreateCylinderError, setIsCreateCylinderError] =
    useState<boolean>(false);

  async function fetchMutation(
    cylinder: RegisterCylinderProps,
  ): Promise<boolean> {
    const accessToken = Storage.getItem('token');
    const { data } = await api.post<CylinderResponseProps>('/gas', cylinder, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return !!data?.id;
  }

  const { isLoading: isCreatingCylinder, mutateAsync: createCylinder } =
    useMutation<boolean, Error, RegisterCylinderProps>({
      mutationKey: ['create_cylinder'],
      mutationFn: cylinder => fetchMutation(cylinder),
      onError: () => setIsCreateCylinderError(true),
    });

  return {
    isCreatingCylinder,
    isCreateCylinderError,
    createCylinder,
    setIsCreateCylinderError,
  };
}
