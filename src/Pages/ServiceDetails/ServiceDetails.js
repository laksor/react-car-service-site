import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {serviceId} = useParams();
    return (
        <div>
            <h1>Welcome to ServiceDetails: {serviceId}</h1>
            <Link to="/checkout">
            <Button className='btn btn-primary'>Proces checkout</Button>
            </Link>
        </div>
    );
};

export default ServiceDetails;