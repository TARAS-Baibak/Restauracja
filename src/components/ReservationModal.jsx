import React, { useState } from "react";

const ReservationModal = ({ table, onClose, onReserve }) => {
  const [name, setName] = useState("");
  const [people, setPeople] = useState("");

  const submit = () => {
    onReserve(table.id, name, people);
    onClose();
  };

  return (
    <div style={{
      position: "fixed",
      top: 0, left: 0,
      width: "100vw", height: "100vh",
      backgroundColor: "rgba(0,0,0,0.5)",
      display: "flex", justifyContent: "center", alignItems: "center"
    }}>
      <div style={{ background: "white", padding: 20, borderRadius: 10, width: 300 }}>
        <h2>Rezerwacja {table.name}</h2>

        <input 
          placeholder="Imię i nazwisko"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: "100%", marginBottom: 10 }}
        />

        <input 
          placeholder="Liczba osób"
          type="number"
          value={people}
          onChange={(e) => setPeople(e.target.value)}
          style={{ width: "100%", marginBottom: 10 }}
        />

        <button onClick={submit} style={{ marginRight: 10 }}>Zarezerwuj</button>
        <button onClick={onClose}>Anuluj</button>
      </div>
    </div>
  );
};



export default ReservationModal;
