import * as s from './Header.style';

interface HeaderProps {
    title: string;
}

const Header = ({ title }: HeaderProps) => {
    return (
        <s.Header>
            <s.Title>{title}</s.Title>
        </s.Header>
    );
};

export default Header;
