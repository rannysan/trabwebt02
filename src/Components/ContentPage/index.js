import React from 'react';
import './style.css';

const ContentPage = (props) =>{
    return <section class="font-all" id={props.ID}>
      <div class="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3 main-div">
      <div class={props.BgColor + " mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden second-div"}>
        <div class="my-3 py-3">
          <h2 class="display-5">{props.Title}</h2>
          <p class="lead font-weight-light">{props.SubTitle}</p>
        </div>
          <div class="my-5 py-5 container">
            {props.Content}
          </div>
       
      </div>
    </div>
  </section>
};

export default ContentPage;