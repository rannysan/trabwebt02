import React, {Fragment} from 'react';

const Card2 =(props)=>{
    return <Fragment>
        <div class="card bg-card my-3" >
            <img class="card-img-top" src={props.Img} alt="Card image cap"/>
            <div class="card-body">
                <p class="card-text text-white">{props.Txt}</p>
            </div>
        </div>

    </Fragment>
}

export default Card2;