# GitHub Pages Deployment Guide

This guide will help you deploy your portfolio website to GitHub Pages.

## Prerequisites

1. A GitHub account
2. Git installed on your computer
3. Your portfolio files ready

## Step-by-Step Deployment Instructions

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner and select "New repository"
3. Name your repository: `<your-username>.github.io` 
   - For example, if your username is "chinmay-deo", name it `chinmay-deo.github.io`
   - This will make your site available at `https://chinmay-deo.github.io`
4. Make the repository **Public**
5. Do NOT initialize with README, .gitignore, or license
6. Click "Create repository"

### Step 2: Export Your Project from Figma Make

1. In Figma Make, click the **"Export"** or **"Download"** button
2. This will download a ZIP file containing all your project files
3. Extract the ZIP file to a folder on your computer

### Step 3: Prepare Your Files

Your extracted folder should contain:
- `index.html` (main HTML file)
- `assets/` folder (contains CSS, JS, and images)
- Other necessary files

### Step 4: Initialize Git and Push to GitHub

Open your terminal/command prompt and navigate to your project folder:

```bash
# Navigate to your project folder
cd path/to/your/portfolio-folder

# Initialize git repository
git init

# Add all files
git add .

# Commit your files
git commit -m "Initial commit: Portfolio website"

# Add your GitHub repository as remote (replace with your actual repository URL)
git remote add origin https://github.com/your-username/your-username.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **"Settings"** tab
3. Scroll down to **"Pages"** in the left sidebar
4. Under **"Source"**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **"Save"**

### Step 6: Wait for Deployment

1. GitHub will automatically build and deploy your site
2. This usually takes 1-3 minutes
3. You'll see a message: "Your site is live at https://your-username.github.io"
4. Visit the URL to see your live portfolio!

## Updating Your Website

Whenever you make changes to your portfolio:

```bash
# Add your changes
git add .

# Commit with a descriptive message
git commit -m "Updated contact information"

# Push to GitHub
git push
```

GitHub Pages will automatically rebuild and deploy your updated site within a few minutes.

## Custom Domain (Optional)

If you want to use a custom domain like `chinmaydeo.com`:

1. Purchase a domain from a domain registrar (GoDaddy, Namecheap, etc.)
2. In your repository, create a file named `CNAME` (no extension) in the root
3. Add your custom domain to the file: `chinmaydeo.com`
4. In your domain registrar's DNS settings, add these records:
   - Type: `A`, Host: `@`, Value: `185.199.108.153`
   - Type: `A`, Host: `@`, Value: `185.199.109.153`
   - Type: `A`, Host: `@`, Value: `185.199.110.153`
   - Type: `A`, Host: `@`, Value: `185.199.111.153`
   - Type: `CNAME`, Host: `www`, Value: `your-username.github.io`
5. Wait 24-48 hours for DNS propagation

## Troubleshooting

### Site not loading?
- Wait a few minutes and refresh
- Check if GitHub Pages is enabled in Settings
- Make sure your `index.html` is in the root directory

### CSS/JS not loading?
- Check that all paths in your HTML are relative (not absolute)
- Ensure the `assets/` folder is pushed to GitHub

### 404 Error?
- Verify the repository name is `your-username.github.io`
- Check that you're using the correct URL

## Publishing on Figma Community

To publish your work on Figma:

1. Open your Figma Make project
2. Click **"Share"** or **"Publish"** button
3. Fill in:
   - Project name: "Portfolio Website - Radar Engineer"
   - Description: Describe your portfolio and its features
   - Add tags: "portfolio", "dark-theme", "engineering", "minimal"
4. Add your GitHub Pages URL in the description
5. Click **"Publish to Community"**

## Need Help?

- GitHub Pages documentation: https://docs.github.com/en/pages
- Git tutorial: https://git-scm.com/docs/gittutorial

---

**Your Portfolio URL:** `https://your-username.github.io`

Good luck with your deployment! 🚀
