const express = require("express");
const app = express();

app.use(express.json());

let rooms = [{ id: 1, available: true }];

// Home
app.get("/", (req, res) => {
  res.send("Hotel App Running");
});

// View rooms
app.get("/rooms", (req, res) => {
  res.json(rooms);
});

// Book room
app.post("/book", (req, res) => {
  const room = rooms[0];

  if (!room.available) {
    return res.send("Room not available");
  }

  room.available = false;
  res.send("Room booked successfully");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
