import { Container } from '../styles/variable';
import { Header } from '../components/Header/';
import { CoinList } from '../components/CoinList';

const CoinsPage = () => {
    return (
        <Container>
            <Header title="COIN INFO" />
            <CoinList />
        </Container>
    );
};

export default CoinsPage;
