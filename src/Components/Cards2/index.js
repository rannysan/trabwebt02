import React, { Component, Fragment } from 'react';

class Card2 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                {this.props.card.map(e =>
                    <div class="card bg-card my-3" >
                        <img class="card-img-top" src={this.props.Img} alt="Card image cap" />
                        <div class="card-body">
                            <h2 class="card-title text-white">{e.title}</h2>
                            <p class="card-text text-white">{e.desc}</p>
                            <p class="card-text text-white">{e.data}</p>
                        </div>


                    </div>
                )};

            </Fragment>);
    }
}

export default Card2;