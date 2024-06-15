import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/farmers-market.module.css"

const FarmersMarketPage = () => {
  const [markets, setMarkets] = useState([])
  const [filteredMarkets, setFilteredMarkets] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 20

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Commented out the Notion API call
        // const response = await fetch(`/notion-api-endpoint`);
        // if (!response.ok) {
        //   throw new Error(`HTTP error! status: ${response.status}`);
        // }
        // const data = await response.json();
        // setMarkets(data.results);
        // setFilteredMarkets(data.results);
      } catch (error) {
        console.error("Error fetching data: ", error)
      }
    }
    fetchData()
  }, [])

  const handleSearch = event => {
    setSearchTerm(event.target.value)
    if (event.target.value === "") {
      setFilteredMarkets(markets)
    } else {
      const filtered = markets.filter(market =>
        market.properties.Market_Name.title[0]?.plain_text
          .toLowerCase()
          .includes(event.target.value.toLowerCase())
      )
      setFilteredMarkets(filtered)
    }
  }

  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber)
  }

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentMarkets = filteredMarkets.slice(
    indexOfFirstItem,
    indexOfLastItem
  )
  const totalPages = Math.ceil(filteredMarkets.length / itemsPerPage)

  return (
    <Layout>
      <Seo title="Find a Farmers' Market" />
      <h1 className={styles.pageTitle}>Find a Farmers' Market</h1>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search for a market..."
          value={searchTerm}
          onChange={handleSearch}
          className={styles.searchInput}
          id="notionSearch"
        />
        <button onClick={handleSearch} className={styles.searchButton}>
          Search
        </button>
      </div>
      <div className={styles.marketGrid}>
        {currentMarkets.length > 0 ? (
          currentMarkets.map((market, index) => (
            <div key={index} className={styles.marketCard}>
              <h2>{market.properties.Market_Name.title[0]?.plain_text}</h2>
              <p>
                Address: {market.properties.Address.rich_text[0]?.plain_text}
              </p>
              <p>
                Location:{" "}
                {market.properties.location_indoor.rich_text[0]?.plain_text}
              </p>
              <p>
                Accepted Payment:{" "}
                {market.properties.acceptedpayment.rich_text[0]?.plain_text}
              </p>
              <p>
                SNAP Option:{" "}
                {market.properties.SNAP_option.rich_text[0]?.plain_text}
              </p>
            </div>
          ))
        ) : (
          <p>No markets found</p>
        )}
      </div>
      <div className={styles.pagination}>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <hr className={styles.divider} />
      <h2>Or search the USDA Local Food Directory here</h2>
      <p>
        Note: this site is currently being updated and experiencing temporary
        disruptions. The card list may not populate consistently.
      </p>
      <div className={styles.usdaSearchContainer}>
        <input
          type="text"
          placeholder="Search the USDA directory..."
          className={styles.searchInput}
          id="usdaSearch"
          onChange={event => {
            // Handle USDA search logic here
          }}
        />
        <button
          onClick={() => {
            /* Add USDA search logic here */
          }}
          className={styles.searchButton}
        >
          Search
        </button>
      </div>
      <h1 className={styles.usdaLink}>
        <a
          href="https://www.usdalocalfoodportal.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          USDA Food Map
        </a>
      </h1>
    </Layout>
  )
}

export default FarmersMarketPage
