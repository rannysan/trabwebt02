import React, {Fragment} from 'react';
import Button from '../Button';
import './card.css';

const Card=(props)=>{
    return <Fragment>
        <div class="card bg-card">
            <img class="card-img-top" src={props.Img} width= "286px" height= "180" alt="Card image cap"/>
            <div class="card-body">
                <h5 class="card-title">{props.CardTitle}</h5>
                <p class="card-text">{props.TxtCard}</p>
                <a href="#" class="fposi" ><Button>{props.TxtBtn}</Button></a>
            </div>
        </div>

    </Fragment>
}

export default Card;