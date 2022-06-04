import { useParams } from 'react-router-dom';

interface Params {
    coinId: string;
}

const CoinDetailPage = () => {
    const { coinId } = useParams<keyof Params>() as Params;
    return <h1>CoinDetail - {coinId}</h1>;
};

export default CoinDetailPage;
