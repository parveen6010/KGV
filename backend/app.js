import express from "express";
import { config } from "dotenv";
import { Contact } from "./models/contact.js";
import paymentRoutes from "./routes/paymentRoutes.js";
import cors from "cors";
import nodemailer from "nodemailer"; // Import nodemailer

config({ path: "./config/config.env" });
export const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", paymentRoutes);

app.get("/api/getkey", (req, res) =>
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY })
);

app.post("/register", async (req, resp) => {
  try {
    // Save to the database
    let contact = new Contact(req.body);
    let result = await contact.save();

    // Send email notification
    sendEmailNotification(req.body);

    resp.send(result);
  } catch (error) {
    resp.status(500).send(error.message);
  }
});

// Function to send email notification

function sendEmailNotification(formData) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "parveenprajapati9310@gmail.com", // Update with your Gmail address
      pass: "davajvjvmpyfjlri", // Update with your Gmail password
    },
  });

  const mailOptions = {
    from: "parveenprajapati9310@gmail.com",
    to: "parveenprajapati6010@gmail.com",
    subject: "New Registration",
    html: `<p>New registration details:</p>
           <p>Name: ${formData.name}</p>
           <p>Lastname: ${formData.lastname}</p>
           <p>Email: ${formData.email}</p>
           <p>Address: ${formData.address}</p>
           <p>Query: ${formData.query}</p>`,
  };


  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("Email error: " +error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}







// // app.js
// import express from "express";
// import { config } from "dotenv";
// import { Contact } from "./models/contact.js"; // Import the named export
// import paymentRoutes from "./routes/paymentRoutes.js";

// import cors from "cors";
// config({ path: "./config/config.env" });
// export const app = express();
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use("/api", paymentRoutes);

// app.get("/api/getkey", (req, res) =>
//   res.status(200).json({ key: process.env.RAZORPAY_API_KEY })
// );

// app.post("/register", async (req, resp) => {
//   let contact = new Contact(req.body);
//   let result = await contact.save();
//   resp.send(result);
// });

