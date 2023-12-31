const port = 8000;
const express = require("express");
const { v4: uuidv4 } = require("uuid");
const { MongoClient } = require("mongodb");
const cors = require("cors");
const uri =
  "mongodb+srv://olekmorawski:admin@cluster.8lth5i1.mongodb.net/?retryWrites=true&w=majority";
const app = express();

app.use(express.json());
app.use(cors());

app.post("/signup", async (req, res) => {
  const client = new MongoClient(uri);
  const { email, password } = req.body;

  if (!email || typeof email !== "string") {
    return res.status(400).send("Invalid email format");
  }

  const generatedUserId = uuidv4();

  try {
    await client.connect();
    const database = client.db("oddam-rzeczy-cl");
    const users = database.collection("users");
    const existingUser = await users.findOne({ email });
    if (existingUser) {
      return res.status(409).send("user already exists");
    }

    const sanitizedEmail = email.toLowerCase();
    const data = {
      user_id: generatedUserId,
      email: sanitizedEmail,
      password: password,
    };

    await users.insertOne(data);
    res.status(201).json({ userId: generatedUserId });
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal server error");
  } finally {
    await client.close();
  }
});

app.post("/login", async (req, res) => {
  const client = new MongoClient(uri);
  const { email, password } = req.body;

  try {
    await client.connect();
    const database = client.db("oddam-rzeczy-cl");
    const users = database.collection("users");

    const user = await users.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(400).json("Invalid Credentials");
    }

    return res.status(201).json({ userId: user.user_id });
  } catch (err) {
    console.log(err);
    return res.status(500).json("Server Error");
  } finally {
    await client.close();
  }
});

app.listen(port, () => console.log("server on port " + port));
