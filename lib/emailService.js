import emailjs from '@emailjs/browser';

// EmailJS Configuration
// You need to set up an account at https://www.emailjs.com/
// Then replace these values with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'; // Replace with your EmailJS service ID
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS template ID
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // Replace with your EmailJS public key

// Initialize EmailJS
if (typeof window !== 'undefined') {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

// Email Service - Handles contact form submissions via EmailJS
class EmailService {
  constructor() {
    this.contactSubmission = {
      // Send contact form submission via EmailJS
      send: async (data) => {
        try {
          // Send email using EmailJS
          const templateParams = {
            from_name: data.name,
            from_email: data.email,
            phone: data.phone || 'Not provided',
            subject: data.subject,
            message: data.message,
            to_email: 'derbykidshouse@gmail.com', // Your receiving email
          };

          const response = await emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            templateParams
          );

          console.log('Email sent successfully:', response);

          // Store in localStorage as a backup (optional)
          if (typeof window !== 'undefined') {
            const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
            submissions.push({
              ...data,
              timestamp: new Date().toISOString(),
              emailSent: true,
            });
            localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
          }

          return {
            success: true,
            data: data,
            emailResponse: response,
          };
        } catch (error) {
          console.error('Error sending email:', error);
          
          // Store in localStorage even if email fails
          if (typeof window !== 'undefined') {
            const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
            submissions.push({
              ...data,
              timestamp: new Date().toISOString(),
              emailSent: false,
              error: error.message,
            });
            localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
          }

          throw new Error('Failed to send message. Please try again or contact us directly via email.');
        }
      },

      // Get all submissions from localStorage (for admin view)
      getAll: () => {
        if (typeof window !== 'undefined') {
          return JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
        }
        return [];
      },
    };
  }
}

export const emailService = new EmailService();

