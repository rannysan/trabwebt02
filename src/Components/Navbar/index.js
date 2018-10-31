import React from 'react'
import Logo from 'K:/GitGood/trabwebt02/src/assets/logo.png'
import Logo2 from 'K:/GitGood/trabwebt02/src/assets/logo2.png'
import './navbar.css';


const Navbar = (props) => {
    return <nav class="navbar navbar-dark bg-dark site-header sticky-top py-1 ">
      <div class="container d-flex flex-column flex-md-row justify-content-between">
        <a class="py-2" href="#">
        <div class="icone-hover">
        <img class="pri" src={Logo} width="24px" height="24px" alt="Logo"/>
        <img class="seg" src={Logo2} width="24px" height="24px" alt="Logo2"/>
        </div>
        </a>
        <a class="py-2 d-none d-md-inline-block" href="#">Tour</a>
        <a class="py-2 d-none d-md-inline-block" href="#">Product</a>
        <a class="py-2 d-none d-md-inline-block" href="#">Features</a>
        <a class="py-2 d-none d-md-inline-block" href="#">Enterprise</a>
        <a class="py-2 d-none d-md-inline-block" href="#">Support</a>
        <a class="py-2 d-none d-md-inline-block" href="#">Pricing</a>
        <a class="py-2 d-none d-md-inline-block" href="#">Cart</a>
      </div>
    </nav>
};

export default Navbar;