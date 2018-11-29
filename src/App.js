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
import Axios from 'axios';




class App extends Component {
  state = {
    perfil: [],
    inter: [],
    idiomas: [],
    form: [],
    ativ: [],
    skills: []

};

componentDidMount(){
  console.log('component');
  this.loadPerf();
  this.loadAtiv();
  this.loadForm();
  this.loadIdio();
  this.loadInt();
  this.loadSkill();
}

loadPerf = () =>{
  Axios.get('http://localhost:4000/perfil')
    .then(res =>{
      const perf = res.data;
      this.setState({perfil:perf})
    })
    .catch((err) =>{
        console.log(err);
    })

}

loadInt = () =>{
  Axios.get('http://localhost:4000/interesses')
    .then(res =>{
      const int = res.data;
      this.setState({inter:int})
    })
    .catch((err) =>{
        console.log(err);
    })

}

loadIdio = () =>{
  Axios.get('http://localhost:4000/idiomas')
    .then(res =>{
      const idio = res.data;
      this.setState({idiomas:idio})
    })
    .catch((err) =>{
        console.log(err);
    })

}

loadForm = () =>{
  Axios.get('http://localhost:4000/formacao')
    .then(res =>{
      const form = res.data;
      this.setState({form:form})
    })
    .catch((err) =>{
        console.log(err);
    })

}

loadAtiv = () =>{
  Axios.get('http://localhost:4000/atividades')
    .then(res =>{
      const ativ = res.data;
      this.setState({ativ:ativ})
    })
    .catch((err) =>{
        console.log(err);
    })

}

loadSkill = () =>{
  Axios.get('http://localhost:4000/habil')
    .then(res =>{
      const habil = res.data;
      this.setState({skills:habil})
    })
    .catch((err) =>{
        console.log(err);
    })

}



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
          portf={this.state.perfil}
        />

        <Details
          Id="Details"
          Gif={Gif}
          //Titulos
          Title1="Interesses"
          inter={this.state.inter}
          Title2="Idiomas"
          idiomas={this.state.idiomas}
          Title3="Formação"
          form={this.state.form}
          Title4="Atividades"
          ativ={this.state.ativ}
        />

        {/*BgColor = bg-light ou bg-dark1 */}
        <ContentPage
          ID="Skills"
          BgColor="bg-light"
          Title="Habilidades"
          SubTitle="Segue uma lista de algumas das minhas habilidades!"
          Content= {<Skill skill={this.state.skills}/>}
          
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
                  <Card Img= {Pac} CardTitle="Como começou a paixão por games!" TxtCard="Sempre me envolvi com as histórias dos jogos e tentava absorver o maximo possivel deles e era uma sensação maravilhosa ''estar naquele mundo''. 
                                                                                   Creio que a vontade de passar essa sensação para frente foi um gatilho para aprender desenvolver jogos, mas eu garanto, depois do primeiro jogo feito, por mais simples que seja, você não consegue mais parar." TxtBtn="Veja Mais"/>
                </div>
                <div class="col-sm">
                  <Card Img= {Rock} CardTitle="Roqueiro tocando samba?" TxtCard="Não é segredo para ninguem que sempre estive envolvido com Baterias Universitarias e sou completamente apaixonado por isso
                                                                            e dedico um bom tempo a isso. Mas o que ninguem sabe é que o rock é a minha maior paixão e inspiração." TxtBtn="Veja Mais"/>
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
          Title="Habilidades"
          SubTitle="Segue uma lista de algumas das minhas habilidades!"
          Content= {<Text Gif={Gif2} Gif2={Gif3}/>}
          
        />

        <Footer></Footer>

      </Fragment>
      
    );
  }
}

export default App;
