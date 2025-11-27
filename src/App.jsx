import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import TableGrid from "./components/TableGrid";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import MojeRezerwacje from "./pages/MojeRezerwacje";


export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/rezerwacja" element={<TableGrid />} />
        <Route path="/moje-rezerwacje" element={<MojeRezerwacje />} />

        <Route path="/aktualnosci" element={<h1 className='p-6'>Aktualności w budowie...</h1>} />

        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
