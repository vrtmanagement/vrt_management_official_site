// Quick SMTP connectivity/auth check for your Nodemailer settings
// Usage: node scripts/verify-smtp.js

import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

// Load env from .env.local if present (Next.js uses this in dev)
const envLocalPath = path.join(process.cwd(), ".env.local");
if (fs.existsSync(envLocalPath)) {
  const lines = fs.readFileSync(envLocalPath, "utf8").split(/\r?\n/);
  for (const line of lines) {
    const m = /^([^#=]+)=(.*)$/.exec(line);
    if (m) {
      const key = m[1].trim();
      const value = m[2].trim();
      if (!process.env[key]) process.env[key] = value;
    }
  }
}

const host = process.env.EMAIL_HOST || "mail.vrt9.com";
const port = Number(process.env.EMAIL_PORT || 465);
const secure = process.env.EMAIL_SECURE ? process.env.EMAIL_SECURE === "true" : port === 465;
const user = process.env.EMAIL_USER;
const pass = process.env.EMAIL_PASS;

console.log("Testing SMTP with:", { host, port, secure, user: user && user.replace(/.(?=.{3})/g, "*") });

if (!user || !pass) {
  console.error("Missing EMAIL_USER or EMAIL_PASS in environment.");
  process.exit(1);
}

const transporter = nodemailer.createTransport({
  host,
  port,
  secure,
  auth: { user, pass },
});

try {
  const result = await transporter.verify();
  console.log("✅ SMTP verify OK:", result);
} catch (err) {
  console.error("❌ SMTP verify FAILED:", err?.message || err);
  if (err?.response) console.error("Response:", err.response);
  if (err?.code) console.error("Code:", err.code);
  process.exit(2);
}


