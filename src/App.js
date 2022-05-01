import React from 'react';
import { Routes, Route, Redirect } from "react-router-dom";
import SearchPage from './SearchPage/SearchPage';
import AddRecPage from './AddRecPage/AddRecPage';
import ViewRecsPage from './ViewRecsPage/ViewRecsPage'
import { BrowserRouter} from "react-router-dom";
import NavBar from './NavBar';
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';

function App() {


  return (
    <BrowserRouter>

      <Routes >
        <Route exact path="/" element={<Base> <NavBar/> <SearchPage /> </Base>} />                 

        <Route path="/search" exact={true} element={<Base> <NavBar/> <SearchPage /> </Base>} />

        <Route path="/addrec/:type/:song" element={<Base> <NavBar/>  <AddRecPage /> </Base>} />

        <Route path="viewrecs" element={<Base> <NavBar/> <ViewRecsPage/>  </Base>} />

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