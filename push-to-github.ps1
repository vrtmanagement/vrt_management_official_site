# Auto Push to GitHub Script
# Run this script to automatically add, commit, and push changes to GitHub

Write-Host "🚀 Starting GitHub push process..." -ForegroundColor Green

# Navigate to project directory
Set-Location "C:\Users\manishb\Desktop\section1\vrt_management_official_site-main"

# Check if git is initialized
if (-not (Test-Path .git)) {
    Write-Host "❌ Git repository not initialized. Run 'git init' first." -ForegroundColor Red
    exit
}

# Check if remote is set
$remote = git remote -v
if ([string]::IsNullOrEmpty($remote)) {
    Write-Host "⚠️  No remote repository configured." -ForegroundColor Yellow
    Write-Host "Run: git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git" -ForegroundColor Yellow
    exit
}

# Add all changes
Write-Host "📦 Adding files..." -ForegroundColor Cyan
git add .

# Check if there are changes to commit
$status = git status --porcelain
if ([string]::IsNullOrEmpty($status)) {
    Write-Host "✅ No changes to commit." -ForegroundColor Green
    exit
}

# Commit with timestamp
$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
$commitMessage = "Auto commit: $timestamp"
Write-Host "💾 Committing changes: $commitMessage" -ForegroundColor Cyan
git commit -m $commitMessage

# Push to GitHub
Write-Host "⬆️  Pushing to GitHub..." -ForegroundColor Cyan
git push

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Successfully pushed to GitHub!" -ForegroundColor Green
} else {
    Write-Host "❌ Push failed. Check your credentials and remote URL." -ForegroundColor Red
    Write-Host "💡 Tip: You may need to set up a Personal Access Token" -ForegroundColor Yellow
}

