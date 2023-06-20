'use client'

import React from "react"

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Cookies from "js-cookie";

const schema = yup.object().shape({
  username: yup.string().required('Username is requited'),
  password: yup.string().required('Password is required')
})

export default function Login() {
  const {register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = (username, password) => {
    console.log('username', username, password)
    Cookies.set('username', 'kyle')
    // setCookie(null, 'username', 'kyle', {
    //   maxAge: 30 * 24 * 60 * 60,
    //   path: '/',
    // })
    // router.replace('/')
    location.href='/'
    console.log('success')
  }

  return (
      <div className="flex flex-col items-center p-24">
        <p>Login</p>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>


            <div className="grid grid-cols-1 gap-2 md:gap-4">
              <div className="flex flex-col gap-1">
                <label className="">Username</label>
                <input className="border border-red-200" {...register('username')} />
                {errors.username?.message && <p>{errors.username?.message}</p>}
              </div>

              <div className="flex flex-col">
                <label className="">password</label>
                <input className="border border-red-200" {...register('password')} />
                {errors.password?.message && <p>{errors.password?.message}</p>}
              </div>

              <div className="flex flex-col items-center justify-center">
                <button type="submit" className="px-2 py-2 bg-red-500 rounded-full">Login</button>
              </div>
            </div>


            
          </form>
        </div>
      </div>
  )
}