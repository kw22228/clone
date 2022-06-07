import { useEffect, useState } from 'react';
import { Loading } from '../Loading';
import { ICoinInfo, ICoinPrice, IProps } from './types';
import * as s from './CoinDetail.style';

const CoinDetail = ({ coinId }: IProps) => {
    const [loading, setLoading] = useState(true);
    const [coinInfoData, setCoinInfoData] = useState<ICoinInfo>();
    const [coinPriceData, setCoinPriceData] = useState<ICoinPrice>();

    useEffect(() => {
        (async () => {
            const infoData = await (
                await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
            ).json();
            const priceData = await (
                await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
            ).json();

            setCoinInfoData(infoData);
            setCoinPriceData(priceData);
            setLoading(false);
            console.log(priceData);
        })();
    }, [coinId]);

    return loading ? (
        <Loading />
    ) : (
        <s.Wrapper>
            <s.RoundBox>
                <s.Item>
                    <div>Rank</div>
                    <div>{coinInfoData?.rank}</div>
                </s.Item>
                <s.Item>
                    <div>SYMBOL</div>
                    <div>{coinInfoData?.symbol}</div>
                </s.Item>
                <s.Item>
                    <div>OPEN SOURCE</div>
                    <div>{coinInfoData?.open_source ? 'YES' : 'NO'}</div>
                </s.Item>
            </s.RoundBox>
            <s.Description>{coinInfoData?.description}</s.Description>
            <s.RoundBox between={false}>
                <s.Item>
                    <div>TOTAL SUPLY</div>
                    <div>{coinPriceData?.total_supply}</div>
                </s.Item>
                <s.Item>
                    <div>MAX SUPLY</div>
                    <div>{coinPriceData?.max_supply}</div>
                </s.Item>
            </s.RoundBox>
        </s.Wrapper>
    );
};

export default CoinDetail;
