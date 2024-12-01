import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';

import { CylinderResponseProps, EditCylinderProps } from '@/@types';
import { api } from '@/config';
import { Storage } from '@/helpers';

export function useEditCylinder() {
  const queryClient = useQueryClient();

  const [isEditCylinderError, setIsEditCylinderError] =
    useState<boolean>(false);

  async function fetchMutation(
    cylinder: EditCylinderProps,
  ): Promise<CylinderResponseProps> {
    const accessToken = Storage.getItem('token');
    const { data } = await api.patch<CylinderResponseProps>(
      `/gas/${cylinder.id}`,
      cylinder,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    return data;
  }

  const { isLoading: isEditingCylinder, mutateAsync: editCylinder } =
    useMutation<CylinderResponseProps, Error, EditCylinderProps>({
      mutationKey: ['edit_cylinder'],
      mutationFn: cylinder => fetchMutation(cylinder),
      onSuccess: cylinder => {
        queryClient.setQueryData<CylinderResponseProps[]>(
          ['cylinders'],
          previousCylinders => {
            if (!previousCylinders) return [cylinder];

            return previousCylinders.map(existingCylinder =>
              existingCylinder.id === cylinder.id ? cylinder : existingCylinder,
            );
          },
        );
      },
      onError: () => setIsEditCylinderError(true),
    });

  return {
    isEditingCylinder,
    isEditCylinderError,
    editCylinder,
    setIsEditCylinderError,
  };
}
