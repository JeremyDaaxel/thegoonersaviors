import React from 'react';
import Header from '@/components/Header';
import { Link } from 'react-router-dom';
import { Clock, Heart, List, Share2, Bookmark, Play, Eye, Bell } from 'lucide-react';
import { Button } from "@/components/ui/button";

const MangaDetailPage: React.FC = () => {
  // Lista de episodios con miniaturas
  const episodes = [
    { number: 43, date: "04/12/2025", duration: "16:51", isNew: true, thumbnail: "chapters/43.jpg" },
    { number: 42, date: "04/12/2025", duration: "15:47", thumbnail: "chapters/42.jpg" },
    { number: 41, date: "04/12/2025", duration: "17:12", thumbnail: "chapters/41.jpg" },
    { number: 40, date: "04/12/2025", duration: "16:01", thumbnail: "chapters/40.jpg" },
    { number: 39, date: "04/12/2025", duration: "14:56", thumbnail: "chapters/39.jpg" },
    { number: 38, date: "04/12/2025", duration: "14:56", thumbnail: "chapters/38.jpg" },
    { number: 37, date: "04/12/2025", duration: "14:56", thumbnail: "chapters/37.jpg" },
    { number: 36, date: "04/12/2025", duration: "14:56", thumbnail: "chapters/36.jpg" },
    { number: 35, date: "04/12/2025", duration: "14:56", thumbnail: "chapters/35.jpg" },
    { number: 34, date: "04/12/2025", duration: "14:56", thumbnail: "chapters/34.jpg" },
    { number: 33, date: "04/12/2025", duration: "14:56", thumbnail: "chapters/33.jpg" },
    { number: 32, date: "04/12/2025", duration: "14:56", thumbnail: "chapters/32.jpg" },
    { number: 31, date: "04/12/2025", duration: "14:56", thumbnail: "chapters/31.jpg" },
    { number: 30, date: "04/12/2025", duration: "14:56", thumbnail: "chapters/30.jpg" },
    { number: 29, date: "04/12/2025", duration: "14:56", thumbnail: "chapters/29.jpg" },
    { number: 28, date: "04/12/2025", duration: "14:56", thumbnail: "chapters/28.jpg" },
    { number: 27, date: "04/12/2025", duration: "14:56", thumbnail: "chapters/27.jpg" },
    { number: 26, date: "04/12/2025", duration: "14:56", thumbnail: "chapters/26.jpg" },
    { number: 25, date: "04/12/2025", duration: "14:56", thumbnail: "chapters/25.jpg" },
    { number: 24, date: "04/12/2025", duration: "14:56", thumbnail: "chapters/24.jpg" },
    { number: 23, date: "04/12/2025", duration: "14:56", thumbnail: "chapters/23.jpg" },
    { number: 22, date: "04/12/2025", duration: "14:56", thumbnail: "chapters/22.jpg" },
    { number: 21, date: "04/12/2025", duration: "14:56", thumbnail: "chapters/21.png" },
    { number: 20, date: "04/12/2025", duration: "14:56", thumbnail: "chapters/20.jpg" },
    { number: 19, date: "04/12/2025", duration: "14:56", thumbnail: "chapters/19.jpg" },
    { number: 18, date: "04/12/2025", duration: "14:56", thumbnail: "chapters/18.jpg" },
    { number: 17, date: "04/12/2025", duration: "14:56", thumbnail: "chapters/17.jpg" },
    { number: 16, date: "04/12/2025", duration: "14:56", thumbnail: "chapters/16.jpg" },
    { number: 15, date: "04/12/2025", duration: "14:56", thumbnail: "chapters/15.jpg" },
    { number: 14, date: "04/12/2025", duration: "14:56", thumbnail: "chapters/14.jpg" },
    { number: 13, date: "04/12/2025", duration: "14:56", thumbnail: "chapters/13.jpg" },
    { number: 12, date: "04/12/2025", duration: "14:56", thumbnail: "chapters/12.jpg" },
    { number: 11, date: "04/12/2025", duration: "14:56", thumbnail: "chapters/11.jpg" },
    { number: 10, date: "04/12/2025", duration: "14:56", thumbnail: "chapters/10.jpg" },
    { number: 9, date: "04/12/2025", duration: "14:56", thumbnail: "chapters/9.jpg" },
    { number: 8, date: "04/12/2025", duration: "14:56", thumbnail: "chapters/8.jpg" },
    { number: 7, date: "04/12/2025", duration: "14:56", thumbnail: "chapters/7.jpg" },
    { number: 6, date: "04/12/2025", duration: "14:56", thumbnail: "chapters/6.jpg" },
    { number: 5, date: "04/12/2025", duration: "14:56", thumbnail: "chapters/5.jpg" },
    { number: 4, date: "04/12/2025", duration: "14:56", thumbnail: "chapters/4.jpg" },
    { number: 3, date: "04/12/2025", duration: "14:56", thumbnail: "chapters/3.jpg" },
    { number: 2, date: "04/12/2025", duration: "14:56", thumbnail: "chapters/2.jpg" },
    { number: 1, date: "04/12/2025", duration: "14:56", thumbnail: "chapters/1.jpg" },
    
    // Agrega más episodios aquí con sus miniaturas reales
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <div className="w-full md:w-1/3 lg:w-1/4">
            <div className="relative group">
              <img 
                src="chapters/soeun_cover.png" 
                alt="Sex Stopwatch Cover" 
                className="w-full h-auto rounded-lg shadow-xl border-2 border-pink-500/30"
              />
              <div className="absolute inset-0 bg-pink-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Button variant="ghost" size="lg" className="rounded-full bg-pink-600 hover:bg-pink-700">
                  <Play className="mr-2" /> Leer ahora
                </Button>
              </div>
            </div>
          </div>

          <div className="w-full md:w-2/3 lg:w-3/4">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Soeun (Quien está dispuesta a todo)</h1>
                <h2 className="text-xl text-pink-400 mb-4">Mayores de 18 años.</h2>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="rounded-full">
                  <Heart className="mr-2 h-4 w-4" /> 1095
                </Button>
                <Button variant="outline" size="sm" className="rounded-full">
                  Seguir
                </Button>
              </div>
            </div>

            <div className="bg-gray-800/50 p-4 rounded-lg mb-6">
              <p className="italic text-gray-300">
                "Señorita Soeun... si esos tipos la obligan a hacerlo, ¿usted los dejaría? Mi primer amor, con su agradable aroma y suave tacto, solía consolar-... espera... ¿¡Ella no lleva nada debajo de su camisa en este momento...!?"
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              <div>
                <h3 className="text-sm text-gray-400">Otros nombres</h3>
                <p className="font-medium">소은</p>
              </div>
              <div>
                <h3 className="text-sm text-gray-400">Estado</h3>
                <p className="font-medium text-green-400">En emisión</p>
              </div>
              <div>
                <h3 className="text-sm text-gray-400">Autor</h3>
                <p className="font-medium">Muldeok</p>
              </div>
              <div>
                <h3 className="text-sm text-gray-400">Año</h3>
                <p className="font-medium">2024</p>
              </div>
              <div>
                <h3 className="text-sm text-gray-400">Géneros</h3>
                <div className="flex flex-wrap gap-1">
                  <span className="px-2 py-1 bg-pink-900/50 text-pink-300 rounded-full text-xs">Cuckold</span>
                  <span className="px-2 py-1 bg-pink-900/50 text-pink-300 rounded-full text-xs">Intercambio de Pareja</span>
                  <span className="px-2 py-1 bg-pink-900/50 text-pink-300 rounded-full text-xs">Netorare</span>
                  <span className="px-2 py-1 bg-pink-900/50 text-pink-300 rounded-full text-xs">Hardcore</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2">
                <List className="text-pink-400" />
                <span>43 Episodios</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="text-pink-400" />
                <span>108.343 vistas</span>
              </div>
            </div>

            <div className="bg-pink-900/20 border border-pink-500/30 rounded-lg p-4 mb-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-pink-300">PRÓXIMO EPISODIO</h3>
                  <p className="text-sm text-gray-300">Disponible en: 00:25:21</p>
                </div>
                <Button variant="outline" className="border-pink-500 text-pink-300 hover:bg-pink-900/30">
                  <Bell className="mr-2 h-4 w-4" /> Notificarme
                </Button>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button className="bg-pink-600 hover:bg-pink-700">
                <Play className="mr-2 h-4 w-4" /> Ver ahora
              </Button>
              <Button variant="outline" className="text-pink-300 border-pink-500 hover:bg-pink-900/30">
                <Bookmark className="mr-2 h-4 w-4" /> Guardar
              </Button>
              <Button variant="outline" className="text-pink-300 border-pink-500 hover:bg-pink-900/30">
                <Share2 className="mr-2 h-4 w-4" /> Compartir
              </Button>
            </div>
          </div>
        </div>

        {/* Listado de episodios */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 border-b border-gray-700 pb-2">Episodios</h2>
          <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
            {episodes.map((ep) => (
              <EpisodeCard 
                key={ep.number} 
                number={ep.number} 
                date={ep.date} 
                duration={ep.duration} 
                thumbnail={ep.thumbnail}
                isNew={ep.isNew}
              />
            ))}
          </div>
        </section>

        {/* Recomendaciones */}
        <section className="pb-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 border-b border-gray-700 pb-2">Te puede interesar</h2>
          <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4">
            {[1, 2, 3, 4, 5, 6].map(item => (
              <MangaCard key={item} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

// Componente de tarjeta de episodio responsive
interface EpisodeCardProps {
  number: number;
  date: string;
  duration: string;
  thumbnail: string;
  isNew?: boolean;
}

const EpisodeCard: React.FC<EpisodeCardProps> = ({ 
  number, 
  date, 
  duration, 
  thumbnail, 
  isNew = false 
}) => {
  return (
    <div className="group bg-gray-800/80 hover:bg-gray-700/60 rounded-lg overflow-hidden transition-all duration-200 border border-gray-700/50 hover:border-pink-500/30 w-full aspect-[5/3] relative shadow-sm">
      <img 
        src={thumbnail} 
        alt={`Ep-${number}`}
        className="w-full h-full object-cover absolute inset-0"
        loading="lazy"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

      <div className="relative p-2 h-full flex flex-col justify-between">
        <div className="flex justify-between items-start">
          {isNew && (
            <span className="bg-pink-600 text-[0.7rem] xs:text-[10px] px-1.5 xs:px-2 py-1 rounded-full flex items-center gap-1">
              <span className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-white rounded-full animate-pulse" />
              NUEVO
            </span>
          )}
          <span className="text-[0.7rem] xs:text-xs bg-black/60 px-1.5 xs:px-2 py-1 rounded-md font-poppins font-semibold">
            #{number}
          </span>
        </div>

        <div className="flex justify-between items-end text-[0.7rem] xs:text-xs font-poppins font-semibold">
          <div className="space-y-0 xs:space-y-1">
            <p className="font-semibold text-gray-200">{date}</p>
            <div className="flex items-center gap-1 text-gray-400">
              <Clock className="w-2.5 h-2.5 xs:w-3 xs:h-3" />
              <span>{duration}</span>
            </div>
          </div>
          <button className="bg-pink-600/90 hover:bg-pink-700 text-white p-1 xs:p-1.5 rounded-full shadow-md transition-colors">
            <Play className="w-3 h-3 xs:w-4 xs:h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Recomendaciones (aunque esta pendejada se ve dificil de programar para el backend)
const MangaCard: React.FC = () => {
  return (
    <div className="group aspect-[2/3] rounded-lg overflow-hidden border border-gray-700/50 hover:border-pink-500/30 transition-colors">
      <div className="relative w-full h-full">
        <img 
          src="/covers/recommendation.webp" 
          alt="Recomendación" 
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-2 flex items-end">
          <h3 className="text-sm font-medium text-white line-clamp-2">Título del manga recomendado</h3>
        </div>
      </div>
    </div>
  );
};

export default MangaDetailPage;