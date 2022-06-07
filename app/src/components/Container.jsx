import React from 'react';
import Btns from './Btns';

function Container() {
    return (
        <>
            <div className="container">
                <j style={{ position: "absolute", top: "13rem", left: "41rem" }}>SIZ UCHUN MAXSUS</j>
                <h2>Analitik va Jadvallar <br /> <span style={{ marginLeft: "13rem", color: "#606FFA" }}>Platformasi</span></h2>


                <div className="case">
                    <div className="list">

                        <e>Davlatingiz </e>
                        <w>Ijtimoiy tarmoq </w>
                        <p>Tarmoqdagi nomingiz </p>

                        <button className='btn1'> <i class="fas fa-search"> </i> Izlab topish</button>

                    </div>
                </div>



                <div className="urn">
                    <Btns name="24,5 Trl" num="FOYDALANUVCHILAR">
                        <div className="use" style={{ background: "#FBD116",boxShadow:"0px 14px 54px rgba(251, 205, 0, 0.48)" }}>
                            <kl><i style={{ margin: "31px" }} class="fas fa-user-plus"></i></kl>

                        </div>
                    </Btns>

                    <Btns name="13,5 Trl" num="TASDIQ OLGANLAR">
                        <div className="use" style={{ background: "#8858FA", boxShadow:" 0px 14px 54px rgba(128, 75, 251, 0.48)" }}>
                            <kl><i style={{ margin: "31px" }} class="fas fa-award"></i></kl>

                        </div>
                    </Btns>

                    <Btns name="3,6 K" num="IJTIMOIY TARMOQ">
                        <div className="use" style={{ background: "#F03E8E",boxShadow:" 0px 14px 54px rgba(242, 40, 131, 0.48)"  }}>
                            <kl><i style={{ margin: "31px" }} class="fas fa-globe"></i></kl>

                        </div>
                    </Btns>

                </div>




            </div>


        </>
    );
}

export default Container;