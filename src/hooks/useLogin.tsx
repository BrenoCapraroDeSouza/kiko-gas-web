import Cookies from 'js-cookie';
import { useState } from 'react';
import { useMutation } from 'react-query';

import { LoginDTOProps, LoginResponseDTOProps } from '@/@types';
import { api } from '@/config';

export function useLogin() {
  const [isLoginError, setIsLoginError] = useState<boolean>(false);

  async function fetchMutation(
    user: LoginDTOProps,
  ): Promise<LoginResponseDTOProps> {
    const { data } = await api.post<LoginResponseDTOProps>('/login', user);

    Cookies.set('token', data.token, { expires: 7, path: '/' });
    Cookies.set('name', data.name, { expires: 7, path: '/' });

    return data;
  }

  const { isLoading: isLoginLoading, mutateAsync: login } = useMutation<
    LoginResponseDTOProps | Error,
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
