import React, { Component, Fragment } from 'react';

class Text extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                {this.props.text.map(e =>
                    <div class="d-flex justify-content-around flex-column">
                        <div class="d-flex justify-content-center">
                            <img src={this.props.Gif} class="rounded mx-auto d-block" width="240px" height="100px" alt="Gif" />
                        </div>
                        <div class="m-5">
                            <h2>Biografia</h2>
                            <p class="text-justify">{e.bio}</p>
                        </div>
                        <div class="d-flex justify-content-center">
                            <img src={this.props.Gif2} class="rounded mx-auto d-block" width="240px" height="100px" alt="Gif" />
                        </div>
                        <div class="m-5">
                            <h2>Profissão</h2>
                            <p class="text-justify">{e.desc}</p>
                        </div>
                    </div>
                )};
    </Fragment>);
    }
}

export default Text;