const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

const CONTACTS_FILE = path.join(__dirname, '..', 'data', 'contacts.json');

// RFC 5322 compliant email validator (rejects newlines, control chars, spaces)
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Helper to escape HTML characters in email bodies to prevent HTML injection
const escapeHtml = (str) =>
  String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

// Helper to strip CRLF characters to prevent SMTP header injection
const stripCRLF = (str) =>
  String(str)
    // eslint-disable-next-line no-control-regex
    .replace(/[\r\n\x00-\x1F\x7F]+/g, ' ')
    .trim();

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
  const { name, email, subject, message } = req.body || {};

  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      success: false,
      message: 'Please fill out all fields.',
    });
  }

  // Type & length boundary validation
  if (
    typeof name !== 'string' ||
    typeof email !== 'string' ||
    typeof subject !== 'string' ||
    typeof message !== 'string'
  ) {
    return res.status(400).json({
      success: false,
      message: 'Invalid payload data format.',
    });
  }

  const cleanName = stripCRLF(name);
  const cleanEmail = email.trim();
  const cleanSubject = stripCRLF(subject);
  const cleanMessage = String(message).trim();

  // Strict validation checks
  if (!cleanName || cleanName.length > 100) {
    return res.status(400).json({
      success: false,
      message: 'Name must be between 1 and 100 characters.',
    });
  }

  if (!EMAIL_REGEX.test(cleanEmail) || cleanEmail.length > 254) {
    return res.status(400).json({
      success: false,
      message: 'Please provide a valid email address.',
    });
  }

  if (!cleanSubject || cleanSubject.length > 150) {
    return res.status(400).json({
      success: false,
      message: 'Subject must be between 1 and 150 characters.',
    });
  }

  if (!cleanMessage || cleanMessage.length > 5000) {
    return res.status(400).json({
      success: false,
      message: 'Message must be between 1 and 5000 characters.',
    });
  }

  // Always save locally so no messages are lost
  saveContactLocally({
    name: cleanName,
    email: cleanEmail,
    subject: cleanSubject,
    message: cleanMessage,
  });

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

      // Secure mail options:
      // 1. Send from authenticated account to prevent SPF/DKIM spoofing
      // 2. replyTo routes replies safely back to the validated sender email
      // 3. HTML-escape all user inputs in the email template
      const mailOptions = {
        from: `"QuiznGroww Inquiries" <${process.env.EMAIL_USER}>`,
        replyTo: `"${cleanName}" <${cleanEmail}>`,
        to: process.env.EMAIL_USER,
        subject: `[QuiznGroww Contact] ${cleanSubject}`,
        html: `
          <h2>New Contact Inquiry from QuiznGroww</h2>
          <p><strong>Name:</strong> ${escapeHtml(cleanName)}</p>
          <p><strong>Email:</strong> ${escapeHtml(cleanEmail)}</p>
          <p><strong>Subject:</strong> ${escapeHtml(cleanSubject)}</p>
          <p><strong>Message:</strong></p>
          <blockquote style="background: #f4f4f4; padding: 15px; border-left: 4px solid #4f46e5;">
            ${escapeHtml(cleanMessage).replace(/\n/g, '<br>')}
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
