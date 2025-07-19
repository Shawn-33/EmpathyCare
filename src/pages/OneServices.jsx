import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import RightSide from '../components/RightSide';
import LeftSide from '../components/LeftSide';
const OneServices = () => {
    const [service, setService] = useState(null);
    useEffect(() => {
        const service = JSON.parse(localStorage.getItem('serviceDetails'));
        console.log(service);
        if (service) {
            setService(service);
        } else {
            // Handle the case where no service is found
            console.error('No service found in localStorage');
        }
    }, []);
    return (
        <div>
            {!service ? (
                <div className="flex justify-center items-center h-screen">
                    <div className="loader"></div> {/* Add your loading spinner here */}
                </div>
            ) : (
                <>
                    <RightSide img={service.image} title={service.title} description={service.description} isButton={true} />
                    {service.moreDescription && service.moreDescription.map((item, index) => {
                        if (index % 2 === 0) {
                            return (
                                <LeftSide img={item.image} title={item.title} description={item.description} isButton={true} />
                            );
                        } else {
                            return <RightSide img={item.image} title={item.title} description={item.description} isButton={true} />;
                        }
                    })}
                    {/* <div className="flex justify-center items-center mt-8">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Book Now
                        </button>
                    </div> */}
                </>
            )}
        </div>
    );
};

export default OneServices;