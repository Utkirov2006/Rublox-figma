import React from 'react';

function Footer(props) {
    return (

        <div className='footer'>
            <div className="line"></div>
            
            <ul className='navbar-end'>
                <ul style={{ fontSize: "30px" }}><i class="fab fa-scribd" style={{ color: "blue" }}></i> Rublox</ul>

                <li >BIZ HAQIMIZDA</li>
                <li style={{ color: "#8E93C1" }}>Rublox - bu sizning tarmog‘ingiz <br /> uchun eng yaxshi xizmat platformasi</li>
                <li >ALOQA XIZMATLAR</li>
                <li style={{ color: "#8E93C1" }} >Rublox@gmail.com <br />+99893 908 70 85</li>
            </ul>
        </div>
    );
}

export default Footer;