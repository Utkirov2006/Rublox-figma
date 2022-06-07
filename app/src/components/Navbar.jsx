import React from 'react';

function Navbar() {
    return (
        <>
            <div className='navbar'>
                <h1 style={{ position: "relative", left: "-15rem" }}><i style={{ color: "blue" }} class="fab fa-scribd"></i> Rublox</h1>

                <li style={{ color: "#606FFA" }}>Bosh sahifa</li>

                <li>Tarmoqlar</li>
                <li>Bo’limlar</li>
                <li>Foydali</li>


                <span><i class="fab fa-facebook"></i></span>
                <span><i class="fab fa-linkedin-in"></i></span>
                <span><i class="fab fa-instagram"></i></span>
            </div>
        </>
    );
}


export default Navbar;