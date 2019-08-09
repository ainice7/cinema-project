import React from 'react';
import loader from '../../assets/image/loader.svg';

const Preloader = (props) => {
    return(
        <div>
            <img src={loader} alt="loader" />
        </div>
    )
}

export default Preloader;