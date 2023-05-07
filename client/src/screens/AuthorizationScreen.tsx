import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RegForm from '../components/Form/RegForm'
import LoginForm from '../components/Form/LoginForm'

export default function LoginScreen() {
  return (
    <div><Routes>
          <Route path='/login' element={<LoginForm/>}/>
          <Route path='registration' element = {<RegForm/>}/>
        </Routes>
        </div>
  )
}
