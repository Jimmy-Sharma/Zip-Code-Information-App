import { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from './Loading';
import locationFound from '../Assets/locationFound.gif'
import errorGif from "../Assets/error.gif"
import { createStandaloneToast } from '@chakra-ui/react'
import '../Styling/LocationInformationDisplayer.css'
import '../Styling/Loading.css'

const { ToastContainer, toast } = createStandaloneToast()
const LocationInformationDisplayer = ({ postalCode }) => {
    const [loading, setLoading] = useState(true);
    const [locationData, setLocationData] = useState(null);
    const [isData, setIsData] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`https://api.zippopotam.us/IN/${postalCode}`);
                setLocationData(response.data);
                setIsData(true);
                setLoading(false);
                toast({
                    title: 'Data Fetched Successfully',
                    description: `Data has been retrieved successfully for ${postalCode}`,
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                });
            } catch (error) {
                setLoading(false);
                console.error('Error fetching data:', error);
                setIsData(false);
                setError('Error fetching data. Please check the postal code.');
                toast({
                    title: 'Error Fetching Data',
                    description: 'Error fetching data. Please check the postal code.',
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                });
            }
        };

        fetchData();
    }, [postalCode]);

    let position = [22.3511148, 78.6677428];

    if (locationData && locationData.places && locationData.places.length > 0) {
        const { latitude, longitude } = locationData.places[0];
        position = [latitude, longitude];
    }

    return (
        <div className='containerLI'>
            <ToastContainer />
            {loading ? (
                <Loading />
            ) : isData ? (
                <div className="locationLI">
                    <div className="errorLI">
                        <img src={locationFound} alt="" />
                    </div>
                    <div className="locationDetailsLI">
                        <p>Place Name : {locationData.places[0]['place name']}</p>
                        <p>State: {locationData.places[0].state}</p>
                        <p>Country: {locationData.country}</p>
                    </div>

                </div>
            ) : (
                <div className='errorMSGLi'>
                    <div className="loading">
                        <span>No Data Found...&#128529;</span>
                    </div>
                </div>
            )}
        </div>
    );
};


export default LocationInformationDisplayer;