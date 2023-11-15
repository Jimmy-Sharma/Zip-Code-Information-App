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
      <PostalCodeInput onPostalCodeChange={handlePostalCodeChange} />
      {postalCode && <LocationInformationDisplayer postalCode={postalCode} />}
    </div>
  );
};

export default App;
