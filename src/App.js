import React from 'react';
import './App.scss';
import { createContext } from 'react';
// import {publicRoutes} from '../src/Routes/Route'
import DefaultLayout from './components/DefaultLayout/DefaultLayout';
import { Routes, Route } from 'react-router-dom';

import ScrollToTop from './scrollToTop';
import PhoneIconBottom from './PhoneIconBottom'
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import Province from './Pages/Province/Province';


export const ThemContext = createContext()
function App() {

  const Layout = DefaultLayout;
  return (
    <React.Fragment>
        <div className="App">
          <PhoneIconBottom/>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <ThemContext.Provider value={1}>
                  <Layout >
                    <Home />
                  </Layout>
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
