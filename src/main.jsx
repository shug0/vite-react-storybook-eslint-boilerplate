import React from 'react';
import { createRoot } from 'react-dom/client';

import { QueryClient, QueryClientProvider } from 'react-query/';
import App from './App';

// react querie retry a lot of times your query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient} contextSharing>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
);
