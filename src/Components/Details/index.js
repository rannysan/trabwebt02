import React from 'react';
import Logo2 from 'K:/GitGood/trabwebt02/src/assets/logo2.png'
import './details.css'

const Details = (props) =>{
    return <div class="container row mx-auto"> 
    <div class="mx-auto d-block ">
      <div class="et_pb_module et-waypoint et_pb_image et_pb_animation_off et_pb_image_0 et_always_center_on_mobile et_pb_image_sticky et-animated">
        <img src={Logo2} class="rounded mx-auto d-block" width="240px" height="240px" alt="..."/>
        <p>Uma breve biogravia para o começo do site!</p>			
        <p>talvez alguns contatos tbm</p>
			</div>
    </div>
    <div class="container marketing ">
    
    <div class="row">
      <div class="col-lg-3">
        <h2>Interesses</h2>
        <p>Coloque</p>
        <p>seus</p>
        <p>aqui</p>
        <p>Interesses</p>        
      </div>

      <div class="col-lg-3">        
        <h2>Idiomas</h2>
        <p>Coloque</p>
        <p>seus</p>
        <p>aqui</p>
        <p>Idiomas</p>
      </div>

      <div class="col-lg-3">
        <h2>Formação</h2>
        <p>Coloque</p>
        <p>aqui</p>
        <p>sua</p>
        <p>Formação</p>
      </div>

      <div class="col-lg-3">
        <h2>Atividades Desenvolvidas</h2>
        <p>Coloque</p>
        <p>aqui</p>
        <p>suas</p>
        <p>Atividades</p>
      </div>

    </div>
    </div>
    </div>
};

export default Details;