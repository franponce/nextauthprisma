'use client';

import { useForm } from 'react-hook-form';
import React from 'react';

function RegisterPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const resJSON = await res.json();
    console.log(resJSON);
  });

  return (
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
      <form onSubmit={onSubmit} className="w-1/4">
        <h1 className="text-slate-200 font-bold text-4xl mb-4">Registro</h1>
        <label htmlFor="username" className="text-slate-500 mb-2 block text-sm">
          Nombre de usuario:
        </label>
        <input
          type="text"
          {...register('username', {
            required: {
              value: true,
              message: 'Nombre de usuario es requerido',
            },
          })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
          placeholder="Acá poné tu usuario"
        />
        {errors.username && (
          <span className="text-red-500 text-xs">{errors.username.message}</span>
        )}
        <label htmlFor="email" className="text-slate-500 mb-2 block text-sm">
          Email:
        </label>
        <input
          type="email"
          {...register('email', {
            required: {
              value: true,
              message: 'El email es requerido',
            },
          })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
          placeholder="Acá pone tu email"
        />
        {errors.email && (
          <span className="text-red-500 text-xs">{errors.email.message}</span>
        )}
        <label htmlFor="password" className="text-slate-500 mb-2 block text-sm">
          Contraseña:
        </label>
        <input
          type="password"
          {...register('password', {
            required: {
              value: true,
              message: 'La contraseña es requerida',
            },
          })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
          placeholder="Ingresa tu contraseña"
        />
        {errors.password && (
          <span className="text-red-500 text-xs">{errors.password.message}</span>
        )}
        <label htmlFor="confirmPassword" className="text-slate-500 mb-2 block text-sm">
          Confirmar contraseña:
        </label>
        <input
          type="password"
          {...register('confirmPassword', {
            required: {
              value: true,
              message: 'La confirmación de la contraseña es requerida',
            },
          })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
          placeholder="Confirmar contraseña"
        />
        {errors.confirmPassword && (
          <span className="text-red-500 text-xs">{errors.confirmPassword.message}</span>
        )}
        <button className="w-full bg-blue-500 text-white p-3 rounded-lg mt-2">
          Registrarme
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
