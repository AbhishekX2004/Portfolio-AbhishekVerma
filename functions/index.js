const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");
const {Timestamp} = require("firebase-admin/firestore");

admin.initializeApp();

const db = admin.firestore();
const app = express();

app.use(cors({origin: true}));
app.use(express.json());

app.post("/contact", async (req, res) => {
  try {
    const {email, name, subject, body} = req.body;

    await db.collection("contacts").doc(email).set({
      email,
      name,
      subject,
      body,
      timestamp: Timestamp.fromDate(new Date()),
    });
    res.status(200).send({message: "Contact form submitted successfully"});
  } catch (error) {
    console.error("Error adding document: ", error);
    res.status(500).send({message: "Error submitting the form"});
  }
});

exports.api = functions.https.onRequest(app);