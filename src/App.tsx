import { Toaster } from 'sonner';

import { DEFAULT_TOAST_DURATION } from './config';
import { Router } from './routes';

function App() {
  return (
    <>
      <Toaster
        duration={DEFAULT_TOAST_DURATION}
        toastOptions={{
          className: 'bg-content px-4 py-3',
        }}
      />

      <Router />
    </>
  );
}

export default App;
