import React from 'react'
import DashboardHeader from '../../Components/Dashboard/DashboardHeader'
import "./Dashboard.css"
import DashboardCard from '../../Components/Dashboard/DashboardCard'
import SellsList from '../../Components/Dashboard/SellsList'
import InvoiceList from '../../Components/Dashboard/InvoiceList'
const Dashboard = () => {
  return (
    <div className='dashboard'>
        <DashboardHeader/>
        <div className='inner-cards'>
            <DashboardCard/>
            <SellsList/>
        </div>
        <div>
          <InvoiceList/>
        </div>
    </div>
  )
}

export default Dashboard