import React from 'react'
import SalesListTable from '../../Components/AllSales/SalesListTable'
import "./SalesList.css"
import SectionHeader from '../../Components/SectionHeader'
const SalesList = () => {
  return (
    <div className='sales-main' >
      <SectionHeader  sectionName={"Sales"}/>
      <SalesListTable/>
    </div>
  )
}

export default SalesList