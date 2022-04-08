import React, { useState } from 'react';
import './Grandpa.css'
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';

export const RingContext = React.createContext("ring");

const Grandapa = () => {
    const [house, setHouse] = useState(1);
    const ornament = "Diamond Ring";
    const handleBuyAHouse = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount);
    }
    return (
        <RingContext.Provider value={ornament}>
            <div className='grandpa'>
                <h2>Grandpa</h2>
                <p>House: {house} <button onClick={handleBuyAHouse}>Buy A House</button></p>
                <section style={{ display: 'flex' }}>
                    <Father house={house}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </section>
            </div>
        </RingContext.Provider>
    );
};

export default Grandapa;