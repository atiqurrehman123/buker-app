import React from 'react'
import CustomerTable from '../../Components/Customers/CustomerTable'
import SectionHeader from '../../Components/SectionHeader'

const CustomerList = () => {
  return (
    <div>
      <SectionHeader  sectionName={"Customers"}/>
      <CustomerTable/>
    </div>
  )
}

export default CustomerList