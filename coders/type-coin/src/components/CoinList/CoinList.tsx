import * as s from './CoinList.style';
import { Link } from 'react-router-dom';
import { Loading } from '../Loading';
import { useFetchSlice } from '../../hooks';

interface ICoin {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
}

const CoinList = () => {
    const { isLoading, data } = useFetchSlice<ICoin[]>('allCoins', 'coins', 100);
    console.log(data);
    return isLoading ? (
        <Loading />
    ) : (
        <s.CoinList>
            {data?.slice(0, 100).map(({ id, name, symbol }) => (
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
