import { useState } from 'react';
import '../Styling/PostalCodeInput.css'
const PostalCodeInput = ({ onPostalCodeChange }) => {
    const [postalCode, setPostalCode] = useState('');

    const handlePostalCode = (event) => {
        setPostalCode(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onPostalCodeChange(postalCode);
    };

    const handleClearData = () => {
        setPostalCode('');
        onPostalCodeChange('');
    };
    return (<>
        <div className='containerPC'>
            <form onSubmit={handleFormSubmit} className='formPC'>
                <input
                    className='inputPC'
                    type="number"
                    placeholder="Enter Postal Code"
                    value={postalCode}
                    onChange={handlePostalCode}
                />
                <button className='buttonPC' type="submit">Submit</button>
                <button className="buttonPC" onClick={handleClearData}>
                    Clear Data
                </button>
            </form>
        </div>
    </>
    );
};

export default PostalCodeInput;