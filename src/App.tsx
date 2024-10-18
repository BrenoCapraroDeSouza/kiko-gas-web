// import { id } from 'date-fns/locale';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Toaster } from 'sonner';

import { DEFAULT_TOAST_DURATION } from '@/config';
import { AuthProvider } from '@/contexts';
import { Router } from '@/routes';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster
        duration={DEFAULT_TOAST_DURATION}
        toastOptions={{
          className: 'bg-content px-4 py-3',
        }}
      />

      <AuthProvider>
        <Router />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
