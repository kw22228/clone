import { Loading } from '../Loading';
import { ICoinInfo, ICoinPrice, IProps } from './types';
import * as s from './CoinDetail.style';
import { Link, useMatch } from 'react-router-dom';
import { useFetchAll } from '../../hooks';
import { useEffect } from 'react';

interface IFetch<T> {
    isLoading: boolean;
    data: T;
}

const CoinDetail = ({ coinId, setCoinDetail }: IProps) => {
    const priceMatch = useMatch('/:coinId/price');
    const chartMatch = useMatch('/:coinId/chart');

    // const { isLoading: detailLoading, data: detailData } = useFetch<ICoinInfo>(
    //     ['detail', coinId],
    //     `coins/${coinId}`
    // );

    // const { isLoading: priceLoading, data: priceData } = useFetch<ICoinPrice>(
    //     ['price', coinId],
    //     `tickers/${coinId}`,
    //     { refetchInterval: 1000 * 10 }
    // );

    const result = useFetchAll([
        {
            queryKey: ['detail', coinId],
            path: `coins/${coinId}`,
        },
        {
            queryKey: ['price', coinId],
            path: `tickers/${coinId}`,
            options: { refetchInterval: 1000 * 10 },
        },
    ]);

    const { isLoading: detailLoading, data: detailData } = result[0] as IFetch<ICoinInfo>;
    const { isLoading: priceLoading, data: priceData } = result[1] as IFetch<ICoinPrice>;

    useEffect(() => {
        setCoinDetail(detailData);
    }, [detailLoading]);

    return detailLoading || priceLoading ? (
        <Loading />
    ) : (
        <>
            <s.Wrapper>
                <s.RoundBox>
                    <s.Item>
                        <div>Rank</div>
                        <div>{detailData?.rank}</div>
                    </s.Item>
                    <s.Item>
                        <div>SYMBOL</div>
                        <div>{detailData?.symbol}</div>
                    </s.Item>
                    <s.Item>
                        <div>Price</div>
                        <div>{priceData?.quotes.USD.price.toFixed(3)}</div>
                    </s.Item>
                </s.RoundBox>
                <s.Description>{detailData?.description}</s.Description>
                <s.RoundBox between={false}>
                    <s.Item>
                        <div>TOTAL SUPLY</div>
                        <div>{priceData?.total_supply}</div>
                    </s.Item>
                    <s.Item>
                        <div>MAX SUPLY</div>
                        <div>{priceData?.max_supply}</div>
                    </s.Item>
                </s.RoundBox>
            </s.Wrapper>

            <s.TabWrapper>
                <s.Tab isActive={chartMatch ? true : false}>
                    <Link to={`/${coinId}/chart`}>Chart</Link>
                </s.Tab>
                <s.Tab isActive={priceMatch ? true : false}>
                    <Link to={`/${coinId}/price`}>Price</Link>
                </s.Tab>
            </s.TabWrapper>
        </>
    );
};

export default CoinDetail;
