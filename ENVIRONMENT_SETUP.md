# Environment Variables Setup for Production

## Required Environment Variables

Make sure these environment variables are set in your production environment (Vercel, Netlify, etc.):

### Database Configuration
```
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/database_name?retryWrites=true&w=majority
```

### Email Configuration (SMTP)
```
EMAIL_HOST=smtp.gmail.com
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

### Ebook URL
```
EBOOK_PUBLIC_URL=https://your-domain.com/ebook.pdf
```

## How to Set Environment Variables

### For Vercel:
1. Go to your project dashboard
2. Click on "Settings" tab
3. Click on "Environment Variables"
4. Add each variable with its value

### For Netlify:
1. Go to your site dashboard
2. Click on "Site settings"
3. Click on "Environment variables"
4. Add each variable with its value

## Testing Your Setup

Run the test script to verify your configuration:

```bash
node scripts/test-env.js
```

## Common Issues

1. **Missing Environment Variables**: Make sure all required variables are set
2. **Database Connection**: Verify your MongoDB URI is correct and accessible
3. **Email Authentication**: Use app passwords for Gmail, not your regular password

## Gmail SMTP Setup

If using Gmail:
1. Enable 2-factor authentication
2. Generate an "App Password" for your application
3. Use the app password as `EMAIL_PASS`, not your regular password
