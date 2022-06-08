import { Outlet, useLocation, useParams } from 'react-router-dom';
import { CoinDetail } from '../components/CoinDetail';
import { Header } from '../components/Header';
import { Container } from '../styles/variable';

interface ParamsInterface {
    coinId: string;
}

interface LocationInterface {
    state: {
        coinName: string;
    };
}

const CoinDetailPage = () => {
    const { coinId } = useParams<keyof ParamsInterface>() as ParamsInterface;

    //Link에서 state를 태워서 보낸 값
    // const {
    //     state: { coinName },
    // } = useLocation() as LocationInterface;

    // console.log(coinName);

    return (
        <Container>
            <Header title={coinId} />
            <CoinDetail coinId={coinId} />

            <Outlet />
        </Container>
    );
};

export default CoinDetailPage;
