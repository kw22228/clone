import { Outlet, useParams } from 'react-router-dom';
import { CoinDetail } from '../components/CoinDetail';
import { Header } from '../components/Header';
import { Container } from '../styles/variable';

interface IParams {
    coinId: string;
}

const CoinDetailPage = () => {
    const { coinId } = useParams<keyof IParams>() as IParams;

    return (
        <Container>
            <Header title={coinId.split('-')[1].toUpperCase()} coinId={coinId} />
            <CoinDetail coinId={coinId} />
            <Outlet context={{ coinId }} />
        </Container>
    );
};

export default CoinDetailPage;
