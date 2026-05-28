import { useState } from 'react'
import { Heart, Gift, Sparkles, Key } from 'lucide-react'

function App() {
  const [aberto, setAberto] = useState(false)
  const [presenteAtual, setPresenteAtual] = useState(0)

  const presentes = [
    {
      titulo: "Primeiro Presente",
      descricao: "Uma lembrança especial só pra você",
      emoji: "💝"
    },
    {
      titulo: "Segundo Presente",
      descricao: "Algo que representa nosso carinho",
      emoji: "🎁"
    },
    {
      titulo: "Terceiro Presente",
      descricao: "A chave do meu coração",
      emoji: "🔑"
    }
  ]

  const abrirPresente = () => {
    if (!aberto) {
      setAberto(true)
    } else {
      setPresenteAtual((prev) => (prev + 1) % presentes.length)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-500 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Sparkles className="text-yellow-300 animate-pulse" size={32} />
            <h1 className="text-4xl font-bold text-white drop-shadow-lg">
              Presentes Key-s
            </h1>
            <Sparkles className="text-yellow-300 animate-pulse" size={32} />
          </div>
          <p className="text-white/90 text-lg">
            Clique para revelar sua surpresa
          </p>
        </div>

        <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/30">
          {!aberto? (
            <div
              onClick={abrirPresente}
              className="cursor-pointer transform hover:scale-105 transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-red-400 to-pink-500 rounded-2xl p-12 shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-white/10"></div>
                <Gift className="text-white mx-auto mb-4" size={80} />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-full bg-yellow-300"></div>
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-4 bg-yellow-300"></div>
                <p className="text-white text-center text-xl font-semibold mt-4">
                  Clique para abrir
                </p>
              </div>
            </div>
          ) : (
            <div className="text-center animate-fade-in">
              <div className="text-8xl mb-6 animate-bounce">
                {presentes[presenteAtual].emoji}
              </div>
              <h2 className="text-3xl font-bold text-white mb-4 drop-shadow">
                {presentes[presenteAtual].titulo}
              </h2>
              <p className="text-white/90 text-lg mb-8">
                {presentes[presenteAtual].descricao}
              </p>
              <button
                onClick={abrirPresente}
                className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto"
              >
                <Key size={20} />
                Próximo Presente
              </button>
            </div>
          )}
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {presentes.map((_, index) => (
            <Heart
              key={index}
              className={`transition-all duration-300 ${
                index === presenteAtual && aberto
                 ? 'text-red-400 fill-red-400 scale-125'
                  : 'text-white/50'
              }`}
              size={24}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
