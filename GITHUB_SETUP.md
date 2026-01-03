# GitHub Setup Guide - Automatic Code Push

## 🚀 Quick Setup Steps

### Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** icon → **"New repository"**
3. Repository name: `vrt-management-official-site` (or your preferred name)
4. Choose **Public** or **Private**
5. **DO NOT** initialize with README, .gitignore, or license (we already have files)
6. Click **"Create repository"**

### Step 2: Connect Local Repository to GitHub

After creating the repository, GitHub will show you commands. Use these:

```powershell
# Make sure you're in the project directory
cd C:\Users\manishb\Desktop\section1\vrt_management_official_site-main

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit: EGA-1 integration"

# Add GitHub remote (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

## 📝 Complete Command Sequence

Copy and paste these commands (replace YOUR_USERNAME and REPO_NAME):

```powershell
cd C:\Users\manishb\Desktop\section1\vrt_management_official_site-main
git add .
git commit -m "Initial commit: EGA-1 integration and ega-service-landing-page"
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git branch -M main
git push -u origin main
```

## 🔄 For Future Updates (Automatic Push)

After the initial setup, whenever you make changes:

```powershell
git add .
git commit -m "Your commit message"
git push
```

## 🔐 Using GitHub Personal Access Token

If you get authentication errors, you'll need a Personal Access Token:

1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Give it a name and select scopes: `repo` (full control)
4. Copy the token
5. When prompted for password, paste the token instead

## 🎯 Alternative: Using SSH (More Secure)

If you prefer SSH:

```powershell
# Generate SSH key (if you don't have one)
ssh-keygen -t ed25519 -C "your_email@example.com"

# Add SSH key to GitHub (copy the public key)
cat ~/.ssh/id_ed25519.pub

# Then use SSH URL instead:
git remote add origin git@github.com:YOUR_USERNAME/REPO_NAME.git
```

## ✅ Verify Setup

After pushing, verify it worked:

```powershell
git remote -v
git status
```

## 🔄 Automatic Sync Script (Optional)

Create a PowerShell script for easy pushing:

**File: `push-to-github.ps1`**
```powershell
cd C:\Users\manishb\Desktop\section1\vrt_management_official_site-main
git add .
git commit -m "Auto commit: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
git push
Write-Host "✅ Code pushed to GitHub successfully!"
```

Then run: `.\push-to-github.ps1`

