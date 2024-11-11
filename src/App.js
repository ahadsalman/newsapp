// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Route,
  Router,
  Routes
} from "react-router-dom";

export default class App extends Component {
  country ="us";
  render() {
    return (
      <>
     
 <BrowserRouter basename='/NewsApp'>
 <Navbar />
      <Routes>
      

        <Route exact path="/" element={<News key="general" pageSize={6} country={this.country} category="general"/>} />
        <Route exact path="/business" element={<News key="business"  pageSize={6} country={this.country} category="business"/>} />
        <Route exact path="/sports" element={<News key="sports"  pageSize={6} country={this.country} category="sports" />} />
        <Route exact path="/technology" element={<News key="technology"  pageSize={6} country={this.country} category="technology" />} />
        <Route exact path="/health" element={<News key="health"  pageSize={6} country={this.country} category="health" />} />
        <Route exact path="/science" element={<News key="science"  pageSize={6} country={this.country} category="science" />} />
        <Route exact path="/entertainment" element={<News key="entertainment"pageSize={6} country={this.country} category="entertainment" />} />
      </Routes>
    </BrowserRouter>


      </>
    )
  }
}

