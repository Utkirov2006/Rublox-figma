import React from 'react';

function Network(props) {
    return (
        <div className='social-network' style={props.style}>
            <h5>{props.children}</h5>

            
        </div>
    );
}

export default Network;