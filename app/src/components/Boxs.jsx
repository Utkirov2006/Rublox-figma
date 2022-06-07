import React from 'react';

function Boxs(props) {
    return (
        <div className='boxs'>

            <img src={props.img} className="avatar" style={{margin:"45px 0px 0px 104px"}}/>

            <h1 style={{color: "#606FFA",textAlign:"center"}}>{props.name}</h1>

            <h4 style={{textAlign:"center",margin:"20px"}}>{props.founder}</h4>

            
        </div>
    );
}

export default Boxs;