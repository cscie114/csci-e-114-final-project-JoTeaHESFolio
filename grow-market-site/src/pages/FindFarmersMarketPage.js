import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const FindFarmersMarketPage = () => {
  const [farmersMarkets, setFarmersMarkets] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/getFarmersMarkets") // Endpoint set by your Gatsby Function
      const data = await response.json()
      setFarmersMarkets(data)
    }

    fetchData()
  }, [])

  return (
    <Layout>
      <Seo title="Find a Farmers' Market" />
      <h1>Find a Farmers' Market</h1>
      <p>
        This page is a resource to locate a farmers market near where you live.
      </p>
      <div>
        {farmersMarkets.map((market, index) => (
          <div key={index}>
            <h2>{market.marketName}</h2>
            <p>{market.address}</p>
            <p>Description: {market.locationDescription}</p>
            <p>Site: {market.locationSite}</p>
            <p>Nutrition Support: {market.nutritionSupport}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default FindFarmersMarketPage
