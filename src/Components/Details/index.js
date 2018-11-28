import React from 'react';
import './details.css';

const Details = (props) =>{
    return <section id={props.Id} class="p-md-5 m-md-3">
      <div class="container row mx-auto mb-5"> 
      <div class="mx-auto d-block ">
        <div class="gif">
          <img src={props.Gif} class="rounded mx-auto d-block" width="240px" height="240px" alt="Gif de um chocobo"/>
        </div>
      </div>
      <div class="container marketing ">
      
      <div class="row">
        <div class="col-lg-3 cont-div">
          <h2>{props.Title1}</h2>
          <p>Coloque</p>
          <p>seus</p>
          <p>aqui</p>
          <p>Interesses</p>        
        </div>

        <div class="col-lg-3 cont-div">        
          <h2>{props.Title2}</h2>
          <p>Coloque</p>
          <p>seus</p>
          <p>aqui</p>
          <p>Idiomas</p>
        </div>

        <div class="col-lg-3 cont-div">
          <h2>{props.Title3}</h2>
          <p>Coloque</p>
          <p>aqui</p>
          <p>sua</p>
          <p>Formação</p>
        </div>

        <div class="col-lg-3 cont-div">
          <h2>{props.Title4}</h2>
          <p>Coloque</p>
          <p>aqui</p>
          <p>suas</p>
          <p>Atividades</p>
        </div>

      </div>
      </div>
      </div>
    </section>
};

export default Details;