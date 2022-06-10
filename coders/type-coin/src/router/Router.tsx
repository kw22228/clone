import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CoinsPage, CoinDetailPage, PricePage, ChartPage } from '../pages';

interface IProps {
    toggleTheme: () => void;
}
const Router = ({ toggleTheme }: IProps) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CoinsPage toggleTheme={toggleTheme} />} />
                <Route path="/:coinId" element={<CoinDetailPage />}>
                    <Route path="chart" element={<ChartPage />} />
                    <Route path="price" element={<PricePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
