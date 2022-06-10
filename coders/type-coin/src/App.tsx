import { Router } from './router/index';
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { useCallback, useState } from 'react';
function App() {
    const [isDark, setIsDark] = useState(false);
    const toggleTheme = useCallback(() => setIsDark(prev => !prev), [isDark]);
    return (
        <>
            <ThemeProvider theme={isDark ? theme.darkTheme : theme.lightTheme}>
                <GlobalStyle />
                <Router toggleTheme={toggleTheme} />
            </ThemeProvider>
        </>
    );
}

export default App;
