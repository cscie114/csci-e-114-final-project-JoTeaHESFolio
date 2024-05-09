# README.md

[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/NGGI9_Zk)

## Final Project

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
