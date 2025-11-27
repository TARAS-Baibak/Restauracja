import { useEffect, useState } from "react";
import ReservationModal from "./ReservationModal";

export default function TableGrid() {
  const [stoliki, setStoliki] = useState([]);
  const [selected, setSelected] = useState(null);
  const [data, setData] = useState("");
  const [godzina, setGodzina] = useState("");

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    fetch("http://localhost:5000/stoliki")
      .then(res => res.json())
      .then(data => setStoliki(data));
  }, []);

  const reserveTable = (id) => {
    if (!data || !godzina) {
      alert("Wybierz datę i godzinę!");
      return;
    }

    fetch("http://localhost:5000/rezerwuj", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId,
        stolik_id: id,
        data,
        godzina
      })
    })
      .then(res => res.json())
      .then(result => {
        if (result.error) alert(result.error);
        else alert("✅ Zarezerwowano!");
      });
  };

  if (!userId) {
    return <h2 className="p-6">Zaloguj się aby rezerwować stoliki.</h2>;
  }

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">Rezerwacja stolików</h1>

      <div className="mb-4">
        <input type="date" value={data} onChange={e => setData(e.target.value)} className="border p-2 m-2"/>
        <input type="time" value={godzina} onChange={e => setGodzina(e.target.value)} className="border p-2 m-2"/>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {stoliki.map((stolik) => (
          <button
            key={stolik.id}
            onClick={() => setSelected(stolik)}
            className="p-6 bg-green-500 text-white rounded"
          >
            {stolik.nazwa}
          </button>
        ))}
      </div>

      {selected && (
        <ReservationModal
          table={selected}
          onClose={() => setSelected(null)}
          onReserve={(id) => reserveTable(id)}
        />
      )}
    </div>
  );
}
