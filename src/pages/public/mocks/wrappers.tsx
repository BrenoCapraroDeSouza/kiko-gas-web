import { PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

export function QueryClientWrapperSut({
  children,
}: Required<PropsWithChildren>) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
