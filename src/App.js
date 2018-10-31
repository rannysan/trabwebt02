import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ContentPage from './Components/ContentPage';
import PrincipalContent from './Components/PrincipalContent';
import Details from './Components/Details';

class App extends Component {
  render() {
    return (
      <fragment>

        <Navbar></Navbar>
        <PrincipalContent></PrincipalContent>
        <Details></Details>
        <ContentPage></ContentPage>
        <Footer></Footer>

      </fragment>
      
    );
  }
}

export default App;
