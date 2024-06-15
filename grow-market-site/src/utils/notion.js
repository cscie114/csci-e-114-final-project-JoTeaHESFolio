import { NotionCMS } from "@syneki/notion-cms"
import { NotionRenderer } from "@syneki/notion-renderer"

const renderer = new NotionRenderer()

const cms = new NotionCMS({
  auth: process.env.GATSBY_NOTION_KEY,
  databaseId: process.env.GATSBY_NOTION_PAGE_ID,
  renderer,
})

export default cms
