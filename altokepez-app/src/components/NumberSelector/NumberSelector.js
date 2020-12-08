import React, {useState} from 'react';
import './NumberSelector.scss';

const NumberSelector = (props) => {

    const [selectedNumber, setSelectedNumber] = useState(1);

    const upNumberHandler = () => {
        setSelectedNumber(prevNumber => {
            const newNumber = ++prevNumber;
            props.click(newNumber);
            return newNumber;
        });
        
    }

    const downNumberHandler = () => {
        setSelectedNumber(prevNumber => {
            const newNumber = --prevNumber;
            if(newNumber === 0){
                return 1;
            }
            props.click(newNumber);
            return newNumber;
        });
    }

    return (
        <div className="numberSelector">
            <div className="numberSelector__number">
                {selectedNumber}
            </div>
            <div className="numberSelector__buttons">
                <div onClick={upNumberHandler}>
                    +
                </div>
                <div onClick={downNumberHandler}>
                    -
                </div>
            </div>
        </div>
    );
}

export default NumberSelector;