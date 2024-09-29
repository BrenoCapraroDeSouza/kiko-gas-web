import { useState } from 'react';
import { useMutation } from 'react-query';

import { LoginDTOProps, LoginResponseDTOProps } from '@/@types';
import { api } from '@/config';

export function useLogin() {
  const [isLoginError, setIsLoginError] = useState<boolean>(false);

  async function fetchMutation(user: LoginDTOProps): Promise<void> {
    const { data } = await api.post<LoginResponseDTOProps>('/login', user);

    localStorage.setItem('token', JSON.stringify(data.token));
    localStorage.setItem('name', JSON.stringify(data.name));
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
