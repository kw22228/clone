import { Outlet, useLocation, useParams } from 'react-router-dom';
import { CoinDetail } from '../components/CoinDetail';
import { Header } from '../components/Header';
import { Container } from '../styles/variable';

interface IParams {
    coinId: string;
}

interface ILocation {
    state: {
        coinName: string;
    };
}

const CoinDetailPage = () => {
    const { coinId } = useParams<keyof IParams>() as IParams;
    //Link에서 state를 태워서 보낸 값
    const {
        state: { coinName },
    } = useLocation() as ILocation;

    return (
        <Container>
            <Header title={coinName} />
            <CoinDetail coinId={coinId} />

            <Outlet />
        </Container>
    );
};

export default CoinDetailPage;
