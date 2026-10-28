const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

const CONTACTS_FILE = path.join(__dirname, '..', 'data', 'contacts.json');

// Helper to save contact inquiries locally
const saveContactLocally = (data) => {
  try {
    const dir = path.dirname(CONTACTS_FILE);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    let contacts = [];
    if (fs.existsSync(CONTACTS_FILE)) {
      contacts = JSON.parse(fs.readFileSync(CONTACTS_FILE, 'utf-8') || '[]');
    }
    contacts.unshift({
      ...data,
      date: new Date().toISOString(),
    });
    fs.writeFileSync(CONTACTS_FILE, JSON.stringify(contacts, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error storing contact message:', err.message);
  }
};

// @desc    Handle contact form submission
// @route   POST /api/contact
const handleContactForm = async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      success: false,
      message: 'Please fill out all fields.',
    });
  }

  // Always save locally so no messages are lost
  saveContactLocally({ name, email, subject, message });

  // Attempt email delivery if credentials exist
  if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: `"${name}" <${email}>`,
        to: process.env.EMAIL_USER,
        subject: `[QuiznGroww Contact] ${subject} from ${name}`,
        html: `
          <h2>New Contact Inquiry from QuiznGroww</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <blockquote style="background: #f4f4f4; padding: 15px; border-left: 4px solid #4f46e5;">
            ${message.replace(/\n/g, '<br>')}
          </blockquote>
        `,
      };

      await transporter.sendMail(mailOptions);
    } catch (error) {
      console.warn('Nodemailer notice (saved locally):', error.message);
    }
  }

  res.status(200).json({
    success: true,
    message: 'Thank you! Your message has been received. Our team will get back to you shortly.',
  });
};

module.exports = { handleContactForm };
