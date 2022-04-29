import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    const url=`http://localhost:5000/service`;
    fetch(url,{
        method:"POST",
        headers:{
           'content-type' :'application/json'
        },
        body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(result=>{
        console.log(result)
    })
  }

    return (
        <div className='w-50 mx-auto'>
            <h1>Please add a service</h1>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
      <input className="mb-3" placeholder='name' {...register("name")} />
      <textarea className="mb-3" placeholder='description' {...register("description")}/>
      <input className="mb-3" placeholder='price' type="number" {...register("description")} />
      <input className="mb-3" placeholder='photo url' type="text" {...register("img")} />
      <input className="mb-3"  type="submit" value='Add service'/>
    </form>
        </div>
    );
};

export default AddService;
