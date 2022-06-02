import { useParams } from 'react-router-dom';

interface Params {
    coinId: string;
}

const CoinDetail = () => {
    const { coinId } = useParams<keyof Params>() as Params;
    return <h1>CoinDetail - {coinId}</h1>;
};

export default CoinDetail;
