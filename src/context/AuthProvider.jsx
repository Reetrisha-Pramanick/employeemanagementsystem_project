import React, { useEffect, useState, createContext } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
  const [userData, setUserData] = useState(null)

  // USE EFFECT #1: The Initializer
  // Purpose: Load data from local storage when the app starts
  useEffect(() => {
    const existingData = localStorage.getItem('employees')
    
    if (!existingData) {
        // Only run your default setLocalStorage if the browser is empty
        setLocalStorage() 
    }
    
    const { employees } = getLocalStorage()
    setUserData(employees)
  }, []) // Runs only once

  // USE EFFECT #2: The Synchronizer
  // Purpose: Every time you call setUserData(), this saves it to the "database"
  useEffect(() => {
    if (userData) {
      localStorage.setItem('employees', JSON.stringify(userData))
    }
  }, [userData]) 
  return (
    <AuthContext.Provider value={[userData, setUserData]}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider