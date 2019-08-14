import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './MovieSession.css';
import { ModalBuyTicket } from '../../MoviePage/ModalBuyTicket/ModalBuyTicket';

export const MovieSession = ({ session }) => {
    const [showModal, setShowModal] = useState(false);

    const tailCut = (arr) => ((arr[arr.length-1] === "") ? arr.join(', ').slice(0, -2) : arr.join(', '));

    const handleClickBuy = () => {
        setShowModal(true);
    }

    return (
        <React.Fragment>
            <div className="movie-session" >
                <div className="movie-session-poster">
                    <img src={session.movie.poster} />
                </div>
                <div className="movie-session-info" >
                    <Link to={`movie/${session.movie._id}`}><span>{session.movie.title}</span> </Link>
                    <div>
                        <p>{session.movie.description}</p>
                    </div>
                    <div>
                        <span>В ролях: </span>
                        <span>{session.movie.actors ? tailCut(session.movie.actors) : ''}</span>
                    </div>
                    <div>
                        <span>Продолжительность: </span>
                        <span>{session.movie.long}</span>
                    </div>
                    <div className="session-room" onClick={handleClickBuy}>
                        <div>
                            <span>Зал: </span>
                            <span>{session.room}</span>
                        </div>
                        <div>
                            <span>{new Date(session.date).toLocaleTimeString().slice(0, -3)}</span>
                        </div>
                    </div>
                </div>
            </div>
            {showModal && <ModalBuyTicket/>}
        </React.Fragment>
    )
}