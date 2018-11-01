import React, { Component, Fragment } from 'react';
import './App.css';
//Imagens
import Profile from './assets/profile.jpg';
import Logo from './assets/logo.png'
import Logo2 from './assets/logo2.png'
import Gif from './assets/ff.gif';

//Components
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ContentPage from './Components/ContentPage';
import PrincipalContent from './Components/PrincipalContent';
import Details from './Components/Details';




class App extends Component {
  render() {
    return (
      <Fragment>

        <Navbar 
        //Imagens do logo
        Logo={Logo} Logo2={Logo2}
        //Texto do link   Referencia do link
        link1="Inicio"  Ref1="#Principal"
        link2="Detalhes" Ref2="#Details"
        link3="Habilidades" 
        link4="Blog" 
        link5="Projetos" 
        link6="Quem sou eu?" 
        link7="Contato"        
        />

        <PrincipalContent 
          Id="Principal"
          Profile={Profile}
          TxtH1="Raniel C. Bispo dos Santos"
          TxtP="Algumas informações sobre Raniel"
          TxtBtn="Currículo completo"
        />

        <Details
          Id="Details"
          Gif={Gif}
          //Titulos
          Title1="Interesses"
          Title2="Idiomas"
          Title3="Formação"
          Title4="Atividades"
        />
        <ContentPage></ContentPage>
        <Footer></Footer>

      </Fragment>
      
    );
  }
}

export default App;
