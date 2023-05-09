import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import ProfilePage from './pages/ProfilePage'
import NotFoundPage from './pages/NotFoundPage'
import Dashboard from './pages/Dashboard'
import Create from './components/Form/Create'
import Update from './components/Form/Update'

const Main = () => {
    return (
        <div className='main'>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/create' element={<Create />} />
                <Route path='/update/:id' element={<Update />} />
                <Route path='/view/:id' element={<ProfilePage />} />

                <Route path='*' exact={true} element={<NotFoundPage />} />
            </Routes>
        </div>
    )
}

export default Main
