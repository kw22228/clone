import * as s from './CoinList.style';
import { Link } from 'react-router-dom';

const coins = [
    {
        id: 'btc-bitcoin',
        name: 'Bitcoin',
        symbol: 'BTC',
        rank: 1,
        is_new: false,
        is_active: true,
        type: 'coin',
    },
    {
        id: 'eth-ethereum',
        name: 'Ethereum',
        symbol: 'ETH',
        rank: 2,
        is_new: false,
        is_active: true,
        type: 'coin',
    },
    {
        id: 'hex-hex',
        name: 'HEX',
        symbol: 'HEX',
        rank: 3,
        is_new: false,
        is_active: true,
        type: 'token',
    },
];

const CoinList = () => {
    return (
        <s.CoinList>
            {coins.map(({ id, name }) => (
                <s.Coin>
                    <Link to={`/${id}`} key={id}>
                        {name} &rarr;
                    </Link>
                </s.Coin>
            ))}
        </s.CoinList>
    );
};

export default CoinList;
