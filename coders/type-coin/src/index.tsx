import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

//react-query initialize
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    // <React.StrictMode>
    <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme.darkTheme}>
            <ReactQueryDevtools initialIsOpen={false} />
            <App />
        </ThemeProvider>
    </QueryClientProvider>
    // </React.StrictMode>
);
