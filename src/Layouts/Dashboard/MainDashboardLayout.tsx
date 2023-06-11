import React from 'react'
import FooterDashboard from './Partials/FooterDashboard'
import HeaderDashboard from './Partials/HeaderDashboard'
import { Outlet } from 'react-router-dom'

const MainDashboardLayout:React.FC = () => {
  return (
    <>
    <HeaderDashboard/>
        <main>
            <Outlet/>
        </main>
    <FooterDashboard/>
    </>
  )
}

export default MainDashboardLayout