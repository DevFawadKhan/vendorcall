// app/lib/email.js
import nodemailer from "nodemailer";

// Email transporter configuration
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || "smtp.gmail.com",
  port: parseInt(process.env.EMAIL_PORT) || 587,
  secure: process.env.EMAIL_SECURE === "true",
  auth: {
    user: process.env.EMAIL_FROM,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Verify connection
transporter.verify((error) => {
  if (error) {
    console.error("Email transporter error:", error);
  } else {
    console.log("Email server is ready to send messages");
  }
});

// Email templates
const emailTemplates = {
  verifyEmail: (name, verificationLink) => `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #4F46E5; color: white; padding: 20px; text-align: center; }
          .content { padding: 30px; background: #f9f9f9; }
          .button { 
            display: inline-block; 
            background: #4F46E5; 
            color: white; 
            padding: 12px 24px; 
            text-decoration: none; 
            border-radius: 5px; 
            margin: 20px 0; 
          }
          .footer { 
            margin-top: 30px; 
            padding-top: 20px; 
            border-top: 1px solid #ddd; 
            color: #666; 
            font-size: 12px; 
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Verify Your Email</h1>
          </div>
          <div class="content">
            <h2>Hello ${name},</h2>
            <p>Thank you for registering with VenCall! Please verify your email address by clicking the button below:</p>
            <p>
              <a href="${verificationLink}" class="button">Verify Email Address</a>
            </p>
            <p>Or copy and paste this link in your browser:</p>
            <p><code>${verificationLink}</code></p>
            <p>This link will expire in 24 hours.</p>
            <p>If you didn't create an account with us, please ignore this email.</p>
          </div>
          <div class="footer">
            <p>© ${new Date().getFullYear()} VenCall. All rights reserved.</p>
            <p>This is an automated message, please do not reply.</p>
          </div>
        </div>
      </body>
    </html>
  `,

  resetPassword: (name, resetLink) => `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #DC2626; color: white; padding: 20px; text-align: center; }
          .content { padding: 30px; background: #f9f9f9; }
          .button { 
            display: inline-block; 
            background: #DC2626; 
            color: white; 
            padding: 12px 24px; 
            text-decoration: none; 
            border-radius: 5px; 
            margin: 20px 0; 
          }
          .footer { 
            margin-top: 30px; 
            padding-top: 20px; 
            border-top: 1px solid #ddd; 
            color: #666; 
            font-size: 12px; 
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Reset Your Password</h1>
          </div>
          <div class="content">
            <h2>Hello ${name},</h2>
            <p>We received a request to reset your password. Click the button below to create a new password:</p>
            <p>
              <a href="${resetLink}" class="button">Reset Password</a>
            </p>
            <p>Or copy and paste this link in your browser:</p>
            <p><code>${resetLink}</code></p>
            <p>This link will expire in 1 hour.</p>
            <p>If you didn't request a password reset, please ignore this email and your password will remain unchanged.</p>
            <p><strong>Security Tip:</strong> Never share your password or this link with anyone.</p>
          </div>
          <div class="footer">
            <p>© ${new Date().getFullYear()} VenCall. All rights reserved.</p>
            <p>This is an automated message, please do not reply.</p>
          </div>
        </div>
      </body>
    </html>
  `,
};

// Send verification email
export async function sendVerificationEmail(email, name, token) {
  const verificationLink = `${process.env.NEXT_PUBLIC_APP_URL}/verify-email?token=${token}`;

  const mailOptions = {
    from: `"VenCall" <${process.env.EMAIL_FROM || process.env.EMAIL_USER}>`,
    to: email,
    subject: "Verify Your Email - VenCall",
    html: emailTemplates.verifyEmail(name, verificationLink),
    text: `Hello ${name},\n\nPlease verify your email by clicking: ${verificationLink}\n\nThis link expires in 24 hours.`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Verification email sent:", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error sending verification email:", error);
    return { success: false, error: error.message };
  }
}

// Send password reset email
export async function sendPasswordResetEmail(email, name, token) {
  const resetLink = `${process.env.NEXT_PUBLIC_APP_URL}/reset-password?token=${token}`;

  const mailOptions = {
    from: `"VenCall Support" <${process.env.EMAIL_FROM || process.env.EMAIL_USER}>`,
    to: email,
    subject: "Reset Your Password - VenCall",
    html: emailTemplates.resetPassword(name, resetLink),
    text: `Hello ${name},\n\nReset your password here: ${resetLink}\n\nThis link expires in 1 hour.\n\nIf you didn't request this, please ignore.`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Reset password email sent:", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error sending reset email:", error);
    return { success: false, error: error.message };
  }
}

// Test email connection
export async function testEmailConnection() {
  try {
    await transporter.verify();
    return { connected: true };
  } catch (error) {
    return { connected: false, error: error.message };
  }
}
