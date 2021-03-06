import React from 'react';
import { Routes, Route, Redirect } from "react-router-dom";
import SearchPage from './SearchPage/SearchPage';
import AddRecPage from './AddRecPage/AddRecPage';
import ViewRecsPage from './ViewRecsPage/ViewRecsPage'
import { BrowserRouter} from "react-router-dom";
import NavBar from './NavBar';
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import AccountPage from './AccountPage/AccountPage';
import ThankRecPage from './MiscPages/ThankRec';
import AboutPage from './MiscPages/About';
import ErrorPage from './MiscPages/Error';

function App() {


  return (
    <BrowserRouter>

      <Routes >
        <Route exact path="/" element={<Base> <NavBar/> <SearchPage /> </Base>} />                 

        <Route path="/search" exact={true} element={<Base> <NavBar/> <SearchPage /> </Base>} />

        <Route path="/addrec/:type/:song" element={<Base> <NavBar/>  <AddRecPage /> </Base>} />

        <Route path="/viewrecs" element={<Base> <NavBar/> <ViewRecsPage/>  </Base>} />

        <Route path="/youraccount" element={<Base> <NavBar/> <AccountPage/>  </Base>} />
        
        <Route path="/thankrec" element={<Base> <NavBar/> <ThankRecPage/>  </Base>} />
        
        <Route path="/about" element={<Base> <NavBar/> <AboutPage/>  </Base>} />

        <Route path="*" exact={true} element={ <Base> <NavBar/> <ErrorPage/>  </Base>} />

        </Routes>
      </BrowserRouter>
  );
}

export default App;


const Base = styled.div`
    min-height: 100vh;
    min-width: 100%;
    display: flex;
    flex-direction: column;
    font-family: "Trebuchet MS";
    
`