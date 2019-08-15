import React from 'react';

export const PlacesRow = ({ seats, index, handleChosePlace }) => (
    <div className="row">
        <div className="row-legend" >Ряд {index + 1}</div>
        {
            seats.map((elem, n) => {
                return (
                    <div
                        key={`${index + 1}-${n}`}
                        className={`place${elem.booked ? " booked" : ""}`}
                        onClick={() => handleChosePlace(elem)}>
                        <span>{elem.place}</span>
                    </div>
                )
            })
        }
    </div>
)