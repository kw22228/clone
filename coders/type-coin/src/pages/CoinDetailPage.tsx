import { useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { CoinDetail } from '../components/CoinDetail';
import { ICoinInfo } from '../components/CoinDetail/types';
import { Header } from '../components/Header';
import { Container } from '../styles/variable';

interface IParams {
    coinId: string;
}

const CoinDetailPage = () => {
    const { coinId } = useParams<keyof IParams>() as IParams;
    const [coinDetail, setCoinDetail] = useState<ICoinInfo>();

    return (
        <Container>
            <Header title={coinDetail?.name} coinId={coinId} symbol={coinDetail?.symbol} />
            <CoinDetail coinId={coinId} setCoinDetail={setCoinDetail} />
            <Outlet context={{ coinId }} />
        </Container>
    );
};

export default CoinDetailPage;
