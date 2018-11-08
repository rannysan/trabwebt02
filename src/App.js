import React, { Component, Fragment } from 'react';
import './App.css';
//Imagens
import Profile from './assets/profile.jpg';
import Logo from './assets/logo.png'
import Logo2 from './assets/logo2.png'
import Gif from './assets/ff.gif';
import Arani from './assets/Arani.jpg';
import Pac from './assets/pacman.jpg';
import Rock from './assets/rock.jpg';
import Proj1 from './assets/firstWeb.PNG';
import Proj2 from './assets/Casamento.PNG';
import Proj3 from './assets/Bootstrap1.PNG';
import Proj4 from './assets/svg.PNG';
import Proj5 from './assets/scrumgame.jpg';
import Proj6 from './assets/shield.jpg';
import Gif2 from './assets/ff2.gif';
import Gif3 from './assets/ff3.gif';
import Face from './assets/facebook.png';
import Git from './assets/github.png';
import Insta from './assets/instagran.png';


//Components
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ContentPage from './Components/ContentPage';
import PrincipalContent from './Components/PrincipalContent';
import Details from './Components/Details';
import Skill from './Components/Skill';
import Card from './Components/Cards';
import Card2 from './Components/Cards2';
import Text from './Components/Text';
import Form from './Components/Forms';




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
        link3="Habilidades" Ref3="#Skills"
        link4="Blog" Ref4="#Blog"
        link5="Projetos" Ref5="#Projects"
        link6="Quem sou eu?" Ref6="#About"
        link7="Contato" Ref7="#Contact"
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

        {/*BgColor = bg-light ou bg-dark1 */}
        <ContentPage
          ID="Skills"
          BgColor="bg-light"
          Title="Habilidades"
          SubTitle="Segue uma lista de algumas das minhas habilidades!"
          Content= {<Skill Content="Java Script"/>}
          
        />

        <ContentPage
          ID="Blog"
          Title="Blog"
          BgColor="bg-dark1"
          SubTitle="Faço deste espaço um lugar para armazenar alguns dos meus pensamentos."
          Content= {
            <div class="container">
              <div class="row">
                <div class="col-sm">
                  <Card Img= {Arani} CardTitle="Araní: jogo brasileiro é anunciado" TxtCard="Araní é a guerreira mais corajosa da Tribo do Sol, e está em uma jornada de auto-descoberta enquanto luta para salvar seu povo de um poder mitológico ancestral.
                                                                                Araní ainda não tem data de lançamento confirmada, mas será lançado para PlayStation 4, PC e XBox." TxtBtn="Veja Mais"/>
                </div>
                <div class="col-sm">
                  <Card Img= {Pac} CardTitle="MediaTek pretende levar o 5G para os smartphones mais baratos!" TxtCard="A parte da implantação da novidade já não parece mais ser um grande desafio para as empresas do setor de telecomunicações pelo mundo. O problema é o que vem a seguir." TxtBtn="Veja Mais"/>
                </div>
                <div class="col-sm">
                  <Card Img= {Rock} CardTitle="Os 5 ciberataques que você poderá sofrer em 2019, segundo a ESET" TxtCard="Vão chegando os últimos meses do ano e as empresas de cibersegurança já começam a identificar tendências de ataques para o próximo ano. Dessa vez, a ESET preparou cinco deles que provavelmente terão um aumento nos números de ocorrências." TxtBtn="Veja Mais"/>
                </div>
              </div>
            </div>
          }          
        />

        <ContentPage
          ID="Projects"
          BgColor="bg-light"
          Title="Projetos"
          SubTitle=""
          Content={
            <div class="row container projectContainer">
              <Card2
                Img= {Proj1}
                Txt= "Primeiro trabalho com Web"
              />
              <Card2
                Img= {Proj2}
                Txt= "Treinando web com o site de casamentos"
              />
              <Card2
                Img= {Proj3}
                Txt= "Primeiro trabalho com Web com bootstrap"
              />
              <Card2
                Img= {Proj4}
                Txt= "Primeiro trabalho com Web com svg"
              />
              <Card2
                Img= {Proj5}
                Txt= "Scrum game (TCC) - Andamento"
              />
              <Card2
                Img= {Proj6}
                Txt= "Shild game - Andamento"
              />
            </div>
          }
        />

        <ContentPage
          ID="About"
          BgColor="bg-dark1"
          Title="Portfólio"
          SubTitle=""
          Content= {<Text Gif={Gif2} Gif2={Gif3}/>}
          
        />

        <ContentPage
          ID="Contact"
          BgColor="bg-light"
          Title="Contato"
          SubTitle="Entre em contato pelo formulário ou pelo e-mail bs.raniel@gmail.com"
          Content= {<Form/>}
          
        />

        <Footer Logo={Logo}  Insta={Insta} Face={Face} Git={Git}/>        
       

      </Fragment>
      
    );
  }
}

export default App;
