import { useMatch } from 'react-router-dom';
import * as s from './Header.style';

interface IHeader {
    title: string;
}

const Header = ({ title }: IHeader) => {
    const homeMatch = useMatch('/');
    return (
        <s.Header>
            <s.Title>{title}</s.Title>
            {!homeMatch && <s.HomeLink to="/">Home</s.HomeLink>}
        </s.Header>
    );
};

export default Header;
