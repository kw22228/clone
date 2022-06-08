import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CoinsPage, CoinDetailPage, PricePage, ChartPage } from '../pages';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CoinsPage />} />
                <Route path="/:coinId" element={<CoinDetailPage />}>
                    <Route path="chart" element={<ChartPage />} />
                    <Route path="price" element={<PricePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
