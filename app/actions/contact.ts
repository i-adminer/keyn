"use server";

import nodemailer from "nodemailer";

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
}

export async function sendContactEmail(formData: ContactFormData) {
  try {
    // Validate environment variables
    const smtpEmail = process.env.SMTP_EMAIL;
    const smtpPassword = process.env.SMTP_APP_PASSWORD;
    const recipientEmail = process.env.CONTACT_FORM_RECIPIENT;

    if (!smtpEmail || !smtpPassword || !recipientEmail) {
      throw new Error("Email configuration is missing. Please check environment variables.");
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: smtpEmail,
        pass: smtpPassword,
      },
    });

    // Email content
    const mailOptions = {
      from: smtpEmail,
      to: recipientEmail,
      replyTo: formData.email,
      subject: `New Contact Form Submission - ${formData.service}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e3a8a; border-bottom: 2px solid #d97706; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${formData.name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${formData.email}</p>
            ${formData.phone ? `<p style="margin: 10px 0;"><strong>Phone:</strong> ${formData.phone}</p>` : ""}
            <p style="margin: 10px 0;"><strong>Service:</strong> ${formData.service}</p>
          </div>
          
          <div style="margin: 20px 0; padding: 15px; background-color: #f3f4f6; border-left: 4px solid #d97706;">
            <p style="margin: 0 0 5px 0;"><strong>Message:</strong></p>
            <p style="margin: 0; white-space: pre-wrap;">${formData.message}</p>
          </div>
          
          <div style="margin: 20px 0; padding: 10px; background-color: #eff6ff; border-radius: 5px;">
            <p style="margin: 0; font-size: 12px; color: #64748b;">
              This email was sent from the Keyn People Advisory contact form.
              <br>Reply directly to this email to respond to ${formData.name}.
            </p>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return { success: true, message: "Email sent successfully" };
  } catch (error) {
    console.error("Email sending error:", error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "Failed to send email",
    };
  }
}
