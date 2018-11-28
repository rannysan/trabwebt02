import React, { Component } from 'react';
import Button from '../Button';
import './principal.css';
import Profile from '../../assets/profile.jpg';

class PrincipalContent extends Component {
  constructor(props) {
    super(props);
  }

  showDetails = () => {
    const listBio = this.props.bio.map((item) =>
      <h1 class="display-4 font-weight-normal">{item.nome}</h1>
    );
    const listDesc = this.props.info.map((item) =>
      <p class="lead font-weight-normal">{item.bio}</p>
    );

    return (
      <div className="show-grid">{listBio}{listDesc}</div>
    );
  }

  render() {
    return (
      <section id="Principal">
        <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light bg-image">
          <div>
            <div class="profile">
              <img src={Profile} class="rounded-circle" width="350px" height="350px" alt="Foto de perfil" />
            </div>
          </div>
          <div class="col-md-5 p-lg-5 mx-auto my-5">
            {this.showDetails()}
            <a href="#"><Button>Download</Button></a>
          </div>
        </div>
      </section >
    );
  }
}

export default PrincipalContent;