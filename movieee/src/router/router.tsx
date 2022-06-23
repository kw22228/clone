import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from '../components/Header';

import { Main, Tv, Search } from '../pages';

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/tv" element={<Tv />} />
                <Route path="/search" element={<Search />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
