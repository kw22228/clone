import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" component={MainPage} />
                <Route path="/tv" component={TvPage} />
                <Route path="/movie/:id" component={MovieDetail} />
                <Route path="/tv/:id" component={TvDetail} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
