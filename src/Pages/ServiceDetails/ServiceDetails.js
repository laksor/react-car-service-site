import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import PageTitle from '../Shared/PageTitle/PageTitle';

const ServiceDetails = () => {
    const {serviceId} = useParams();
    const [service, setService] = useState({});
    useEffect( () => {
        const url = `http://localhost:5000/service/${serviceId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setService(data))
    } , []);
    return (
        <div>
        <PageTitle title="Service Details"></PageTitle>
            <h1>You are about to book: {service.name}</h1>
            <Link to="/checkout">
            <Button className='btn btn-primary'>Process checkout</Button>
            </Link>
        </div>
    );
};

export default ServiceDetails;