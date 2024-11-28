import { useState } from 'react';
import { useMutation } from 'react-query';

import { CylinderResponseProps, EditCylinderProps } from '@/@types';
import { api } from '@/config';
import { Storage } from '@/helpers';

export function useEditCylinder() {
  const [isEditCylinderError, setIsEditCylinderError] =
    useState<boolean>(false);

  async function fetchMutation(cylinder: EditCylinderProps): Promise<boolean> {
    const accessToken = Storage.getItem('token');
    const { data } = await api.patch<CylinderResponseProps>('/gas', cylinder, {
      params: {
        id: cylinder.id,
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return !!data?.id;
  }

  const { isLoading: isEditingCylinder, mutateAsync: editCylinder } =
    useMutation<boolean, Error, EditCylinderProps>({
      mutationKey: ['edit_cylinder'],
      mutationFn: cylinder => fetchMutation(cylinder),
      onError: () => setIsEditCylinderError(true),
    });

  return {
    isEditingCylinder,
    isEditCylinderError,
    editCylinder,
    setIsEditCylinderError,
  };
}
