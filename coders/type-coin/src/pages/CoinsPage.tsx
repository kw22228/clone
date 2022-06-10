import { Container } from '../styles/variable';
import { Header } from '../components/Header/';
import { CoinList } from '../components/CoinList';

interface IProps {
    toggleTheme: () => void;
}
const CoinsPage = ({ toggleTheme }: IProps) => {
    return (
        <Container>
            <Header title="COIN INFO" toggleTheme={toggleTheme} />
            <CoinList />
        </Container>
    );
};

export default CoinsPage;
