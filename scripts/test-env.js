// Test script to verify environment variables and database connection
import connectDB from "../src/config/db.js";
import FormLban from "../src/models/FormLbanSchema.js";
import nodemailer from "nodemailer";

console.log("🔍 Testing Environment Configuration...\n");

// Check environment variables
const requiredEnvVars = [
  'MONGO_URI',
  'EMAIL_HOST', 
  'EMAIL_USER',
  'EMAIL_PASS',
  'EBOOK_PUBLIC_URL'
];

console.log("📋 Checking Environment Variables:");
let allEnvVarsPresent = true;

requiredEnvVars.forEach(envVar => {
  const value = process.env[envVar];
  if (value) {
    console.log(`✅ ${envVar}: ${envVar.includes('PASS') ? '***hidden***' : value}`);
  } else {
    console.log(`❌ ${envVar}: NOT SET`);
    allEnvVarsPresent = false;
  }
});

if (!allEnvVarsPresent) {
  console.log("\n❌ Some environment variables are missing!");
  console.log("Please set the following in your production environment:");
  requiredEnvVars.forEach(envVar => {
    if (!process.env[envVar]) {
      console.log(`- ${envVar}`);
    }
  });
  process.exit(1);
}

console.log("\n✅ All environment variables are present!");

// Test database connection
console.log("\n📡 Testing Database Connection...");
try {
  await connectDB();
  console.log("✅ Database connection successful!");
  
  // Test a simple query
  const count = await FormLban.countDocuments();
  console.log(`✅ Database query successful! Found ${count} existing records.`);
} catch (error) {
  console.log("❌ Database connection failed:", error.message);
  process.exit(1);
}

// Test email configuration
console.log("\n📧 Testing Email Configuration...");
try {
  const transporter = nodemailer.createTransport({
    secure: true,
    host: process.env.EMAIL_HOST,
    port: 465,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    }
  });
  
  // Test connection without sending email
  await transporter.verify();
  console.log("✅ Email configuration is valid!");
} catch (error) {
  console.log("❌ Email configuration failed:", error.message);
  console.log("Check your SMTP settings and credentials.");
}

console.log("\n🎉 All tests completed!");
