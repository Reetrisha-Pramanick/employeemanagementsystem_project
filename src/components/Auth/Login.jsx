import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email,password)
        setEmail("")
        setPassword("")
    }
  return (
    <div className='min-h-screen w-full flex items-center justify-center'>
        <div className='border-2 rounded-xl border-emerald-600 p-20'>
            <form 
            onSubmit={(e)=>{
                submitHandler(e)
            }}
            className='flex flex-col items-center justify-center'>
                <input 
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                required className='outline-none border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400'type="email" placeholder='Enter your email'/>
                <input 
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                required className='outline-none border-2 border-emerald-600 mt-4 text-xl py-3 px-5 rounded-full placeholder:text-gray-400'type="password" placeholder='Enter password' />
                <button className='text-white outline-none border-2 border-emerale-500 bg-black-600 mt-7 text-xl py-3 px-5 rounded-full placeholder:text-white'>Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login