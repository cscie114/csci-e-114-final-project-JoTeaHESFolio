# README.md

# G.R.o.W. Farmers' Market Project README

## Project Overview

The G.R.o.W. Farmers' Market project aims to provide information about local farmers' markets and how to get involved in working with one. This project includes search functionality for both the Notion database and the USDA database, displaying results in a card format. There are also links to external sites containing information that I developed for another class in the same subject area.

## Prerequisites

- Node.js and npm installed
- Gatsby CLI installed
- Volta for managing Node.js versions
- Notion API key and database ID
- Google Sheets API key and credentials

## Setup Instructions

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-repo/grow-market-site.git
   cd grow-market-site
   ```

2. **Install Dependencies**:

   ```bash
   volta install
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in the root directory and add the following:

   ```env
   GATSBY_NOTION_KEY=your_actual_notion_key
   GATSBY_NOTION_PAGE_ID=your_actual_notion_page_id
   GATSBY_GOOGLE_SHEETS_API_KEY=your_google_sheets_api_key
   GATSBY_GOOGLE_SHEETS_SPREADSHEET_ID=your_google_sheets_spreadsheet_id
   ```

4. **Run the Development Server**:

   ```bash
   volta run gatsby develop
   ```

## Project Structure

- **gatsby-config.js**: Configuration file for Gatsby, including plugins and site metadata.
- **src/pages/farmers-market.js**: Main page component for displaying farmers' market information.
- **src/components/layout.js**: Layout component for the project.
- **src/utils/notion.js**: Utility functions for interacting with the Notion API.
- **src/utils/google-sheets.js**: Utility functions for interacting with the Google Sheets API.

## Usage

- Navigate to `http://localhost:8000/farmers-market/` to access the farmers' market search page.
- Use the search bar to find markets from both the Notion database and the USDA database.

## Troubleshooting

### Notion Database Issues

1. **Check API Key and Database ID**:
   Ensure that the Notion API key and database ID are correctly set in the `.env` file.

2. **API Permissions**:
   Verify that the Notion integration has access to the database. Check the Notion settings and share the database with the integration.

3. **Network Issues**:
   Ensure you have a stable internet connection and that there are no network issues preventing API calls.

### USDA Database Issues

1. **Check API Key**:
   Ensure that the USDA API key is correctly set in the `.env` file.

2. **API Endpoint**:
   Verify that the USDA API endpoint is correct and that the API is functioning. Note that the USDA API is under redevelopment and may experience disruptions.

3. **Data Formatting**:
   Ensure that the data fetched from the USDA API is correctly formatted and parsed before rendering.

## Additional Resources

- [Gatsby Documentation](https://www.gatsbyjs.com/docs/)
- [Notion API Documentation](https://developers.notion.com/)
- [Google Sheets API Documentation](https://developers.google.com/sheets/api)

## Contact

For any questions or issues, please contact [your-email@example.com].

---

This README provides a comprehensive overview of the project setup, usage, and troubleshooting steps to help you successfully run and maintain the G.R.o.W. Farmers' Market project.

[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/NGGI9_Zk)

## Final Project Design

Your README.md file should have:

- Detailed instructions to run your site.
- The URL to where you are hosting the site on web.

Starting structure - before setting up Gatsby.
your-project/
├── src/
│ ├── components/
│ │ ├── Header.js
│ │ ├── Footer.js
│ │ └── ...
│ ├── pages/
│ │ ├── index.js
│ │ ├── about.js
│ │ ├── contact.js
│ │ └── ...
│ └── templates/
│ ├── blog-post.js
│ └── ...
├── content/
│ ├── data/
│ │ ├── your-data-sheets.json
│ │ └── ...
│ ├── images/
│ │ ├── image1.jpg
│ │ ├── image2.jpg
│ │ └── ...
│ └── ...
├── static/
│ ├── favicon.ico
│ ├── robots.txt
│ └── ...
├── .github/
│ └── workflows/
│ └── main.yml
├── .gitignore
├── gatsby-config.js
├── package.json
└── README.md

Process & Workflow:

1. Pages built through Gatsby

2. Get API or Data-driven content from Google Sheets:
   Have been trying to access a Farmers' Market API on the USDA site, but no matter how or when I try and register for a key, I get a failure notice. I have contacted the host institution several times with no response. It seems to be an unmanned, generic email box. I started looking for other API but didn't find anything usable. I found an API respository, but even the listing for farmers' markets on that site had an unusable API - I got a 503. So I returned to the USDA site and downloaded the data, moved it to my Google Drive and located instructions for converting to an API. I followed the instructions on the MIT App Inventor tutorialto transform the sheets into an API. I am really praying that this will allow me to retrieve data from Google Sheets and then use it to generate content for your site.

3. GitHub repository: Pull over from assignment.

4. CI/CD process: I am so new to this CI/CD process and have a panic attack just thinking about it. So I created a 'to-do' list to set up the workflow using GitHub Actions. Here's my basic outline, so that when it doesn't work you can see what I was thinking...:

   - Create a `.github/workflows/main.yml` file in the repository to define the workflow.
   - Use the `gatsby build` command to build to create the site.
   - Use deployment action (`peaceiris/actions-gh-pages`) to deploy the built site to GitHub Pages; or another hosting provider.
   - And then, hopefully this will automate the process of building and deploying the site whenever I push changes to the repository - probably never.

5. Extraordinary Distinction:
   Because of my skill level, I was really just going to develop a Google form to connect with and collect data. However, the chaos with landing an API, married with time constraints forced my hand to work on developing my own data source - lucky me! So, while I am going to submit a form/user data collection for extraordinary distinction, my data set is also part of this area. I am hoping that I will be able to not just collect 'subscriber information', I hope to develop a form that provides a place for collecting details about new farmers markets.

6. README.md:
   This is my 'cry me a river' documentation and the required details. :)

Workflow: to keep my head screwed on straight.

1. Setup Gatsby: Choose a Gatsby starter template and then copy and paste ythe GROW narrative content onto the appropriate pages.
2. Transform Google Sheets to API: Follow the MIT tutorial to set up Google Sheets my data sources. Test the API to ensure it retrieves the data correctly.
3. CI/CD with GitHub Actions: Create a basic CI/CD workflow using GitHub Actions to automate the deployment process.
4. User Data Collection: Create forms in Google forms to collect user data. Integrate them into the project.
5. Documentation: Write a comprehensive README.md file with detailed instructions on how to run your project locally.
6. GitHub Repository: Ensure ythat the project is hosted on correctly, commit final code modifications to GitHub.
7. Submit assignment
