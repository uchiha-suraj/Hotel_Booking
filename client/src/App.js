import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import { store } from './redux/store';
import Home from './pages/Home';
import HotelList from './pages/HotelList';
import HotelDetails from './pages/HotelDetails';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
    <Provider store = {store}>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/hotel-list" element={<HotelList />} />
        <Route exact path="/hotel-details" element={<HotelDetails />} />
      </Routes>
      <Footer />
    </Provider>
    </>
  );
}

export default App;
