import  { useState } from 'react';
import './App.css'
import PostalCodeInput from './Components/PostalCodeInput';
import LocationInformationDisplayer from './Components/LocationInformationDisplayer';

const App = () => {
  const [postalCode, setPostalCode] = useState('');

  const handlePostalCodeChange = (code) => {
    setPostalCode(code);
  };

  return (
    <div className='app'>
      <div className='heading'>
        <h1>Zip Code Information App</h1>
      </div>
      <PostalCodeInput onPostalCodeChange={handlePostalCodeChange} />
      {postalCode && <LocationInformationDisplayer postalCode={postalCode} />}
    </div>
  );
};

export default App;
