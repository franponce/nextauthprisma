'use client'

import { useForm } from 'react-hook-form';
import React from 'react';

function RegisterPage() {
  const { register, handleSubmit, formState: {errors}} = useForm(); 

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div className='h-[calc(100vh-7rem)] flex justify-center items-center'>
      <form onSubmit={onSubmit} className='w-1/4'>
        <h1 className='text-slate-200 font-bold text-4xl mb-4'>
          Register
        </h1>

        <label htmlFor="username" className='text-slate-500 mb-2 block text-sm'>
          Username:
        </label>
        <input type="text" {...register("username", { required: true })} className='p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full'/>
        {
          
        }
        <label htmlFor="email" className='text-slate-500 mb-2 block text-sm'>
          Email:
        </label>
        <input type="email" {...register("email", { required: true })} className='p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full'/>
        <label htmlFor="password" className='text-slate-500 mb-2 block text-sm'>
          Password:
        </label>
        <input type="password" {...register("password", { required: true })} className='p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full'/>
        <label htmlFor="confirmPassword" className='text-slate-500 mb-2 block text-sm'>
          Confirm Password:
        </label>
        <input type="confirmPassword" {...register("confirmPassword", { required: true })} className='p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full'/> {/* Cambiado type de confirmPassword */}

        <button className='w-full bg-blue-500 text-white p-3 rounded-lg mt-2'>Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;