const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { PrismaClient } = require("@prisma/client");
const app = express();
app.use(express.json());
const port = process.env.PORT || 3001;
const prisma = new PrismaClient();
app.use(cors())
app.get("/", (req, res) => {
  res.send("Working ....");
});
app.post("/addUser", async (req, res) => {
  console.log(req.body);
  try {
    const { name, cohort } = req.body;
    if (!name || !cohort) {
      return res
        .status(400)
        .json({ message: "Please input Title and Content" });
    }
    const blog = await prisma.user.create({
      data: { name, cohort },
    });

    return res
      .status(201)
      .json({ message: "Blog created successfully", data: blog });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/users", async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    return res.status(201).json({ data: users.length, users });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error fetching blogs" });
  }
});

app.put("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = await prisma.user.update({
      where: { id: parseInt(id) },
      data: req.body,
    });
    return res.status(200).json({ message: "User updated", user: updatedUser });
  } catch (error) {
    return res.status(500).json({ message: "Error updating user" });
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.user.delete({
      where: { id: parseInt(id) },
    });
    return res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Error deleting user" });
  }
});

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
