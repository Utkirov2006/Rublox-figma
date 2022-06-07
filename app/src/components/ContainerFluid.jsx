import React from 'react';
import Network from './Network';

function ContainerFluid() {
    return (
        <div className='container-fluid'>

            <div class="navbarp">

                <h2>Tarmoqlar analitikasi</h2>
                <span>Online - 1,4 Trl </span>
                <span>Ko’rishlar - 15,3 Trl</span>


                <table class="table">

                    <thead>

                        <tr>


                            <th> <button className='you'>Youtube</button></th>
                            <th> NOMI </th>
                            <th> SANA</th>
                            <th>OBUNACHILAR </th>
                            <th>VIDEOLAR SONI </th>
                            <th> KO’RGANLAR SONI</th>
                            <th>JADVAL</th>

                        </tr>

                    </thead>

                    <tbody>
                        <tr>
                            <th class="row">Twitter</th>
                            <td class="td">NoCopyright </td>
                            <td class="td">Avg. 14, 2011</td>
                            <td>145 000</td>
                            <td>12 100</td>
                            <td>10 319 611 602</td>
                            <td>2,5%</td>
                        </tr>

                        <tr>
                            <th class="row">Telegram</th>
                            <td class="td">ThioJoe</td>
                            <td class="td">Feb. 05, 2009</td>
                            <td>2 754 630</td>
                            <td>4 351</td>
                            <td>16 121 380</td>
                            <td>5,2%</td>
                        </tr>

                        <tr>
                            <th class="row">Discord</th>
                            <td class="td">AzonTV</td>


                            <td class="td">Feb. 07, 2019</td>
                            <td>413 000</td>
                            <td>513 123</td>
                            <td>36 513 831</td>
                            <td>2,7%</td>
                        </tr>

                        <tr>
                            <th class="row">Tik Tok</th>
                            <td class="td">Linguamarina</td>
                            <td class="td">June. 20, 2011</td>
                            <td>4 440 000</td>
                            <td>512 000</td>
                            <td>621 513 000</td>
                            <td>3,8%</td>
                        </tr>

                        <tr>
                            <th class="row">Facebook</th>
                            <td class="td">Corridor Crew</td>
                            <td class="td">Feb. 24, 2017</td>
                            <td>5 135 215</td>
                            <td>1 658</td>
                            <td>694 138 120</td>
                            <td>3,5%</td>
                        </tr>

                        <tr>
                            <th class="row">Instagram</th>
                            <td class="td">Cinecom</td>
                            <td class="td">Jan. 10, 2020</td>
                            <td>6521</td>
                            <td>10 155</td>
                            <td>912 548 210</td>
                            <td>1,5%</td>
                        </tr>



                    </tbody>
                </table>



            </div>

            <h1>Ko’p Foydanaliladigan Mashhur <br /> <span style={{ marginLeft: "16rem", color: "#606FFA" }}>Tarmoqlar</span></h1>
            <h3>Ko’p foydalanayotgan yoki foydalanmayotgan tarmoqlarni bilib oling va o’z <br />
                <span style={{ marginLeft: "9rem" }}> maqsadlaringiz bo’yicha foydalaning </span></h3>


            <div className="cards">
                <Network style={{ color: "blue", background: "#8BCCFF" }}><i class="fab fa-facebook"></i></Network>
                <Network style={{ color: "blue", background: "#8AC1FF" }}><i class="fab fa-vk"></i></Network>
                <Network style={{ color: "#47ACDF", background: "#92DAFF" }}><i class="fab fa-twitter"></i></Network>
                <Network style={{ color: "#C32F92", background: "#F399DE" }}><i class="fab fa-instagram-square"></i></Network>
                <Network style={{ color: " #B72D2C", background: "#F59291" }}><i class="fab fa-quora"></i></Network>
                <Network style={{ color: "#BB0F23", background: "#F0939E" }}><i class="fab fa-pinterest"></i></Network>
                <Network style={{ color: "#1275B1", background: " #94C6E4" }}><i class="fab fa-linkedin-in"></i></Network>
                <Network style={{ color: "white", background: "#FCFAAE" }}><i class="fab fa-snapchat"></i></Network>
                <Network style={{ background: "#FDB9CB" }}><i class="fab fa-tiktok"></i></Network>
                <Network style={{ color: " #EE8208", background: "#FAC282" }}><i class="fab fa-odnoklassniki"></i></Network>
                <Network style={{ color: "#07D557", background: "green" }}><i class="fab fa-spotify"></i></Network>
                <Network style={{ color: "#118ECC", background: " #BDE2F4" }}><i class="fab fa-telegram"></i></Network>
                <Network style={{ color: "#4AC759", background: "#B9FFC0" }}><i class="fab fa-whatsapp"></i></Network>
                <Network style={{ color: "#4AC759", background: "#B9FFC0" }}><i class="fas fa-sms"></i></Network>


                <div className="cards2">
                    <Network style={{ color: "#E30A17", background: "#FFA9AE" }}><i class="fab fa-neos"></i></Network>
                    <Network style={{ color: "#FC0D1B", background: "#FFA7AC" }}><i class="fab fa-youtube"></i></Network>
                    <Network style={{ color: "#31CE6F", background: "#B3FFD1" }}><i class="fas fa-comments"></i></Network>
                    <Network style={{ color: "#9179EE", background: " #C8BAFF" }}><i class="fab fa-whatsapp"></i></Network>

                    <Network style={{ color: "blue", background: "#8AC1FF" }}><i class="fab fa-instalod"></i></Network>
                    <Network style={{ color: " #006BFF", background: " #A4E1FF" }}><i class="fab fa-facebook-messenger"></i></Network>
                    <Network style={{ color: "blue", background: " silver" }}><i class="fab fa-amazon"></i></Network>
                    <Network style={{ color: "#3995DB", background: " #A5D8FF" }}><i class="fab fa-skype"></i></Network>
                </div>




            </div>

        </div>

    );
}

export default ContainerFluid;