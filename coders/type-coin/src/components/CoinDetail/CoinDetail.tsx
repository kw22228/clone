import { Loading } from '../Loading';
import { ICoinInfo, ICoinPrice, IProps } from './types';
import * as s from './CoinDetail.style';
import { Link, useMatch } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchData } from '../../api';

const CoinDetail = ({ coinId }: IProps) => {
    const priceMatch = useMatch('/:coinId/price');
    const chartMatch = useMatch('/:coinId/chart');

    const { isLoading: detailLoading, data: detailData } = useQuery<ICoinInfo | undefined>(
        ['detail', coinId],
        () => fetchData(`coins/${coinId}`)
    );
    const { isLoading: priceLoading, data: priceData } = useQuery<ICoinPrice | undefined>(
        ['price', coinId],
        () => fetchData(`tickers/${coinId}`)
    );

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
                        <div>OPEN SOURCE</div>
                        <div>{detailData?.open_source ? 'YES' : 'NO'}</div>
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
