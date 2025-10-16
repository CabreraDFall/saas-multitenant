import express from "express";
import cors from "cors";
import { PrismaClient } from "./generated/prisma/index.js"; // o path correcto
const prisma = new PrismaClient();

const PORT = 4000;
const HOST = '127.0.0.1';

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/register", async (req, res) => {
  const { companyName, email } = req.body;
  const subdomain = companyName.toLowerCase().replace(/\s+/g, "");

  try {
    const tenant = await prisma.tenant.create({
      data: {
        companyName,
        email,
        subdomain,
      },
    });

    const url = `https://${tenant.subdomain}.sas.com`;
    console.log("Nuevo tenant:", tenant);
    res.json({ success: true, url });

  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(PORT, HOST, () => {
    console.log(`API corriendo en http://${HOST}:${PORT}`);
});
