import React from 'react';
import Chicken1 from '../imagePets/pets/курица1.jpg';
import Chicken2 from '../imagePets/pets/курица2.jpg';
import Chicken3 from '../imagePets/pets/курица3.jpg';
const PetMain = () => {
    return (
        <div>
            <main style={{minHeight: "70vh"}}>
                <h2 className="text-center text-white bg-primary m-2">Карточка животного</h2>


                <div className="d-flex flex-row flex-wrap border  border-primary m-auto  p-3 position-relative w-50"
                     style={{minWidth: "300px"}}>
                    <div className="d-flex flex-row flex-wrap justify-content-around border border">
                        <img src={Chicken1} className="w-25 p-3" style={{minWidth: "250px"}}
                             alt="Изображения животного"/>
                            <img src={Chicken2} className="w-25 p-3" style={{minWidth: "250px"}}
                                 alt="Изображения животного"/>
                                <img src={Chicken3} className="w-25 p-3" style={{minWidth: "250px"}}
                                     alt="Изображения животного"/>
                    </div>
                    <p className="w-50 text-primary" style={{minWidth: "250px"}}>id:</p>
                    <p className="w-50" style={{minWidth: "250px"}}>14</p>

                    <p className="w-50 text-primary" style={{minWidth: "250px"}}>Имя:</p>
                    <p className="w-50" style={{minWidth: "250px"}}> Иван</p>

                    <p className="w-50 text-primary" style={{minWidth: "250px"}}>Телефон:</p>
                    <p className="w-50" style={{minWidth: "250px"}}>+7-921-485-65-44</p>

                    <p className="w-50 text-primary" style={{minWidth: "250px"}}>E-mail:</p>
                    <p className="w-50" style={{minWidth: "250px"}}>my_chiken@mail.ru</p>

                    <p className="w-50 text-primary" style={{minWidth: "250px"}}>Вид животного:</p>
                    <p className="w-50" style={{minWidth: "250px"}}> Курица</p>

                    <p className="w-50 text-primary" style={{minWidth: "300px"}}>Описание:</p>
                    <p className="w-50" style={{minWidth: "300px"}}>Потерялась курица, пятнистая, рыжая. Любит играть,
                        ласковая.</p>

                    <p className="w-50 text-primary" style={{minWidth: "300px"}}>Номер чипа:</p>
                    <p className="w-50" style={{minWidth: "300px"}}>ch-001-spb</p>

                    <p className="w-50 text-primary" style={{minWidth: "300px"}}>Район:</p>
                    <p className="w-50" style={{minWidth: "300px"}}>Невский</p>

                    <p className="w-50 text-primary" style={{minWidth: "300px"}}>Дата:</p>
                    <p className="w-50" style={{minWidth: "300px"}}>29-03-2020</p>
                </div>
                <br/>

            </main>
        </div>
    );
};

export default PetMain;