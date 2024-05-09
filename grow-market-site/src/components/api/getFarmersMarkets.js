import fetch from "node-fetch"

const NOTION_API_KEY = process.env.NOTION_API_KEY
const DATABASE_ID = "your_database_id_here"

export default async function handler(req, res) {
  const url = `https://api.notion.com/v1/databases/${DATABASE_ID}/query`

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${NOTION_API_KEY}`,
        "Notion-Version": "2021-05-13",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // Optionally add filters or sorts here if needed
      }),
    })

    const data = await response.json()
    const markets = data.results.map(item => ({
      marketName: item.properties.Market_Name.title[0]?.plain_text,
      address: item.properties.Address.rich_text[0]?.plain_text,
      locationDescription:
        item.properties.Location_Description.rich_text[0]?.plain_text,
      locationSite: item.properties.Location_Site.rich_text[0]?.plain_text,
      nutritionSupport:
        item.properties.Nutrition_Support.rich_text[0]?.plain_text,
    }))

    res.status(200).json(markets)
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data from Notion" })
  }
}
