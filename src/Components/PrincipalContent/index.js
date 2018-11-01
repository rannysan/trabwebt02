import React from 'react';
import Button from '../Button';
import './principal.css';

const PrincipalContent = (props) =>{
    return  <section id={props.Id}>
      <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light bg-image">
      <div>
        <div class="profile">
          <img src={props.Profile} class="rounded-circle" width="350px" height="350px" alt="Foto de perfil"/>
        </div>
      </div>
      <div class="col-md-5 p-lg-5 mx-auto my-5">
        <h1 class="display-4 font-weight-normal">{props.TxtH1}</h1>
        <p class="lead font-weight-normal">{props.TxtP}</p>
        <a href="#"><Button>{props.TxtBtn}</Button></a>
      </div>
    </div>
  </section>
};

export default PrincipalContent;