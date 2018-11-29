import React, { Component, Fragment } from 'react';

class Skill extends Component {
    constructor(props) {
        super(props);
    }


    showSkills = () => {
        const list = this.props.skill.map(e =>
            <span class="badge badge-pill badge-light skill">{e}</span>
        );
        console.log(list)
        return (
            <div>{list}</div>
        );
    }


    render() {
        return (
            <Fragment>
                {this.showSkills()}
            </Fragment>)
    }
}

export default Skill;