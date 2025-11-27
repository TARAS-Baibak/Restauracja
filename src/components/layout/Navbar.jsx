import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");

  const logout = () => {
    localStorage.removeItem("userId");
    navigate("/login");
  };

  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <div className="flex gap-6">
        <Link to="/" className="hover:text-gray-300">Strona Główna</Link>
        <Link to="/menu" className="hover:text-gray-300">Menu</Link>
        <Link to="/rezerwacja" className="hover:text-gray-300">Rezerwacja</Link>
         {userId && (
  <Link to="/moje-rezerwacje" className="hover:text-gray-300">
    Moje rezerwacje
  </Link>
)}

        <Link to="/aktualnosci" className="hover:text-gray-300">Aktualności</Link>

        {/* Admin widoczny tylko dla zalogowanych (opcjonalnie kiedyś) */}
        {/* <Link to="/admin" className="hover:text-gray-300">Admin</Link> */}
      </div>

      <div>
        {userId ? (
          <button
            onClick={logout}
            className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
          >
            Wyloguj
          </button>
        ) : (
          <Link
            to="/login"
            className="bg-green-500 px-3 py-1 rounded hover:bg-green-600"
          >
            Login
          </Link>
        )}
       
      </div>
    </nav>
  );
}
