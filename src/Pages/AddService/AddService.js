import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import './AddService.css';


const AddService = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    const form = document.getElementById('form');
    form.reset();

    const url = `https://car-service-sserver.onrender.com/service`;
    fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result => {
        console.log(result);
    })
    toast('Service Added');
};

  return (
    <div>
   
      <h1 className="addservice-h1">Add a Service </h1>
      
      <div className="w-50 mx-auto">
      <form id="form" className="d-flex flex-column mb-5" onSubmit={handleSubmit(onSubmit)}>
      <input className="mb-2" placeholder="Name" {...register("name", { required: true, maxLength: 20 })} />
      <textarea className="mb-2" placeholder="Description" {...register("description")} />
      <input className="mb-2" placeholder="Price" type="number" {...register("price")} />
      <input className="mb-2" placeholder="Photo Url" type="text" {...register("img")} />
      <button value="Add Service" type="submit" className="btn btn-primary">Add Service</button>
    </form>
      </div>
     
    <ToastContainer />
    </div>
  );
};

export default AddService;
