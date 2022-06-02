import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Coins, CoinDetail } from '../pages';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Coins />} />
                <Route path="/:coinId" element={<CoinDetail />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
