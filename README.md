# Derby Kids Online School Website

A modern, responsive website for Derby Kids Online School built with Next.js, React, Tailwind CSS, and EmailJS for form submissions.

## Features

- 🎨 Modern, beautiful UI with smooth animations using Framer Motion
- 📱 Fully responsive design for all devices
- 📧 Email integration for contact form submissions via EmailJS
- 🎓 Complete pages: Home, About, Courses, and Contact
- ⚡ Fast and optimized with Next.js
- 🎯 SEO-friendly structure

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**

## Installation & Setup

### 1. Install Dependencies

Open your terminal in the project directory (`C:\Derbykids`) and run:

```bash
npm install
```

or if you prefer yarn:

```bash
yarn install
```

This will install all required dependencies including:
- Next.js
- React
- Tailwind CSS
- Framer Motion
- Lucide React (icons)
- EmailJS (for email functionality)

### 2. Configure Email Service (EmailJS)

To enable the contact form to send emails, you need to set up EmailJS:

#### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

#### Step 2: Create an Email Service
1. In your EmailJS dashboard, click on **"Email Services"**
2. Click **"Add New Service"**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the prompts to connect your email account
5. Copy the **Service ID** (you'll need this later)

#### Step 3: Create an Email Template
1. Click on **"Email Templates"** in the dashboard
2. Click **"Create New Template"**
3. Use this template structure:

```
Subject: New Contact Form Submission from {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Subject: {{subject}}

Message:
{{message}}
```

4. Save the template and copy the **Template ID**

#### Step 4: Get Your Public Key
1. Go to **"Account"** > **"General"**
2. Find and copy your **Public Key**

#### Step 5: Update the Configuration
Open the file `lib/emailService.js` and replace the placeholder values:

```javascript
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';       // Replace with your Service ID
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';     // Replace with your Template ID
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';       // Replace with your Public Key
```

**Important:** The email will be sent to `derbykidshouse@gmail.com` as configured in the code. To change this, edit line 29 in `lib/emailService.js`:

```javascript
to_email: 'derbykidshouse@gmail.com', // Change to your desired email
```

## Running the Website Locally

Once you've completed the installation and email configuration:

### Development Mode

Run the development server:

```bash
npm run dev
```

or with yarn:

```bash
yarn dev
```

The website will be available at: **http://localhost:3000**

### Production Build

To create a production-ready build:

```bash
npm run build
npm run start
```

or with yarn:

```bash
yarn build
yarn start
```

## Project Structure

```
Derbykids/
├── lib/
│   ├── emailService.js      # Email service for form submissions
│   └── utils.js             # Utility functions
├── components/
│   └── ui/
│       ├── button.js         # Button component
│       ├── input.js          # Input component
│       └── textarea.js       # Textarea component
├── pages/
│   ├── _app.js               # App wrapper
│   ├── index.js              # Home page route
│   ├── about.js              # About page
│   ├── contact.js            # Contact page
│   └── courses.js            # Courses page
├── styles/
│   └── globals.css           # Global styles with Tailwind
├── Layout.js                 # Layout component with navigation
├── next.config.js            # Next.js configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── postcss.config.js         # PostCSS configuration
├── jsconfig.json             # JavaScript configuration
└── package.json              # Project dependencies

```

## Available Pages

- **Home** (`/`) - Main landing page with features and benefits
- **About** (`/about`) - Information about Derby Kids Online School
- **Courses** (`/courses`) - Available courses and programs
- **Contact** (`/contact`) - Contact form and information

## Customization

### Colors
The website uses a blue and amber color scheme. To change colors, edit `tailwind.config.js` and the color values in the components.

### Content
- Edit page components in the `pages/` directory
- Update contact information in `pages/Contact.js`
- Modify navigation links in `Layout.js`

### Email Recipient
To change where form submissions are sent, edit `lib/emailService.js` line 29.

## Troubleshooting

### Port Already in Use
If port 3000 is already in use, you can specify a different port:
```bash
npm run dev -- -p 3001
```

### Email Not Sending
1. Verify your EmailJS credentials are correct
2. Check the browser console for error messages
3. Ensure your EmailJS service is connected and verified
4. Check that you're not exceeding EmailJS free tier limits (200 emails/month)

### Build Errors
1. Delete `node_modules` and `.next` folders
2. Run `npm install` again
3. Try running `npm run build` again

## Support

For issues or questions:
- Email: derbykidshouse@gmail.com
- Phone: +234 806 263 0979
- WhatsApp: [+234 806 263 0979](https://wa.me/2348062630979)

## License

© 2025 Derby Kids Online School. All rights reserved.

