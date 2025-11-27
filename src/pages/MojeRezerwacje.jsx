import { useEffect, useState } from "react";

export default function MojeRezerwacje() {
  const [rezerwacje, setRezerwacje] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    fetch(`http://localhost:5000/moje-rezerwacje/${userId}`)
      .then(res => res.json())
      .then(data => setRezerwacje(data));
  }, [userId]);

  const anuluj = (id) => {
    fetch("http://localhost:5000/anuluj", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ rezerwacjaId: id })
    })
      .then(() => {
        setRezerwacje(prev => prev.filter(r => r.id !== id));
      });
  };
  const ladnaData = (data) => {
  const d = new Date(data);
  return d.toLocaleDateString("pl-PL");
};

const ladnaGodzina = (godzina) => {
  if (!godzina) return "";
  return godzina.slice(0, 5); // usuwa sekundy (HH:MM)
};


  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Moje rezerwacje</h1>

      {rezerwacje.length === 0 && (
        <p>Nie masz żadnych rezerwacji</p>
      )}

      {rezerwacje.map(r => (
        <div key={r.id} className="border p-4 mb-3 rounded shadow">
          <p><b>Stolik:</b> {r.stolik}</p>
          <p>Data: {ladnaData(r.data)}</p>
<p>Godzina: {ladnaGodzina(r.godzina)}</p>


          <button
            onClick={() => anuluj(r.id)}
            className="bg-red-500 text-white px-4 py-1 mt-2 rounded"
          >
            Anuluj rezerwację
          </button>
        </div>
      ))}
    </div>
  );
}
