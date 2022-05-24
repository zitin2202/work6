import React from 'react';

const FoundpetMain = () => {
    return (
        <div>
            <main style={{minHeight: "70vh"}}>
                <h2 className="text-center text-white bg-primary m-2">Сообщить о нахождении</h2>
                <div className="p-3">
                    <form className="w-50 m-auto border border-primary p-3" style={{minWidth: "300px"}}>

                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Введите ваше имя</label>
                            <input type="text" className="form-control" id="name"/>
                                <div className="form-text">Используйте кириллические буквы.</div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Введите свой телефон:</label>
                            <input type="phone" className="form-control" id="phone"/>
                                <div className="form-text">Используйте цифры, +, -.</div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Введите адрес электронной почты</label>
                            <input type="email" className="form-control" id="email"/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="kind" className="form-label">Введите id найденного животного:</label>
                            <input type="text" className="form-control" id="kind"/>
                                <div className="form-text">Обязательное поле</div>
                        </div>


                        <div className="mb-3 form-check p-3">
                            <input type="checkbox" className="form-check-input" id="check1"/>
                                <label className="form-check-label" htmlFor="check1">Подтвердить согласие на обработку
                                    персональных данных</label>
                        </div>
                        <input type="submit" onClick="return false" className="btn btn-primary form-control"
                               data-bs-target="#sendModal" data-bs-toggle="modal" value="Отправить"/>

                    </form>
                </div>


                <div className="modal fade " id="sendModal" tabIndex="-1" aria-labelledby="sendModalLabel"
                     aria-hidden="true" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="authModalLabel">Отправлено</h5>
                                <button className="btn-close" data-bs-dismiss="modal"></button>
                            </div>
                            <div className="modal-body">
                                <from className="d-grid gap-4">
                                    <p>Ваше сообщение было отправлено хозяину животного. В скором времени он свяжиться с
                                        вами, чтобы забрать питомца</p>
                                    <button type="submit" className="btn btn-primary" data-bs-dismiss="modal"
                                            onClick='window.location.reload()'>Ок
                                    </button>


                                </from>
                            </div>
                        </div>
                    </div>
                </div>


            </main>
        </div>
    );
};

export default FoundpetMain;