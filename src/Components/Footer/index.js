import React from 'react'
import './footer.css';

const Footer = (props) => {
    return <footer class="container py-5">
    <div class="row">
      <div class="col-12 col-md">
      <img src={props.Logo} width="24px" height="24px" alt="Logo"/>
        <small class="d-block mb-3 text-muted">&copy; 2018</small>
      </div>
      <div class="col-6 col-md">
        <h5>Redes Sociais</h5>
        <div>
          <a href="https://www.instagram.com/rannysantos/"><img src={props.Insta} class="gray" width="24px" height="24px" alt="Logo"/></a>
          <a href="https://www.facebook.com/ranny.santos.7"><img src={props.Face} class="gray" width="24px" height="24px" alt="Logo"/></a>
          <a href="https://github.com/rannysan"><img src={props.Git} class="gray" width="24px" height="24px" alt="Logo"/></a>         
        </div>
      </div>
      <div class="col-6 col-md">
        <h5>Algum conteudo</h5>
        <ul class="list-unstyled text-small">
          <li><a class="text-muted" href="#">Resource</a></li>
          <li><a class="text-muted" href="#">Resource name</a></li>
          <li><a class="text-muted" href="#">Another resource</a></li>
          <li><a class="text-muted" href="#">Final resource</a></li>
        </ul>
      </div>
      <div class="col-6 col-md">
        <h5>Oque faço</h5>
        <ul class="list-unstyled text-small">
          <li><a class="text-muted" href="#">Business</a></li>
          <li><a class="text-muted" href="#">Education</a></li>
          <li><a class="text-muted" href="#">Government</a></li>
          <li><a class="text-muted" href="#">Gaming</a></li>
        </ul>
      </div>
      <div class="col-6 col-md">
        <h5>Sobre</h5>
        <ul class="list-unstyled text-small">
          <li><a class="text-muted" href="#">Team</a></li>
          <li><a class="text-muted" href="#">Locations</a></li>
          <li><a class="text-muted" href="#">Privacy</a></li>
          <li><a class="text-muted" href="#">Terms</a></li>
        </ul>
      </div>
    </div>
  </footer>
};

export default Footer;