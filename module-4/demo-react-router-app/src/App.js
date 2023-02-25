import React from "react";
import  ReactDOM  from "react-dom";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import  NoPage from './components/NoPage'; 
// npm i -D react-router-dom   //create a react-router package
// npm i -D react-router-dom@latest flag  // upgrade v5 to v6
// <Route path="*">  * denoted if user hit unwanted url then redirect 404 page is not found
// Layout 
function App()

{
  return (

        <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Layout />}>   
          <Route index  element={<Home />} />   
          <Route path="about" element={<About />} />   
          <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
        </BrowserRouter>

  );
}

// ReactDOM.render(<App/>,document.getElementById("demo-app"))

export default App