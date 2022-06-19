import React from 'react';
import useServices from '../hooks/useServices';
import { ToastContainer, toast } from 'react-toastify';

const ManageServices = () => {
    const [services, setServices] = useServices();

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            const url =`http://localhost:5000/service/${id}`;
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
        <div className='w-50 mx-auto py-5'>
            <h2 className='mb-4'>Manage your services</h2>
            {
                services.map( service => <div key={service._id}>
                    <h4>{service.name} <button onClick={() => handleDelete(service._id)} className="btn btn-danger">Delete X</button></h4>
                    </div>)
            }
            <ToastContainer />
        </div>
    );
};

export default ManageServices;