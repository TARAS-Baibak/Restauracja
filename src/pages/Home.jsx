export default function Home() {
  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center flex items-center justify-center px-6">
      <div className="backdrop-blur-md bg-black/40 p-10 rounded-xl text-center max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Witamy w <span className="text-amber-400">La Tavola</span>
        </h1>
        <p className="text-lg text-gray-200 mb-8">
          Wyjątkowa atmosfera, doskonałe jedzenie i najlepsze wino.  
          Zarezerwuj stolik już teraz!
        </p>

        <a
          href="/rezerwacja"
          className="px-8 py-3 bg-amber-500 hover:bg-amber-600 transition text-white font-semibold rounded-lg text-lg"
        >
          Rezerwuj stolik
        </a>
      </div>
    </div>
  );
}
