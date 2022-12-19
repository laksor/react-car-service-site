import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import useServiceDetails from '../../hooks/useServiceDetails';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import './Checkout.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

const Checkout = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetails(serviceId);
    const [user] = useAuthState(auth);
    
    
    const handlePlaceOrder = event =>{
        event.preventDefault();
        
        const order = {
            email: user.email,
            service: service.name,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value

        }
        axios.post('https://car-service-sserver.onrender.com/order', order)
        .then(response => {
            const {data} = response;
            if(data.insertedId){
                toast('Order placed');
            
                event.target.reset();
            }
        })
    }
    return (
        <div>
        <PageTitle title="Checkout"></PageTitle>
            <h1 className='checkout-h1'>Checkout</h1>
            <div className='w-50 mx-auto'>
              <h2>Ordering : {service.name}</h2>
              <form onSubmit={handlePlaceOrder}>
              <input className='w-100 m-2' type="text" value={user.displayName}  name="name" placeholder="name" required readOnly disabled/>
              <br/>
              <input className='w-100 m-2' type="text" value={user.email} name="email" placeholder="email" required readOnly disabled/>
              <br/>
              <input className='w-100 m-2' type="text" value={service.name} name="service" placeholder="service" required readOnly disabled/>
              <br/>
              <input className='w-100 m-2' type="text" name="address" placeholder="address" autoComplete='off' required />
              <br/>
              <input className='w-100 m-2' type="text" name="phone" placeholder="phone" required />
              <br/>
              <input className='p-2 m-3 btn btn-primary' type="submit" value="please order" />
              </form>
              <ToastContainer />
            </div>
            
        </div>
    );
};

export default Checkout;