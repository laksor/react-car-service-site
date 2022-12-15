import React from 'react';
import useServices from '../hooks/useServices';
import { ToastContainer, toast } from 'react-toastify';
import './ManageServices.css';

const ManageServices = () => {
    const [services, setServices] = useServices();

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            const url =`https://car-service-sserver.onrender.com/service/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = services.filter(service => service._id !== id);
                setServices(remaining);
                toast('Service deleted');
            })
        }
    }
    return (
        <div>
            <h2 className='mb-4 manageservices-h1'>Manage Services</h2>
            <div  className='w-50 mx-auto py-5'>
            {
                services.map( service => <div key={service._id}>
                    <h4 style={{display: 'flex', padding: '30px', margin: '6px'}}>{service.name}
                     <p style={{paddingLeft: '30px', paddingRight: '30px'}}>{service.description}</p> 
                     <img src={service.img}></img>
                     <button onClick={() => handleDelete(service._id)} className="btn btn-danger">Delete X</button></h4>
                    </div>)
            }
            </div>
            
            <ToastContainer />
        </div>
    );
};

export default ManageServices;