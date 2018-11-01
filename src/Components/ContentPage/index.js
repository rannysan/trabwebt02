import React from 'react';
import './style.css';

const ContentPage = (props) =>{
    return <div class="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3 main-div">
    <div class="bg-dark1 mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden second-div">
      <div class="my-3 py-3">
        <h2 class="display-5">Colocar Titulo aqui</h2>
        <p class="lead">Escrever sobre algo e colocar imagens se necessario.</p>
      </div>
      <div class="bg-light box-shadow mx-auto content-div">
        <div class="my-3 py-3 innerTxt">
          <p class="lead">Escrever sobre algo e colocar imagens se necessario.</p>
        </div>
      </div>
    </div>
  </div>
};

export default ContentPage;