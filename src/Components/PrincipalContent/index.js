import React, { Component } from 'react';
import Button from '../Button';
import './principal.css';
import Profile from '../../assets/profile.jpg';

class PrincipalContent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('Render Portfolio 1')
    console.log(this.props.portf)
    //if(this.props){
    if (this.props.portf === undefined) {
      return (<h1>Loading...</h1>);
    }
    else {
      return (
        <section id="Principal">
          <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light bg-image">
            <div>
              <div class="profile">
                <img src={Profile} class="rounded-circle" width="350px" height="350px" alt="Foto de perfil" />
              </div>
            </div>
            <div class="col-md-5 p-lg-5 mx-auto my-5">
              {this.props.portf.map(e =>
                            
                                <div>
                                    <h2>{e.nome}</h2>
                                    <p className="post_desc">{e.biodados}</p>
                                </div>
                        )}
              <a href="download/Curriculo.pdf" download="Curriculo.pdf"><Button>Download</Button></a>
            </div>
          </div>
        </section >
      );
    }
  }
}

export default PrincipalContent;