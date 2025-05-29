const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const Message = require("./models/Message");

const app = express();
app.use(
  cors({
    origin: ["https://ijassandhu.vercel.app", "http://192.168.29.253:8080"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
app.use(express.json());
const PORT = 5000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"));

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;
  try {
    await Message.create({ name, email, message });
    res.status(201).json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get("/api/messages", async (req, res) => {
  const messages = await Message.find().sort({ timestamp: -1 });
  res.json(messages);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
