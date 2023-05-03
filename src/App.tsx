import React from 'react';

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import '../src/style/ecomm.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './Components/Register';
import PrivateComponent from './Components/PrivateComponent';
import Login from './Components/Login';
import AddProduct from './Components/AddProduct';
import ProductList from './Components/ProductList';
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/" element={<ProductList/>} />
            <Route path="add" element={<AddProduct/>}/>
            <Route path="update" element={<h1>Update product Component</h1>} />
            <Route path="logout" element={<h1>Logout Component</h1>} />
            <Route path="profile" element={<h1>Profile Component</h1>} />

          </Route>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
