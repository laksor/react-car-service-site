import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://car-service-sserver.onrender.com/service')
            .then(res => res.json())
            .then(data => {
                // Replicate each service entry 4 times
                const replicatedServices = Array.from({ length: 4 }, () => data).flat();
                setServices(replicatedServices);
            });
    }, []);

    return (
        <div id='services' className='container mb-5'>
            <h1 className='heading text-center  mt-5'>Our Services</h1>
            <div className='row'>
                {services.map((service, index) => (
                    <Service key={`${service._id}-${index}`} service={service}></Service>
                ))}
            </div>
        </div>
    );
};

export default Services;
