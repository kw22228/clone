1. npx create-react-app ./ --template typescript

2. npm run start 후 확인

3. src/App.css, App.test.jsx, logo.svg 삭제

---

### Router

1. npm install react-router-dom
2. npm install --save-dev @types/react-router-dom
3. import { BrowserRouter, Route, Routes } from 'react-router-dom';
4. <BrowserRouter>
           <Routes>
               <Route path="/" component={MainPage} />
               <Route path="/tv" component={TvPage} />
               <Route path="/movie/:id" component={MovieDetail} />
               <Route path="/tv/:id" component={TvDetail} />
           </Routes>
       </BrowserRouter>
