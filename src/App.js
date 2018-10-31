import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ContentPage from './Components/ContentPage';

class App extends Component {
  render() {
    return (
      <fragment>

        <Navbar></Navbar>
        <ContentPage></ContentPage>
        <Footer></Footer>

      </fragment>
      
    );
  }
}

export default App;
