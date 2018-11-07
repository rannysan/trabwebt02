import React from 'react'
import './navbar.css';


const Navbar = (props) => {
    return <nav class="site-header sticky-top py-1 ">
      <div class="container d-flex flex-column flex-md-row justify-content-between">
        <a class="py-2" href={props.Ref1}>
        <div class="icone-hover">
        <img class="pri" src={props.Logo} width="24px" height="24px" alt="Logo"/>
        <img class="seg" src={props.Logo2} width="24px" height="24px" alt="Logo2"/>
        </div>
        </a>
        <a class="py-2 d-none d-md-inline-block option-color" href={props.Ref1}>{props.link1}</a>
        <a class="py-2 d-none d-md-inline-block option-color" href={props.Ref2}>{props.link2}</a>
        <a class="py-2 d-none d-md-inline-block option-color" href={props.Ref3}>{props.link3}</a>
        <a class="py-2 d-none d-md-inline-block option-color" href={props.Ref4}>{props.link4}</a>
        <a class="py-2 d-none d-md-inline-block option-color" href={props.Ref5}>{props.link5}</a>
        <a class="py-2 d-none d-md-inline-block option-color" href={props.Ref6}>{props.link6}</a>
        <a class="py-2 d-none d-md-inline-block option-color" href={props.Ref7}>{props.link7}</a>
      </div>
    </nav>
};

export default Navbar;