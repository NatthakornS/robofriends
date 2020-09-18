import React from 'react';

function Card(props) {
    const { name, email, id} = props;
    return(
        <div class='tc bg-light-green dib br3 pa2 ma2 grow bw2 shadow-5'>
            {/* <h1>Robofriens</h1> */}
            <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;