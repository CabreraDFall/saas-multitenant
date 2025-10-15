import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Base de datos simulada
const tenants = [];

app.get("/", (req, res) => {
  res.send("SaaS backend running!");
});

app.post("/api/register", (req, res) => {
  const { companyName, email } = req.body;
  const subdomain = companyName.toLowerCase().replace(/\s+/g, "");
  
  tenants.push({ companyName, email, subdomain });
  
  const url = `https://${subdomain}.sas.com`;
  console.log("Nuevo tenant:", { companyName, email, url });
  
  res.json({ success: true, url });
});

app.listen(4000, () => console.log("API corriendo en http://localhost:4000"));
