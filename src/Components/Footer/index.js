import React, { Component, Fragment } from 'react';
import Logo from 'K:/GitGood/trabwebt02/src/assets/logo.png'

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  Links = () => {
    const list = this.props.links.map(e =>
      <li><a href={e.name} target="_blank">{e.icon}</a></li>
    );
    console.log(list)
    return (
        <div>{list}</div>
    );
}

  render() {
    return (
      <footer class="container py-5">
        <div class="row">
          <div class="col-12 col-md">
            <img src={Logo} width="24px" height="24px" alt="Logo" />
            <small class="d-block mb-3 text-muted">&copy; 2018</small>
          </div>
          <div class="col-6 col-md">
            <h5>Contatos</h5>
            {this.Links()}
          </div>
          <div class="col-6 col-md">

          </div>
          <div class="col-6 col-md">

          </div>
          <div class="col-6 col-md">

          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;