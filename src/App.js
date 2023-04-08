import React from 'react';
import './App.scss';
import { createContext } from 'react';
// import {publicRoutes} from '../src/Routes/Route'
import DefaultLayout from './components/DefaultLayout/DefaultLayout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ScrollToTop from './scrollToTop';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import Province from './Pages/Province/Province';


export const ThemContext = createContext()
function App() {

  const Layout = DefaultLayout;
  console.log('hahaah')
  return (
    <React.Fragment>
        <div className="App">
          <ScrollToTop/>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <ThemContext.Provider value={1}>
                  <DefaultLayout >
                    <Home />
                  </DefaultLayout>
                </ThemContext.Provider>
              }
            />
            <Route
              path='/Contact'
              element={
                <ThemContext.Provider value={3}>
                  <DefaultLayout >
                    <Contact />
                  </DefaultLayout>
                </ThemContext.Provider>
              }
            />
            <Route
              path='/Province'
              element={
                <ThemContext.Provider value={2}>
                  <DefaultLayout >
                    <Province />
                  </DefaultLayout>
                </ThemContext.Provider>
              }
            />
          </Routes>
        </div>
     </React.Fragment>
  );
}
export default App;
