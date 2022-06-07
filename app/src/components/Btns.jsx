import React from 'react';

function Btns(props) {
    return (
        <div className='btns'
            style={props.style}>

                <h>{props.children}</h>
                <h5>{props.name}</h5>
                <y>{props.num}</y>


        </div>
    );
}
export default Btns;