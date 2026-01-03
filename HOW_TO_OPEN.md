# How to Open and Run the Projects

## 📋 Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

---

## 🚀 Option 1: Main Site (vrt_management_official_site-main)

### Step 1: Navigate to the project folder
```bash
cd vrt_management_official_site-main
```

### Step 2: Install dependencies (if not already installed)
```bash
npm install
```

### Step 3: Run the development server
```bash
npm run dev
```

### Step 4: Open in browser
- The site will be available at: **http://localhost:3000**
- Navigate to **http://localhost:3000/ega-service-landing-page** to see the EGA-1 page
- Navigate to **http://localhost:3000/trimetrix** to see the Solutions section with EGA-1 link

---

## 🎯 Option 2: EGA Service Landing Page (Standalone)

### Step 1: Navigate to the project folder
```bash
cd ega-service-landing-page
```

### Step 2: Install dependencies (if not already installed)
```bash
npm install
```

### Step 3: Run the development server
```bash
npm run dev
```

### Step 4: Open in browser
- The site will be available at: **http://localhost:5173** (or the port shown in terminal)

---

## 🔗 How to Access EGA-1

### From Main Site:
1. **Via Navigation Menu:**
   - Go to http://localhost:3000
   - Click "Solution" in the navigation
   - Select "EGA-1" from the dropdown

2. **Via Solutions Section:**
   - Go to http://localhost:3000/trimetrix
   - Scroll to the "Support Services" section
   - Click on "EGA-1" (it's clickable)

### Direct URL:
- **http://localhost:3000/ega-service-landing-page**

---

## 🏗️ Building for Production

### Main Site:
```bash
cd vrt_management_official_site-main
npm run build
npm start
```

### EGA Service Landing Page:
```bash
cd ega-service-landing-page
npm run build
```

After building, copy the `dist` folder contents to:
```
vrt_management_official_site-main/public/ega-service-landing-page/
```

---

## 📝 Quick Start Commands

### Run both projects simultaneously:

**Terminal 1:**
```bash
cd vrt_management_official_site-main
npm run dev
```

**Terminal 2:**
```bash
cd ega-service-landing-page
npm run dev
```

---

## 🔍 Troubleshooting

### Port already in use?
- Main site: Change port by running `npm run dev -- -p 3001`
- EGA landing page: Vite will automatically use the next available port

### Dependencies not installing?
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again

### EGA-1 page not loading?
- Make sure you've built the ega-service-landing-page
- Copy the built files to `public/ega-service-landing-page/` folder
- Or access it directly at http://localhost:5173 (if running standalone)

---

## ✅ Testing the Links

1. **From Main Site → EGA-1:**
   - Click "EGA-1" in Solutions section or navigation menu
   - Should navigate to `/ega-service-landing-page`

2. **From EGA-1 → Main Site:**
   - Click the VRT logo in the header
   - Click any footer link (Home, EGA Program, etc.)
   - Should navigate back to the main site

---

## 📞 Need Help?

If you encounter any issues:
1. Check that both projects have dependencies installed
2. Ensure Node.js version is 18+
3. Check terminal for error messages
4. Verify the ports are not blocked by firewall

