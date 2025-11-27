import express from "express";
import cors from "cors";
import mysql from "mysql2/promise";

const app = express();

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

app.use(express.json());

// DB
const db = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Tariktarik7",
  database: "rezerwacje",
});

/* REGISTER */
app.post("/register", async (req, res) => {
  const { login, haslo } = req.body;
  await db.query("INSERT INTO users (login, haslo) VALUES (?, ?)", [login, haslo]);
  res.json({ success: true });
});

/* LOGIN */
app.post("/login", async (req, res) => {
  const { login, haslo } = req.body;
  const [rows] = await db.query(
    "SELECT * FROM users WHERE login = ? AND haslo = ?",
    [login, haslo]
  );

  if (rows.length === 0) return res.json({ success: false });

  res.json({ success: true, userId: rows[0].id });
});

/* STOŁIKI */
app.get("/stoliki", async (req, res) => {
  const [rows] = await db.query("SELECT * FROM stoliki");
  res.json(rows);
});

/* REZERWACJA */
app.post("/rezerwuj", async (req, res) => {
  const { userId, stolik_id, data, godzina } = req.body;

  const [existing] = await db.query(
    "SELECT * FROM rezerwacje WHERE user_id = ?",
    [userId]
  );

  if (existing.length > 0) {
    return res.json({ error: "Masz już rezerwację!" });
  }

  await db.query(
    "INSERT INTO rezerwacje (user_id, stolik_id, data, godzina) VALUES (?, ?, ?, ?)",
    [userId, stolik_id, data, godzina]
  );

  res.json({ success: true });
});

/* MOJE REZERWACJE */
app.get("/moje-rezerwacje/:userId", async (req, res) => {
  const userId = req.params.userId;
  const [rows] = await db.query(`
    SELECT r.id, s.nazwa, r.data, r.godzina 
    FROM rezerwacje r
    JOIN stoliki s ON r.stolik_id = s.id
    WHERE r.user_id = ?
  `, [userId]);

  res.json(rows);
});
app.post("/anuluj", async (req, res) => {
  const { rezerwacjaId } = req.body;
  await db.query("DELETE FROM rezerwacje WHERE id = ?", [rezerwacjaId]);
  res.json({ success: true });
});

/* ANULOWANIE */
app.post("/anuluj", async (req, res) => {
  const { rezerwacjaId } = req.body;

  console.log("Usuwam rezerwację ID:", rezerwacjaId);

  try {
    const result = await db.query(
      "DELETE FROM rezerwacje WHERE id = ?",
      [rezerwacjaId]
    );

    console.log("Wynik DELETE:", result);

    res.json({ success: true });
  } catch (err) {
    console.error("Błąd usuwania:", err);
    res.status(500).json({ error: "Błąd usuwania" });
  }
});


/* AUTO CZYSZCZENIE */
setInterval(async () => {
  await db.query(
    "DELETE FROM rezerwacje WHERE CONCAT(data,' ',godzina) < NOW()"
  );
}, 60000);

app.listen(5000, () => console.log("✅ Backend działa: http://localhost:5000"));
