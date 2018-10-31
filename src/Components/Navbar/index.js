import React from 'react'
import Logo from 'K:/GitGood/trabwebt02/src/assets/logo.png'
import Logo2 from 'K:/GitGood/trabwebt02/src/assets/logo2.png'
import './navbar.css';


const Navbar = (props) => {
    return <nav class="site-header sticky-top py-1 ">
      <div class="container d-flex flex-column flex-md-row justify-content-between">
        <a class="py-2" href="#">
        <div class="icone-hover">
        <img class="pri" src={Logo} width="24px" height="24px" alt="Logo"/>
        <img class="seg" src={Logo2} width="24px" height="24px" alt="Logo2"/>
        </div>
        </a>
        <a class="py-2 d-none d-md-inline-block option-color" href="#">{props.link1}</a>
        <a class="py-2 d-none d-md-inline-block option-color" href="#">{props.link2}</a>
        <a class="py-2 d-none d-md-inline-block option-color" href="#">{props.link3}</a>
        <a class="py-2 d-none d-md-inline-block option-color" href="#">{props.link4}</a>
        <a class="py-2 d-none d-md-inline-block option-color" href="#">{props.link5}</a>
        <a class="py-2 d-none d-md-inline-block option-color" href="#">{props.link6}</a>
        <a class="py-2 d-none d-md-inline-block option-color" href="#">{props.link7}</a>
      </div>
    </nav>
};

export default Navbar;