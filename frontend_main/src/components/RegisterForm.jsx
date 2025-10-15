// src/components/RegisterForm.jsx
import { useState } from "react";
import { registerTenant } from "../api";

export default function RegisterForm() {
  const [form, setForm] = useState({ companyName: "", email: "" });
  const [loading, setLoading] = useState(false);
  const [tenantUrl, setTenantUrl] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await registerTenant(form);
    setLoading(false);
    if (res.success) setTenantUrl(res.url);
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-xl p-6 mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Crear cuenta</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="companyName"
          placeholder="Nombre de la empresa"
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Correo electrónico"
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          {loading ? "Creando..." : "Registrarme"}
        </button>
      </form>

      {tenantUrl && (
        <div className="mt-4 text-center">
          <p className="text-green-600 font-semibold">
            ¡Listo! Tu subdominio:
          </p>
          <a
            href={tenantUrl}
            className="text-blue-500 underline"
            target="_blank"
            rel="noreferrer"
          >
            {tenantUrl}
          </a>
        </div>
      )}
    </div>
  );
}
