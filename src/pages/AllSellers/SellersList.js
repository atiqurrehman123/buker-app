import React from 'react'
import SectionHeader from '../../Components/SectionHeader'
import AllSellerTable from '../../Components/Allsellers/AllSellerTable'

const SellersList = () => {
  return (
    <div>
            <SectionHeader  sectionName={"Sellers"}/>
            <AllSellerTable/>

    </div>
  )
}

export default SellersList