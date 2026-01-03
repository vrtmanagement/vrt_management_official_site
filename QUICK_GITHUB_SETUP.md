# 🚀 Quick GitHub Setup - Automatic Push

## Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `vrt-management-official-site`
3. Choose Public or Private
4. **DO NOT** check "Initialize with README"
5. Click **"Create repository"**

## Step 2: Copy Your Repository URL

After creating, GitHub shows you a URL like:
- `https://github.com/YOUR_USERNAME/vrt-management-official-site.git`

## Step 3: Run These Commands

```powershell
# Make sure you're in the project folder
cd C:\Users\manishb\Desktop\section1\vrt_management_official_site-main

# Add all files
git add .

# Commit
git commit -m "Initial commit: EGA-1 integration"

# Add GitHub remote (REPLACE with your actual URL)
git remote add origin https://github.com/YOUR_USERNAME/vrt-management-official-site.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 4: Authentication

When you run `git push`, you'll be asked for credentials:
- **Username**: Your GitHub username
- **Password**: Use a **Personal Access Token** (not your GitHub password)

### How to Get Personal Access Token:
1. GitHub → Settings → Developer settings
2. Personal access tokens → Tokens (classic)
3. Generate new token (classic)
4. Name: "VRT Management Site"
5. Select scope: **`repo`** (full control)
6. Generate token → **Copy it immediately**
7. Use this token as your password when pushing

## ✅ After Setup - Automatic Push

I've created a script for you! Just run:

```powershell
.\push-to-github.ps1
```

This will automatically:
- Add all changes
- Commit with timestamp
- Push to GitHub

## 🔄 Manual Push (Alternative)

If you prefer manual control:

```powershell
git add .
git commit -m "Your message here"
git push
```

## 🎯 That's It!

Your code will now be on GitHub and you can push updates anytime!

