import React from 'react';
import Goat from '../imagePets/pets/коза.jpeg';
import Cat from '../imagePets/pets/кошка.jpg';

const ProfileMain = () => {
    return (
        <div>
            <main style={{minHeight: "70vh"}}>
                <h2 className="text-center text-white bg-primary m-2">Личный кабинет</h2>
                <div className="p-3">
                    <div className="d-flex flex-row flex-wrap border m-auto p-3 w-50" style={{minWidth: "300px"}}>

                        <p className="w-50 text-primary" style={{minWidth: "250px"}}>id:</p>
                        <p className="w-50" style={{minWidth: "250px"}}>14</p>

                        <p className="w-50 text-primary" style={{minWidth: "250px"}}>Телефон:</p>
                        <p className="w-50" style={{minWidth: "250px"}}>+7-911-456-78-78</p>

                        <p className="w-50 text-primary" style={{minWidth: "300px"}}>email:</p>
                        <p className="w-50" style={{minWidth: "300px"}}>leonid@yandex.ru</p>

                        <p className="w-50 text-primary" style={{minWidth: "300px"}}>Имя:</p>
                        <p className="w-50" style={{minWidth: "300px"}}>Леонид</p>

                        <p className="w-50 text-primary" style={{minWidth: "300px"}}>Дата регистрации:</p>
                        <p className="w-50" style={{minWidth: "300px"}}>26-06-2015</p>

                        <p className="w-50 text-primary" style={{minWidth: "300px"}}>Количество найденных животных:</p>
                        <p className="w-50" style={{minWidth: "300px"}}>2</p>

                        <p className="w-50 text-primary" style={{minWidth: "300px"}}>Количество объявлений:</p>
                        <p className="w-50" style={{minWidth: "300px"}}>4</p>
                    </div>
                </div>

                <h2 className="text-center text-white bg-primary m-2">Изменить адрес электронной почты</h2>
                <form className="w-50 m-auto p-3" style={{minWidth: "300px"}}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Введите адрес электронной
                            почты</label>
                        <input type="email" className="form-control" id="exampleInputEmail1"
                               aria-describedby="emailHelp"/>
                        <div className="form-text">Мы никогда не делимся Вашими e-mail ни с кем.</div>
                    </div>

                    <button type="submit" className="btn btn-primary">Отправить</button>
                </form>

                <h2 className="text-center text-white bg-primary m-2">Изменить номер телефона</h2>
                <form className="w-50 m-auto p-3" style={{minWidth: "300px"}}>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Введите номер телефона</label>
                        <input type="tel" className="form-control" id="phone" aria-describedby="emailHelp"/>
                        <div className="form-text">Используйте цифры, +, -.</div>
                    </div>

                    <button type="submit" className="btn btn-primary">Отправить</button>
                </form>

                <h2 className="text-center text-white bg-primary m-2">Добавленные объявления</h2>
                <div className="d-flex flex-row flex-wrap">
                    <div className="d-flex flex-row flex-wrap border m-3 p-3 position-relative"
                         style={{minWidth: "300px", width: "45%"}}>
                        <img src={Cat} className="w-75" alt="рисунок животного"/>
                        <p className="w-50 text-primary" style={{minWidth: "250px"}}>id:</p>
                        <p className="w-50" style={{minWidth: "250px"}}>14</p>

                        <p className="w-50 text-primary" style={{minWidth: "250px"}}>Вид животного:</p>
                        <p className="w-50" style={{minWidth: "250px"}}> Кошка</p>

                        <p className="w-50 text-primary" style={{minWidth: "300px"}}>Описание:</p>
                        <p className="w-50" style={{minWidth: "300px"}}>Потерялась кошка, пушистая, серая. Любит
                            играть, ласковая.</p>

                        <p className="w-50 text-primary" style={{minWidth: "300px"}}>Номер чипа:</p>
                        <p className="w-50" style={{minWidth: "300px"}}>ca-001-spb</p>

                        <p className="w-50 text-primary" style={{minWidth: "300px"}}>Район:</p>
                        <p className="w-50" style={{minWidth: "300px"}}>Василиостровский</p>

                        <p className="w-50 text-primary" style={{minWidth: "300px"}}>Дата:</p>
                        <p className="w-50" style={{minWidth: "300px"}}>24-03-2020</p>
                        <div className="position-absolute text-danger"
                             style={{top:"15px", right: "15px", cursor: "pointer"}}>&#10060;</div>
                        <button type="submit" className="btn btn-primary">Редактировать объявление</button>
                    </div>
                    <div className="d-flex flex-row flex-wrap border m-3 p-3 position-relative"
                         style={{minWidth: "300px", width: "45%"}}>
                        <img src={Goat} className="w-75" alt="рисунок животного"/>
                        <p className="w-50 text-primary" style={{minWidth: "250px"}}>id:</p>
                        <p className="w-50" style={{minWidth: "250px"}}>18</p>

                        <p className="w-50 text-primary" style={{minWidth: "250px"}}>Вид животного:</p>
                        <p className="w-50" style={{minWidth: "250px"}}> Коза</p>

                        <p className="w-50 text-primary" style={{minWidth: "300px"}}>Описание:</p>
                        <p className="w-50" style={{minWidth: "300px"}}>Потерялась коза, последний раз видели в здании
                            Московского вокзала
                            г. Санкт-Петербург. Коза белая, пуховая.</p>

                        <p className="w-50 text-primary" style={{minWidth: "300px"}}>Номер чипа:</p>
                        <p className="w-50" style={{minWidth: "300px"}}>go-011-spb</p>

                        <p className="w-50 text-primary" style={{minWidth: "300px"}}>Район:</p>
                        <p className="w-50" style={{minWidth: "300px"}}>Центральный</p>

                        <p className="w-50 text-primary" style={{minWidth: "300px"}}>Дата:</p>
                        <p className="w-50" style={{minWidth: "300px"}}>14-03-2022</p>
                        <div className="position-absolute text-danger"
                             style={{top:"15px", right: "15px", cursor: "pointer"}}>&#10060;</div>
                        <button type="submit" className="btn btn-primary">Редактировать объявление</button>
                    </div>
                </div>

                <nav aria-label="Page navigation example" className="m-3">
                    <ul className="pagination">
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </main>
            </div>
    );
};

export default ProfileMain;