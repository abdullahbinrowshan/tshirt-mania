import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandapa';

const Aunty = ({house}) => {
    const ring = useContext(RingContext);
    return (
        <div>
            <h4>Aunty</h4>
            <p>House: {house} </p>
            <p>Ring: <b>{ring}</b></p>
        </div>
    );
};

export default Aunty;