import { useState } from 'react';
import { useMutation } from 'react-query';

import { LoginDTOProps, LoginResponseDTOProps } from '@/@types';
import { api } from '@/config';
import { Storage } from '@/helpers';

export function useLogin() {
  const [isLoginError, setIsLoginError] = useState<boolean>(false);

  async function fetchMutation(user: LoginDTOProps): Promise<void> {
    const { data } = await api.post<LoginResponseDTOProps>('/login', user);

    Storage.setItem('token', JSON.stringify(data.token));
    Storage.setItem('token', JSON.stringify(data.name));
  }

  const { isLoading: isLoginLoading, mutateAsync: login } = useMutation<
    void,
    Error,
    LoginDTOProps
  >({
    mutationKey: ['login'],
    mutationFn: user => fetchMutation(user),
    onError: () => setIsLoginError(true),
  });

  return {
    isLoginLoading,
    isLoginError,
    login,
    setIsLoginError,
  };
}
