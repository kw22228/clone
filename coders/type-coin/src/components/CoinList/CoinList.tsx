import * as s from './CoinList.style';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Loading } from '../Loading';
interface CoinInterface {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
}

const CoinList = () => {
    const [coins, setCoins] = useState<CoinInterface[]>([]);
    const [loading, setLoading] = useState(true);

    const getCoins = async () => {
        const res = await fetch('https://api.coinpaprika.com/v1/coins');
        const data = await res.json();
        setCoins(data.slice(0, 100));
        setLoading(false);
    };

    useEffect(() => {
        getCoins();
    }, []);

    return loading ? (
        <Loading />
    ) : (
        <s.CoinList>
            {coins.map(({ id, name, symbol }) => (
                <s.Coin key={id}>
                    <Link to={`/${id}`} state={{ coinName: name }} key={id}>
                        <s.CoinImage
                            src={`https://coinicons-api.vercel.app/api/icon/${symbol.toLowerCase()}`}
                        ></s.CoinImage>
                        {name}
                        &rarr;
                    </Link>
                </s.Coin>
            ))}
        </s.CoinList>
    );
};

export default CoinList;
