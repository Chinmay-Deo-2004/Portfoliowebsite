# 🚀 SIMPLE 3-STEP DEPLOYMENT

## Before You Start
Make sure you have:
- ✅ GitHub account
- ✅ Git installed
- ✅ Node.js installed (download from https://nodejs.org)

## Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `your-username.github.io` (replace "your-username" with your actual GitHub username)
   - Example: If your username is "chinmay-deo", name it: `chinmay-deo.github.io`
3. Make it **Public**
4. Click "Create repository"
5. **IMPORTANT**: Copy the repository URL (you'll need this in Step 3)

## Step 2: Build Your Project

Open Terminal (Mac/Linux) or Command Prompt (Windows):

```bash
# Navigate to your project folder
cd path/to/your/portfolio

# Install everything needed
npm install

# Build the website
npm run build
```

**Wait for it to finish!** You should see "✓ built in XXXms"

## Step 3: Upload to GitHub

```bash
# Initialize git
git init

# Add all files
git add .

# Save your work
git commit -m "Initial portfolio"

# Connect to GitHub (REPLACE WITH YOUR URL FROM STEP 1)
git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git

# Upload to GitHub
git push -u origin main
```

## Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** (top menu)
3. Click **"Pages"** (left sidebar)
4. Under "Source", select: **"GitHub Actions"**
5. Wait 2-3 minutes

## Step 5: View Your Website! 🎉

Your site will be live at:
```
https://YOUR-USERNAME.github.io
```

Example: `https://chinmay-deo.github.io`

---

## 🔄 To Update Your Website Later

Make your changes, then run:

```bash
git add .
git commit -m "Updated my portfolio"
git push
```

Wait 2-3 minutes, and your site will be updated!

---

## ❌ Common Issues & Fixes

### "npm: command not found"
**Fix:** Install Node.js from https://nodejs.org

### "Permission denied"
**Fix:** On Mac/Linux, use: `sudo npm install`

### "remote: Repository not found"
**Fix:** Check your repository URL is correct. Get it from GitHub → Your Repo → Code → HTTPS

### "Site shows 404"
**Fix:** 
1. Wait 5 minutes (deployment takes time)
2. Check Settings → Pages is set to "GitHub Actions"
3. Check Actions tab to see if deployment succeeded

### "Blank white page"
**Fix:** 
1. Check browser console (F12) for errors
2. Make sure you ran `npm run build` successfully
3. Clear browser cache and reload

---

## 📞 Need Help?

1. Check the Actions tab in your GitHub repository for error messages
2. Read the full guide: `GITHUB_PAGES_DEPLOYMENT.md`
3. Google any error messages you see

**Good luck! 🚀**
