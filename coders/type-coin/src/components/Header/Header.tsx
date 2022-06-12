import { useMatch } from 'react-router-dom';
import * as s from './Header.style';
import { Helmet } from 'react-helmet';
import { useRecoilState } from 'recoil';
import { isDarkAtom } from '../../recoil/atoms';

interface IHeader {
    title?: string;
    coinId?: string;
    symbol?: string | undefined;
}

const Header = ({ title, coinId, symbol }: IHeader) => {
    const homeMatch = useMatch('/');
    const [isDark, setIsDark] = useRecoilState(isDarkAtom);
    const toggleTheme = () => setIsDark(prev => !prev);
    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <s.Header>
                <s.DarkBtn onClick={toggleTheme}>{isDark ? 'Light' : 'Dark'}</s.DarkBtn>
                {symbol && (
                    <img
                        style={{ width: 35, height: 35, marginRight: '10px' }}
                        src={`https://coinicons-api.vercel.app/api/icon/${symbol.toLowerCase()}`}
                    />
                )}
                <s.Title>{title}</s.Title>
                {!homeMatch && title && <s.CustomLink to="/">Back</s.CustomLink>}
            </s.Header>
        </>
    );
};

export default Header;
