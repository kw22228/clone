import { useEffect } from 'react';
import { useQueryClient } from 'react-query';
import { useMatch } from 'react-router-dom';
import * as s from './Header.style';

interface IHeader {
    title: string;
    coinId?: string;
}

const Header = ({ title, coinId }: IHeader) => {
    const homeMatch = useMatch('/');

    const queryClient = useQueryClient();

    useEffect(() => {
        console.log(queryClient.getQueryData(['detail', coinId]));
    });
    return (
        <s.Header>
            <s.Title>{title}</s.Title>
            {!homeMatch && <s.HomeLink to="/">Home</s.HomeLink>}
        </s.Header>
    );
};

export default Header;
