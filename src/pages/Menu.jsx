const menuItems = [
  {
    category: "Przystawki",
    items: [
      { name: "Bruschetta z pomidorami", price: "22 zł", img: "https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480/img/recipe/ras/Assets/7958278261c2dcc023ad7e08b819ee5b/Derivates/29eabfe8ef8f67fe388afcafe1fa5da4dad38767.jpg" },
      { name: "Carpaccio wołowe", price: "36 zł", img: "https://mamyito.pl/blog/wp-content/uploads/2024/08/AdobeStock_866967276-1024x683.jpeg" }
    ]
  },
  {
    category: "Dania Główne",
    items: [
      { name: "Stek Ribeye", price: "88 zł", img: "https://api.broilking.pl/api/media/c/public/fp/images/przepisy/przepis-na-stek-rib-eye/przepis-na-stek-rib-eye-01.jpg" },
      { name: "Łosoś w sosie cytrynowym", price: "62 zł", img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80" }
    ]
  },
  {
    category: "Desery",
    items: [
      { name: "Tiramisu", price: "26 zł", img: "https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480/img/recipe/ras/Assets/b870e5639e0234d2c3fecdf17ad5fe78/Derivates/9ac847a6492665777b5a26209903f29e6ae78069.jpg" },
      { name: "Panna Cotta", price: "24 zł", img: "https://www.poezja-smaku.pl/wp-content/uploads/2020/02/panna-cotta-1.jpg" }
    ]
  }
];

export default function Menu() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-amber-400">Menu Restauracji</h1>

      <div className="max-w-5xl mx-auto space-y-14">
        {menuItems.map((section, i) => (
          <div key={i}>
            <h2 className="text-3xl font-semibold border-b border-amber-400 inline-block mb-6">
              {section.category}
            </h2>

            <div className="grid md:grid-cols-2 gap-10">
              {section.items.map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md p-5 rounded-xl flex gap-6 hover:bg-white/20 transition">
                  <img src={item.img} alt="" className="w-28 h-28 object-cover rounded-lg" />
                  <div>
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <p className="text-amber-400 text-lg mt-2">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
