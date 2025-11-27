import { useState } from "react";

export default function Login() {
  const [login, setLogin] = useState("");
  const [haslo, setHaslo] = useState("");
  const [isRegister, setIsRegister] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    const endpoint = isRegister ? "/register" : "/login";
    const response = await fetch("http://localhost:5000" + endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ login, haslo }),
    });
    const data = await response.json();

    if (data.success) {
      if (!isRegister) {
        localStorage.setItem("userId", data.userId);
        alert("Zalogowano!");
        window.location.href = "/rezerwacja";
      } else {
        alert("Rejestracja udana! Możesz się zalogować.");
        setIsRegister(false);
      }
    } else {
      alert("Błąd: " + data.message);
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="p-6 bg-white shadow-lg rounded-xl space-y-4 w-80">
        <h2 className="text-xl font-bold text-center">
          {isRegister ? "Rejestracja" : "Logowanie"}
        </h2>

        <input
          type="text"
          placeholder="Login"
          className="border p-2 w-full rounded"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />

        <input
          type="password"
          placeholder="Hasło"
          className="border p-2 w-full rounded"
          value={haslo}
          onChange={(e) => setHaslo(e.target.value)}
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
          {isRegister ? "Zarejestruj" : "Zaloguj"}
        </button>

        <p
          className="text-sm text-center text-blue-600 cursor-pointer hover:underline"
          onClick={() => setIsRegister(!isRegister)}
        >
          {isRegister ? "Masz konto? Zaloguj się" : "Nie masz konta? Zarejestruj się"}
        </p>
      </form>
    </div>
  );
}
