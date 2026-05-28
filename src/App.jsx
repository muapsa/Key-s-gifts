import React from 'react'

export default function App() {
  const products = [
    { name: "Rand 150R", price: "900 MZN", image: "https://i.imgur.com/UPrs1EW.png" },
    { name: "Rand 250R", price: "1450 MZN", image: "https://i.imgur.com/UPrs1EW.png" },
    { name: "Rand 500R", price: "2600 MZN", image: "https://i.imgur.com/UPrs1EW.png" },
    { name: "Rand 1000R", price: "4800 MZN", image: "https://i.imgur.com/UPrs1EW.png" },
    { name: "Rand 3500R", price: "16,400 MZN", image: "https://i.imgur.com/UPrs1EW.png" },

    { name: "Euro 10€", price: "1300 MZN", image: "https://i.imgur.com/Q7ZVQYk.png" },
    { name: "Euro 20€", price: "2300 MZN", image: "https://i.imgur.com/Q7ZVQYk.png" },
    { name: "Euro 30€", price: "3000 MZN", image: "https://i.imgur.com/Q7ZVQYk.png" },
    { name: "Euro 40€", price: "3850 MZN", image: "https://i.imgur.com/Q7ZVQYk.png" },
    { name: "Euro 50€", price: "4700 MZN", image: "https://i.imgur.com/Q7ZVQYk.png" },
    { name: "Euro 100€", price: "9300 MZN", image: "https://i.imgur.com/Q7ZVQYk.png" },

    { name: "Dollar 10$", price: "1200 MZN", image: "https://i.imgur.com/UPrs1EW.png" },
    { name: "Dollar 20$", price: "1850 MZN", image: "https://i.imgur.com/UPrs1EW.png" },
    { name: "Dollar 25$", price: "2750 MZN", image: "https://i.imgur.com/UPrs1EW.png" },
    { name: "Dollar 50$", price: "4500 MZN", image: "https://i.imgur.com/UPrs1EW.png" },
    { name: "Dollar 75$", price: "6500 MZN", image: "https://i.imgur.com/UPrs1EW.png" },
    { name: "Dollar 100$", price: "8300 MZN", image: "https://i.imgur.com/UPrs1EW.png" },

    { name: "Libra 10", price: "1600 MZN", image: "https://i.imgur.com/UPrs1EW.png" },
    { name: "Libra 20", price: "2700 MZN", image: "https://i.imgur.com/UPrs1EW.png" },
    { name: "Libra 30", price: "4150 MZN", image: "https://i.imgur.com/UPrs1EW.png" },
    { name: "Libra 50", price: "6250 MZN", image: "https://i.imgur.com/UPrs1EW.png" },
    { name: "Libra 100", price: "11,500 MZN", image: "https://i.imgur.com/UPrs1EW.png" },

    { name: "Brasil 35", price: "800 MZN", image: "https://i.imgur.com/L3GjK9Y.png" },
    { name: "Brasil 60", price: "1300 MZN", image: "https://i.imgur.com/L3GjK9Y.png" },
    { name: "Brasil 100", price: "2200 MZN", image: "https://i.imgur.com/L3GjK9Y.png" },
    { name: "Brasil 250", price: "4600 MZN", image: "https://i.imgur.com/L3GjK9Y.png" },
    { name: "Brasil 520", price: "8700 MZN", image: "https://i.imgur.com/L3GjK9Y.png" }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans p-5">
      <h1 className="text-center text-yellow-400 text-5xl font-bold mb-2">
        🎮 Key's Gift Store
      </h1>
      
      <p className="text-center text-gray-300 text-lg mb-8">
        Premium Gift Cards • Netflix • PSN • Steam • FF
      </p>

      <div className="bg-[#111] p-5 rounded-2xl mt-5 border border-yellow-400 text-center max-w-2xl mx-auto">
        <h2 className="text-yellow-400 text-2xl font-bold mb-4">
          💳 Formas de Pagamento
        </h2>
        <p className="mb-2">📲 e-Mola: 872230470</p>
        <p className="mb-2">🏦 BIM disponível</p>
        <p>🌍 PayPal em breve</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-10">
        {products.map((item, index) => (
          <div key={index} className="bg-[#111] rounded-2xl overflow-hidden border border-yellow-400 hover:scale-105 transition-transform duration-300">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-44 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
              <p className="text-yellow-400 text-2xl font-bold mb-4">
                {item.price}
              </p>
              <a href={`https://wa.me/258872230470?text=Olá, quero comprar ${item.name} por ${item.price}`}>
                <button className="w-full p-3 bg-yellow-400 text-black rounded-xl font-bold hover:bg-yellow-300 transition-colors">
                  💬 Comprar no WhatsApp
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
      }
