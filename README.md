# VRT Management Site

A modern Next.js website for VRT Management Group, featuring business growth programs, workshops, and educational resources.

## 🚀 Features

- **Business Growth Programs**: EGA (Entrepreneurial Growth Accelerator), LBAN (Leadership & Business Accelerator Network), Trimetrix, and Stages of Growth
- **Workshop Management**: EGA workshop registration and information
- **Form Submissions**: Multiple contact and registration forms with email notifications
- **Content Management**: Blogs, podcasts, case studies, and testimonials
- **Team Showcase**: Team member profiles and information
- **Newsletter**: Email subscription functionality
- **Responsive Design**: Modern UI built with Tailwind CSS and Radix UI components

## 🛠️ Tech Stack

- **Framework**: Next.js 16
- **React**: React 19
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI, shadcn/ui
- **Database**: MongoDB (Mongoose)
- **Email**: Nodemailer
- **Form Handling**: React Hook Form with Zod validation
- **Animations**: Framer Motion
- **Icons**: Lucide React, React Icons

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- MongoDB database (local or Atlas)
- SMTP email credentials (Gmail recommended)

## 🔧 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd vrt_mangement_site
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables (see [ENVIRONMENT_SETUP.md](./ENVIRONMENT_SETUP.md)):
```bash
# Create a .env.local file with:
MONGO_URI=your_mongodb_connection_string
EMAIL_HOST=smtp.gmail.com
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EBOOK_PUBLIC_URL=https://your-domain.com/ebook.pdf
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── (landingpage)/     # Landing pages (EGA, LBAN, Trimetrix, etc.)
│   ├── (navbar)/          # Main navigation pages
│   ├── api/               # API routes for form submissions
│   └── page.js            # Home page
├── components/            # React components
│   ├── home/              # Home page components
│   ├── ega/               # EGA program components
│   ├── lban/              # LBAN program components
│   ├── sog/               # Stages of Growth components
│   ├── trimetrix-hd/      # Trimetrix components
│   └── ui/                # Reusable UI components
├── config/                # Configuration files
│   └── db.js              # MongoDB connection
├── models/                # Mongoose schemas
└── lib/                   # Utility functions
```

## 🔌 API Routes

- `/api/egaform` - EGA form submissions
- `/api/egaworkshop` - EGA workshop registrations
- `/api/lban-form` - LBAN form submissions
- `/api/newsletter` - Newsletter subscriptions
- `/api/quiz-submission` - Quiz submissions
- `/api/sogform` - Stages of Growth form submissions
- `/api/trimetrix-form` - Trimetrix form submissions

## 🌐 Environment Variables

See [ENVIRONMENT_SETUP.md](./ENVIRONMENT_SETUP.md) for detailed environment variable setup instructions.

Required variables:
- `MONGO_URI` - MongoDB connection string
- `EMAIL_HOST` - SMTP server host
- `EMAIL_USER` - SMTP username
- `EMAIL_PASS` - SMTP password (use app password for Gmail)
- `EBOOK_PUBLIC_URL` - Public URL for ebook PDF

## 🧪 Testing Environment Setup

Test your environment configuration:
```bash
node scripts/test-env.js
```

Verify SMTP configuration:
```bash
node scripts/verify-smtp.js
```

## 🚢 Deployment

The project is configured for deployment on Vercel. Make sure to:

1. Set all environment variables in your deployment platform
2. Configure MongoDB Atlas IP whitelist if using Atlas
3. Use Gmail app passwords for email authentication
4. Update `EBOOK_PUBLIC_URL` with your production domain

## 📝 License

Private project - All rights reserved

## 👥 Support

For questions or issues, please contact the development team.
