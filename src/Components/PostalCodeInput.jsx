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

    const handleClear = () => {
        setPostalCode('');
        onPostalCodeChange('');
    };
    return (
        <div>
            <div className='containerPC'>
                <form onSubmit={handleFormSubmit} className='formPC'>
                    <input
                        className='inputPC'
                        type="number"
                        placeholder="Enter Postal Code"
                        value={postalCode}
                        onChange={handlePostalCode}
                    />
                    <button className='buttonPC' type="submit">Search</button>
                    <button className="buttonPC" onClick={handleClear}>Clear</button>
                </form>
            </div>
        </div>
    );
};

export default PostalCodeInput;