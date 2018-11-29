import React, { Component } from 'react';
import './details.css';

class Details extends Component {
  constructor(props) {
    super(props);
  }

  showInt = () => {
    const list = this.props.inter.map(e =>
        <li>{e}</li>
    );
    console.log(list)
    return (
        <ul>{list}</ul>
    );
}

showIdioma = () => {
  const list = this.props.idiomas.map(e =>
      <li>{e}</li>
  );
  console.log(list)
  return (
      <ul>{list}</ul>
  );
}

showForm = () => {
  const list = this.props.form.map(e =>
      <li>{e}</li>
  );
  console.log(list)
  return (
      <ul>{list}</ul>
  );
}

showAtiv = () => {
  const list = this.props.ativ.map(e =>
      <li>{e}</li>
  );
  console.log(list)
  return (
      <ul>{list}</ul>
  );
}

  render() {
    console.log(this.props.ativ);
    return (
      <section id={this.props.Id} class="p-md-5 m-md-3">
        <div class="container row mx-auto mb-5">
          <div class="mx-auto d-block ">
            <div class="gif">
              <img src={this.props.Gif} class="rounded mx-auto d-block" width="240px" height="240px" alt="Gif de um chocobo" />
            </div>
          </div>
          <div class="container marketing ">

            <div class="row">
              <div class="col-lg-3 cont-div">
                <h2>{this.props.Title1}</h2>
                {this.showInt()}
              </div>

              <div class="col-lg-3 cont-div">
                <h2>{this.props.Title2}</h2>
                {this.showIdioma()}
              </div>

              <div class="col-lg-3 cont-div">
                <h2>{this.props.Title3}</h2>
                {this.showForm()}
              </div>

              <div class="col-lg-3 cont-div">
                <h2>{this.props.Title4}</h2>
                {this.showAtiv()}
              </div>

            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Details;