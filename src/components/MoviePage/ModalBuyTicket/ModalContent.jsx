import React from 'react';
import { Icon } from 'antd';

import { Form } from './Form';
import { Places } from './Places';

export const ModalContent = ({
    user,
    session,
    chosenPlace,
    space,
    showForm,
    handleCloseModal,
    handleChosePlace,
    handleClickBuy,
    handleOpenForm
}) => {
    return  <div>
            {
                user
                    ? <div>
                        <h1>{user.name}, спасибо вам за покупку!</h1>
                        <h2>Ваш билет был выслан вам на почту {user.email}</h2>
                    </div>
                    : <React.Fragment>
                        <h2>{session.movie.title}</h2>
                        <h3>Выберите место: </h3>
                        <Places space={space} handleChosePlace={handleChosePlace} />
                        {
                            chosenPlace && <div>
                                <h2>Выбрано ряд: {chosenPlace.row} место: {chosenPlace.place}</h2>
                                {
                                    showForm
                                        ? <Form handleSubmitForm={handleClickBuy} />
                                        : <div className="btn-buy modal" onClick={handleOpenForm}>Continue</div>
                                }

                            </div>
                        }
                    </React.Fragment>
            }
            <span className="btn-close" onClick={handleCloseModal} >
                <Icon type="close" />
            </span>
        </div>
}