const express = require("express");
require("dotenv").config();
const { PrismaClient } = require("@prisma/client");
const app = express();
app.use(express.json());
const port = process.env.PORT || 3001;
const prisma = new PrismaClient();
app.get("/", (req, res) => {
res.send("Working ....");
});
app.post("/addUser", async(req, res) => {
console.log(req.body);
try{
const { name,cohort } = req.body;
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
}
catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
    }
});
app.get("/users", async (req, res) => {
    try {
    const blogs = await prisma.user.findMany();
    return res.status(201).json({ data: blogs.length, users });
    } catch (error) {
    return res.status(500).json({ message: "Error fetching blogs" });
    }
    });
app.listen(port, () => {
console.log(`Server listening on ${port}`);
});