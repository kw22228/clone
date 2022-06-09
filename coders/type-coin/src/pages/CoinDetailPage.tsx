import { Outlet, useLocation, useParams } from 'react-router-dom';
import { CoinDetail } from '../components/CoinDetail';
import { Header } from '../components/Header';
import { Container } from '../styles/variable';

interface IParams {
    coinId: string;
}

const CoinDetailPage = () => {
    const { coinId } = useParams<keyof IParams>() as IParams;
    //Link에서 state를 태워서 보낸 값

    return (
        <Container>
            <Header title={coinId} coinId={coinId} />
            <CoinDetail coinId={coinId} />
            <Outlet />
        </Container>
    );
};

export default CoinDetailPage;
