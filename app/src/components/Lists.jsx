import React from 'react';
import Boxs from './Boxs';

import rasm1 from "./img/image1.png"
import rasm2 from "./img/image2.png"
import rasm3 from "./img/image3.png"
import rasm4 from "./img/image4.png"

function Lists(props) {
    return (
        <div className='lists'>
            <div className="navbarp">
                <h1 style={{ margin: "16px 0px 0px 43px", color: " #323D64" }}>Foydalanuvchilar Milliard Darajada</h1>
                <table class="series">
                    <thead>
                        <tr>
                            <th>TARMOQLAR</th>
                            <th>2004</th>
                            <th>2006</th>
                            <th>2008</th>
                            <th>2010</th>
                            <th>2012</th>
                            <th>2014</th>
                            <th>2016</th>
                            <th>2018</th>
                            <th>2020</th>
                            <th>2022</th>



                        </tr>
                        <thead style={{ position: "absolute", top: "8rem", lineHeight: "38px", left: "84.5rem" }}>
                            <th>
                                <tr>7,4 mlr</tr>
                                <tr>2,1 mlr</tr>
                                <tr>3,4 mlr</tr>
                                <tr>2,7 mlr</tr>
                                <tr>4,1 mlr</tr>
                                <tr>1,9 mlr</tr>
                                <tr>5,4 mlr</tr>
                                <tr>4,7 mlr</tr>
                            </th>

                        </thead>
                    </thead>


                    <tbody style={{ position: "absolute", top: "8rem" }}>
                        <tr>
                            <th><i style={{ color: "#FC0D1B", left: "1rem" }} class="fab fa-youtube"></i> Youtube</th>
                            <div style={{ width: "510px", left: "17rem" }} className="diagramma"></div>

                        </tr>

                        <tr>
                            <th><i class="fab fa-tiktok"></i> Tik Tok</th>
                            <div style={{ width: "300px", left: "62rem" }} className="diagramma"></div>

                        </tr>

                        <tr>
                            <th><i style={{ color: "#C32F92" }} class="fab fa-instagram-square"></i> Instagram</th>
                            <div style={{ width: "512px", left: "26rem" }} className="diagramma"></div>
                        </tr>


                        <tr>
                            <th><i style={{ color: "#118ECC" }} class="fab fa-telegram"></i> Telegram</th>
                            <div style={{ width: "390px", left: "24rem" }} className="diagramma"></div>
                        </tr>

                        <tr>
                            <th><i style={{ color: "#47ACDF" }} class="fab fa-twitter"></i> Twitter</th>
                            <div style={{ width: "520px", left: "32rem" }} className="diagramma"></div>
                        </tr>

                        <tr>
                            <th><i style={{ color: "blue" }} class="fab fa-facebook"></i> Facebook</th>
                            <div style={{ width: "463px", left: "52rem" }} className="diagramma"></div>
                        </tr>

                        <tr>
                            <th><i style={{ color: "#009FFF" }} class="fab fa-facebook-messenger"></i> Messangers</th>
                            <div style={{ width: "294px", left: "48rem" }} className="diagramma"></div>
                        </tr>


                        <tr>
                            <th><i style={{ color: "#EE8208" }} class="fab fa-odnoklassniki-square"></i> OK.RU</th>
                            <div style={{ width: "600px", left: "21rem" }} className="diagramma"></div>
                        </tr>
                    </tbody>













                </table>
            </div>


            <h6 style={{ position: "relative", top: "9rem", left: "4rem", fontSize: "30px" }}>Tarmoq Asoschilari</h6>
            <Boxs img={rasm1} name="Pavel Durov" founder="Telegram VKontakt"></Boxs>
            <Boxs img={rasm2} name="Jack Dorsey" founder="Twitter"></Boxs>
            <Boxs img={rasm3} name="MARK Zuckerberg" founder="Facebook Instagram"></Boxs>
            <Boxs img={rasm4} name="Chad Hurly" founder="You tube"></Boxs>


                <ul className='navbar-wrapper'>
                <li>Telegram</li>
                <li>Facebook</li>
                <li>Youtube</li>
                <li>Twitter</li>
                <li>Skype</li>
            </ul>
        </div >
    );
}

export default Lists;
