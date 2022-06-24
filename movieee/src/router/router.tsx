import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from '../components/Header';

import { MainPage, TvPage, SearchPage } from '../pages';

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/tv" element={<TvPage />} />
                <Route path="/search" element={<SearchPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
