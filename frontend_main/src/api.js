// src/api.js
const API_URL = "http://localhost:4000/api";

export async function registerTenant(data) {
  const res = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}
