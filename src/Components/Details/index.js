import React from 'react';
import Logo2 from 'K:/GitGood/trabwebt02/src/assets/logo2.png'

const Details = (props) =>{
    return <div class="container marketing">

    <div class="row">
      <div class="col-lg-3">
        <img class="rounded-cicle" src={Logo2} width="140px" height="140px" alt="Logo2"/>
        <h2>Interesses</h2>
        <p>Coloque</p>
        <p>seus</p>
        <p>aqui</p>
        <p>Interesses</p>        
      </div>

      <div class="col-lg-3">
        <img class="rounded-cicle" src={Logo2} width="140px" height="140px" alt="Logo2"/>
        <h2>Idiomas</h2>
        <p>Coloque</p>
        <p>seus</p>
        <p>aqui</p>
        <p>Idiomas</p>
      </div>

      <div class="col-lg-3">
        <img class="rounded-cicle" src={Logo2} width="140px" height="140px" alt="Logo2"/>
        <h2>Formação</h2>
        <p>Coloque</p>
        <p>aqui</p>
        <p>sua</p>
        <p>Formação</p>
      </div>

      <div class="col-lg-3">
        <img class="rounded-cicle" src={Logo2} width="140px" height="140px" alt="Logo2"/>
        <h2>Atividades Desenvolvidas</h2>
        <p>Coloque</p>
        <p>aqui</p>
        <p>suas</p>
        <p>Atividades</p>
      </div>

    </div>
    </div>
};

export default Details;