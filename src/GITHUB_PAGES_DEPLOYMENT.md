# GitHub Pages Deployment Guide

This guide will help you deploy your portfolio website to GitHub Pages.

## Prerequisites

1. A GitHub account
2. Git installed on your computer
3. Node.js installed (v18 or higher) - Download from https://nodejs.org
4. Your portfolio files ready

## Step-by-Step Deployment Instructions

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner and select "New repository"
3. Name your repository: `portfolio` (or any name you prefer)
   - **OR** use `<your-username>.github.io` for a user site
   - For example: `chinmay-deo.github.io`
4. Make the repository **Public**
5. Do NOT initialize with README, .gitignore, or license
6. Click "Create repository"

### Step 2: Prepare Your Local Project

Open terminal/command prompt and navigate to your project folder:

```bash
# Navigate to your project folder (where all your .tsx files are)
cd path/to/your/portfolio-folder

# Install dependencies
npm install

# Test the build locally
npm run build

# Preview the build (optional)
npm run preview
```

If the build succeeds, you're ready to deploy!

### Step 3: Deploy Using GitHub Actions (Recommended Method)

Create a GitHub Actions workflow file:

```bash
# Create the .github/workflows directory
mkdir -p .github/workflows
```

Then create `.github/workflows/deploy.yml` with this content:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm install
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist
  
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment
```

### Step 4: Push to GitHub

```bash
# Initialize git (if not already initialized)
git init

# Add all files
git add .

# Commit your files
git commit -m "Initial commit: Portfolio website"

# Add your GitHub repository as remote
git remote add origin https://github.com/your-username/your-repo-name.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** tab
3. Click **"Pages"** in the left sidebar
4. Under **"Source"**, select:
   - **"GitHub Actions"** (NOT "Deploy from a branch")
5. The workflow will automatically run

### Step 6: Wait for Deployment

1. Go to the **"Actions"** tab in your repository
2. You'll see the workflow running
3. Wait for it to complete (usually 1-2 minutes)
4. Once complete, visit: 
   - `https://your-username.github.io/repo-name/` (for project site)
   - `https://your-username.github.io/` (if using username.github.io repo)

## Alternative: Manual Deployment with gh-pages

If you prefer manual deployment:

```bash
# Install dependencies
npm install

# Deploy (builds and pushes to gh-pages branch)
npm run deploy
```

Then in GitHub Settings → Pages, select:
- Source: "Deploy from a branch"
- Branch: `gh-pages`
- Folder: `/ (root)`

## Updating Your Website

Whenever you make changes:

```bash
# Make your changes to .tsx files

# Add and commit changes
git add .
git commit -m "Updated contact information"

# Push to GitHub
git push
```

GitHub Actions will automatically rebuild and deploy your site!

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
