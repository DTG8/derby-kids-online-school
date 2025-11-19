# Quick Start Guide

## Get Up and Running in 3 Steps!

### Step 1: Install Dependencies
```bash
cd C:\Derbykids
npm install
```

### Step 2: Configure Email (Important!)
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Get your Service ID, Template ID, and Public Key
3. Edit `lib/emailService.js` and replace:
   - `YOUR_SERVICE_ID`
   - `YOUR_TEMPLATE_ID`
   - `YOUR_PUBLIC_KEY`

### Step 3: Run the Website
```bash
npm run dev
```

Visit: **http://localhost:3000**

---

## Email Template for EmailJS

Use this template in your EmailJS dashboard:

**Subject:**
```
New Contact Form Submission from {{from_name}}
```

**Body:**
```
From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Subject: {{subject}}

Message:
{{message}}
```

---

## Common Commands

| Command | Description |
|---------|-------------|
| `npm install` | Install all dependencies |
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |

---

## Need Help?

📖 Read the full [README.md](README.md) for detailed instructions

📧 Email: derbykidshouse@gmail.com

📱 WhatsApp: +234 806 263 0979

