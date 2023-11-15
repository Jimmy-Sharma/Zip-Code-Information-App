import { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from './Loading';
import locationFound from '../Assets/locationFound.gif'
import { createStandaloneToast } from '@chakra-ui/react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'
import '../Styling/LocationInformationDisplayer.css'
import '../Styling/Loading.css'

const { ToastContainer, toast } = createStandaloneToast()
const LocationInformationDisplayer = ({ postalCode }) => {
    const [loading, setLoading] = useState(true);
    const [locationDetails, setLocationDetails] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`https://api.zippopotam.us/IN/${postalCode}`);
                setLocationDetails(response.data);
                setLoading(false);
                toast({
                    title: `Data Fetched Successfully for ${postalCode}`,
                    status: 'success',
                    duration: 3000,
                });
            } catch (error) {
                setLoading(false);
                toast({
                    title: 'Invalid Postal Code.',
                    status: 'error',
                    duration: 3000,
                });
            }
        };

        fetchData();
    }, [postalCode]);

    return (
        <div className='containerLI'>
            <ToastContainer />
            {loading ? (
                <Loading />
            ) : locationDetails && locationDetails.length !== 0 ? (
                <div className="locationLI">
                    <div className="errorLI">
                        <img src={locationFound} alt="" />
                    </div>
                    <div className="locationDetailsLI">
                        <p>Place Name : {locationDetails.places[0]['place name']}</p>
                        <p>State: {locationDetails.places[0].state},{locationDetails.places[0]['state abbreviation']}</p>
                        <p>Longitude: {locationDetails.places[0].longitude}</p>
                        <p>Latitude: {locationDetails.places[0].latitude}</p>
                        <p>Country: {locationDetails.country}</p>
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