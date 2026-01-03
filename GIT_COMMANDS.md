# Git Commands Guide

## Issues Found:
1. ❌ `git add.` - Missing space (should be `git add .`)
2. ❌ Not a git repository - Need to initialize first

## ✅ Correct Commands:

### Option 1: Initialize Git Repository (if you want to use git)

```powershell
# Navigate to project directory
cd vrt_management_official_site-main

# Initialize git repository
git init

# Add all files
git add .

# Make first commit
git commit -m "Initial commit: EGA-1 integration"

# If you have a remote repository, add it:
# git remote add origin <your-repo-url>
# git push -u origin main
```

### Option 2: If you already have a remote repository

```powershell
cd vrt_management_official_site-main

# Check if git is initialized
git status

# If not initialized, clone your repository or initialize:
git init
git remote add origin <your-repo-url>

# Add files (NOTE: space after 'add')
git add .

# Commit changes
git commit -m "Add EGA-1 integration and ega-service-landing-page"

# Push to remote
git push origin main
# or
git push origin master
```

## Common Git Commands:

```powershell
# Check status
git status

# Add all files (NOTE: space after 'add')
git add .

# Add specific file
git add filename.js

# Commit with message
git commit -m "Your commit message"

# Push to remote
git push

# Pull from remote
git pull

# Check branches
git branch

# Create new branch
git checkout -b new-branch-name
```

## ⚠️ Important Notes:

1. **Always use space**: `git add .` (not `git add.`)
2. **Initialize first**: Run `git init` before using other git commands
3. **Check status**: Use `git status` to see what files need to be committed

