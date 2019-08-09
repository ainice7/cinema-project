import React from 'react';
import fail from '../../assets/image/fail.webp';

const Fail = () => {
    return <div className='fail-load' >
                <img src={fail} alt="fail load" />
                <h1>Oops! Something went wrong</h1>
            </div>
}

export default Fail;