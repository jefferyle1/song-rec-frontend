import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import SearchPage from './SearchPage/SearchPage';
import AddRecPage from './AddRecPage/AddRecPage';
import { BrowserRouter} from "react-router-dom";
import NavBar from './NavBar';
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';

function App() {


  return (
    <BrowserRouter>

      <Routes >

        <Route path="/" exact={true} element={<Base> <NavBar/> <SearchPage /> </Base>} />

        <Route path="addrec/:type/:song" element={<Base> <NavBar/>  <AddRecPage /> </Base>} />

        <Route path="*" exact={true} element={ <h2> Sorry, this page doesn't exist!</h2>} />

        </Routes>
      </BrowserRouter>
  );
}

export default App;


const Base = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    font-family: "Trebuchet MS";
    background-color: #d87e09;
`