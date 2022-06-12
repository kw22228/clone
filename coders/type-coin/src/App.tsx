import { Router } from './router/index';
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { useRecoilValue } from 'recoil';
import { isDarkAtom } from './recoil/atoms/';

function App() {
    const isDark = useRecoilValue(isDarkAtom);
    return (
        <>
            <ThemeProvider theme={isDark ? theme.darkTheme : theme.lightTheme}>
                <GlobalStyle />
                <Router />
            </ThemeProvider>
        </>
    );
}

export default App;
