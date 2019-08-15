import React from 'react';

import { PlacesRow } from './PlacesRow';

export const Places = ({ space, handleChosePlace }) => {
    return (
        <div className="places">
            {   
                space.map((item, i) => {
                    return  <PlacesRow 
                                key={i}
                                seats={item} 
                                index={i} 
                                handleChosePlace={handleChosePlace} />
                })
            }
        </div>
    )
};