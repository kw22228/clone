import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CoinsPage, CoinDetailPage } from '../pages';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CoinsPage />} />
                <Route path="/:coinId" element={<CoinDetailPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
