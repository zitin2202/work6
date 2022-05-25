import React from 'react';
import Goat from '../imagePets/pets/коза.jpeg';
import Cat from '../imagePets/pets/кошка.jpg';
import Dog from '../imagePets/pets/собака.jpg';
import Mouse from '../imagePets/pets/мышь.jpg';
import Gorilla from '../imagePets/pets/горилла.jpg';
import Сhicken1 from '../imagePets/pets/курица1.jpg';
import Сhicken2 from '../imagePets/pets/курица2.jpg';
import Сhicken3 from '../imagePets/pets/курица3.jpg';

import Pets from "../requests/Pets";
import News from "../requests/News";

const Main = () => {
    return (
        <div>
            <main style={{"min-height":" 70vh"}}>
                <h2 className="text-center text-white bg-primary m-2">Найденные животные</h2>
                <div id="carouselExampleIndicators" className="carousel slide m-auto bg-success bg-opacity-25 w-75 p-2"
                     data-bs-ride="carousel" style={{"min-height": "400px"}}>
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                                className="active" aria-current="true" aria-label="Slide 1"> </button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                aria-label="Slide 2"> </button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                aria-label="Slide 3"> </button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={Dog} className="d-block" alt="Собака" style={{width: "300px"}}/>
                            <h2 className="text-center">Найдена собака</h2>
                            <p>Собака рыжая, была утеряна в красногвардейчком райне районе</p>
                        </div>
                        <div className="carousel-item">
                            <img src={Mouse} className="d-block" alt="Мышь" style={{width: "300px"}}/>
                            <h2 className="text-center">Найдена мышь</h2>
                            <p>Мышь серая, была утеряна в центральном районе</p>
                        </div>
                        <div className="carousel-item">
                            <img src={Gorilla} className="d-block" alt="Горилла" style={{width: "300px"}}/>
                            <h2 className="text-center">Найдена горила</h2>
                            <p>Горилла, была утеряна в красногвардейчком райне районе</p>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"> </span>
                        <span className="visually-hidden">Предыдущий</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"> </span>
                        <span className="visually-hidden">Следующий</span>
                    </button>
                </div>
                <Pets/>
                {/*<h2 className="text-center text-white bg-primary m-2">Карточки найденных животных</h2>*/}
                {/*<div className="d-flex flex-row flex-wrap">*/}
                {/*    <div className="d-flex flex-row flex-wrap border m-3 p-3" style={{minWidth: "300px",width: "45%"}}>*/}
                {/*        <img src={Cat} className="w-75" alt="рисунок животного"/>*/}
                {/*        <p className="w-50 text-primary" style={{minWidth: "250px;"}}>id:</p>*/}
                {/*        <p className="w-50" style={{minWidth: "250px"}}>14</p>*/}

                {/*        <p className="w-50 text-primary" style={{minWidth: "250px;"}}>Вид животного:</p>*/}
                {/*        <p className="w-50" style={{minWidth: "250px;"}}> Кошка</p>*/}

                {/*        <p className="w-50 text-primary" style={{minWidth: "300px"}}>Описание:</p>*/}
                {/*        <p className="w-50" style={{minWidth: "300px"}}>Потерялась кошка, пушистая, серая. Любит*/}
                {/*            играть, ласковая.</p>*/}

                {/*        <p className="w-50 text-primary" style={{minWidth: "300px"}}>Номер чипа:</p>*/}
                {/*        <p className="w-50" style={{minWidth: "300px"}}>ca-001-spb</p>*/}

                {/*        <p className="w-50 text-primary" style={{minWidth: "300px"}}>Район:</p>*/}
                {/*        <p className="w-50" style={{minWidth: "300px"}}>Василиостровский</p>*/}

                {/*        <p className="w-50 text-primary" style={{minWidth: "300px"}}>Дата:</p>*/}
                {/*        <p className="w-50" style={{minWidth: "300px"}}>24-03-2020</p>*/}
                {/*    </div>*/}
                {/*    <div className="d-flex flex-row flex-wrap border m-3 p-3" style={{minWidth: '300px', width: '45%'}}>*/}
                {/*        <img src={Goat} className="w-75" alt="рисунок животного"/>*/}
                {/*        <p className="w-50 text-primary" style={{minWidth: "250px;"}}>id:</p>*/}
                {/*        <p className="w-50" style={{minWidth: "250px"}}>18</p>*/}

                {/*        <p className="w-50 text-primary" style={{minWidth: "250px;"}}>Вид животного:</p>*/}
                {/*        <p className="w-50" style={{minWidth: "250px"}}> Коза</p>*/}

                {/*        <p className="w-50 text-primary" style={{minWidth: "300px"}}>Описание:</p>*/}
                {/*        <p className="w-50" style={{minWidth: "300px"}}> Потерялась коза, последний раз видели в здании*/}
                {/*            Московского вокзала*/}
                {/*            г. Санкт-Петербург. Коза белая, пуховая.</p>*/}

                {/*        <p className="w-50 text-primary" style={{minWidth: "300px"}}>Номер чипа:</p>*/}
                {/*        <p className="w-50" style={{minWidth: "300px"}}>go-011-spb</p>*/}

                {/*        <p className="w-50 text-primary" style={{minWidth: "300px"}}>Район:</p>*/}
                {/*        <p className="w-50" style={{minWidth: "300px"}}>Центральный</p>*/}

                {/*        <p className="w-50 text-primary" style={{minWidth: "300px"}}>Дата:</p>*/}
                {/*        <p className="w-50" style={{minWidth: "300px"}}>14-03-2022</p>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="container">*/}
                {/*    <h2 className="text-center text-white bg-primary m-2">Подписка на новости</h2>*/}
                {/*    <form className="w-50 m-auto p-3" style={{minWidth: "300px"}}>*/}
                {/*        <div className="mb-3">*/}
                {/*            <label htmlFor="exampleInputEmail1" className="form-label">Введите адрес электронной*/}
                {/*                почты</label>*/}
                {/*            <input type="email" className="form-control" id="exampleInputEmail1"*/}
                {/*                   aria-describedby="emailHelp"/>*/}
                {/*            <div id="emailHelp" className="form-text">Мы никогда не делимся Вашими e-mail ни с кем.*/}
                {/*            </div>*/}
                {/*        </div>*/}

                {/*        <button type="submit" className="btn btn-primary">Подписаться</button>*/}
                {/*    </form>*/}
                {/*</div>*/}
                <News/>
            </main>

        </div>
    );
};

export default Main;