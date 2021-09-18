import { ThemeProvider } from '../styles/theme';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useEffect } from 'react';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,
      cacheTime: 1000 * 60 * 60,
      staleTime: 1000 * 60 * 5,
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default MyApp;
