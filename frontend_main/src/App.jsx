// src/App.jsx
import RegisterForm from "./components/RegisterForm";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Bienvenido a SAS.com
      </h1>
      <p className="text-gray-500 mb-8">Crea tu cuenta para empezar</p>
      <RegisterForm />
    </div>
  );
}

export default App;
