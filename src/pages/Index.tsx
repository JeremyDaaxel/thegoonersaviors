import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Star, ArrowUp, ArrowDown, ChevronUp } from 'lucide-react';

// Sample manhwa data (in a real app, this would come from an API)
const featuredManhwas = [
  { 
    id: 1, 
    title: 'PRISON REVENGE', 
    cover: '',
    views: '1.2M'
  },
  { 
    id: 2, 
    title: 'DIRTY TALK', 
    cover: '',
    views: '900K'
  },
  { 
    id: 3, 
    title: 'WIRELESS', 
    cover: '',
    views: '850K'
  },
  { 
    id: 4, 
    title: 'LOTTERY TICKET', 
    cover: '',
    views: '780K'
  },
  { 
    id: 5, 
    title: 'SOMEONE STOP HER!', 
    cover: 'popular_imgs/5.webp',
    views: '750K'
  },
  { 
    id: 6, 
    title: 'MILF HUNTER IN ANOTHER WORLD', 
    cover: 'popular_imgs/6.webp',
    views: '780K'
  },
];

// TOP10 Ranking de manhwas, con sus respectivos codigos de colores
const topManhwaRankings = [
  {
    id: 1,
    title: "Solo Leveling",
    author: "Chugong",
    category: "Mejor Manhwa de Romance",
    image: "",
    borderColorStart: "#f59e0b", // naranja
    borderColorEnd: "#ef4444",   // rojo
  },
  {
    id: 2,
    title: "Omniscient Reader",
    author: "Sing N Song",
    category: "Mejor Manhwa Harem",
    image: "/images/omniscient.jpg",
    borderColorStart: "#6366f1", // azul-violeta
    borderColorEnd: "#ec4899",   // rosado
  },
  { 
    id: 3, 
    title: "Omniscient Reader",
    author: "Sing N Song",
    category: "Mejor Manhwa Harem",
    image: "/images/omniscient.jpg",
    borderColorStart: "#6366f1", // azul-violeta
    borderColorEnd: "#ec4899",   // rosado
  },
  { 
    id: 4, 
    title: "Omniscient Reader",
    author: "Sing N Song",
    category: "Mejor Manhwa Harem",
    image: "/images/omniscient.jpg",
    borderColorStart: "#6366f1", // azul-violeta
    borderColorEnd: "#ec4899",   // rosado
  },
  { 
    id: 5, 
    title: "Omniscient Reader",
    author: "Sing N Song",
    category: "Mejor Manhwa Harem",
    image: "/images/omniscient.jpg",
    borderColorStart: "#6366f1", // azul-violeta
    borderColorEnd: "#ec4899",   // rosado
  }
];

const genreData = {
  action: [
    { id: 101, title: 'Lookism', cover: 'https://place-hold.it/240x350/1a1b26/ffffff?text=Lookism' },
    { id: 102, title: 'Mercenary Enrollment', cover: 'https://place-hold.it/240x350/1a1b26/ffffff?text=Mercenary%20Enrollment' },
    { id: 103, title: 'Overgeared', cover: 'https://place-hold.it/240x350/1a1b26/ffffff?text=Overgeared' },
    { id: 104, title: 'Wind Breaker', cover: 'https://omegascans.org/_next/image?url=https%3A%2F%2Fmedia.omegascans.org%2Ffile%2FzFSsXt%2Fp40occvylaezsb41gc31p6ik.webp&w=640&q=75' },
    { id: 105, title: 'Wind Breaker', cover: 'https://omegascans.org/_next/image?url=https%3A%2F%2Fmedia.omegascans.org%2Ffile%2FzFSsXt%2Fp40occvylaezsb41gc31p6ik.webp&w=640&q=75' },
    { id: 106, title: 'Wind Breaker', cover: 'https://omegascans.org/_next/image?url=https%3A%2F%2Fmedia.omegascans.org%2Ffile%2FzFSsXt%2Fp40occvylaezsb41gc31p6ik.webp&w=640&q=75' }
  ],
    fantasy: [
    { id: 201, title: 'Noblesse', cover: 'https://place-hold.it/240x350/1a1b26/ffffff?text=Noblesse' },
    { id: 202, title: 'God of High School', cover: 'https://place-hold.it/240x350/1a1b26/ffffff?text=God%20of%20High%20School' },
    { id: 203, title: 'Hardcore Leveling Warrior', cover: 'https://place-hold.it/240x350/1a1b26/ffffff?text=HCLW' },
    { id: 204, title: 'Tomb Raider King', cover: 'https://place-hold.it/240x350/1a1b26/ffffff?text=Tomb%20Raider%20King' }
  ],
  romance: [
    { id: 301, title: 'True Beauty', cover: 'https://place-hold.it/240x350/1a1b26/ffffff?text=True%20Beauty' },
    { id: 302, title: 'Age Matters', cover: 'https://place-hold.it/240x350/1a1b26/ffffff?text=Age%20Matters' },
    { id: 303, title: 'Let\'s Play', cover: 'https://place-hold.it/240x350/1a1b26/ffffff?text=Let%27s%20Play' },
    { id: 304, title: 'A Good Day to be a Dog', cover: 'https://place-hold.it/240x350/1a1b26/ffffff?text=A%20Good%20Day%20to%20be%20a%20Dog' }
  ]
};

const ManhwaCard = ({ title, cover }: { title: string, cover: string }) => (
  <div className="group relative flex flex-col overflow-hidden rounded-lg transition-shadow hover:shadow-md">
    <div className="relative aspect-[2/3] overflow-hidden rounded-lg">
      <img 
        src={cover} 
        alt={title} 
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
        <div className="p-2 text-white font-medium">{title}</div>
      </div>
    </div>
  </div>
);

const Index = () => {
  return (
<div className="min-h-screen bg-background text-foreground font-ginto">
  <Header />
  
  <main className="container mx-auto px-4 py-6 space-y-10 max-w-7xl">
    {/* Hero section with featured carousel */}
    <section className="py-6">
      <h2 className="text-4xl font-black mb-1 text-center sm:text-3xl md:text-4xl lg:text-5xl">
        POPULAR ESTA SEMANA
      </h2>
      <h3 className="text-center font-ginto md:text-2xl mb-10 text">Los Manhwas más vistos y votados esta semana.</h3>
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent mb-6 rounded-lg" />
      <Carousel className="w-full">
        <CarouselContent className="-ml-1">
          {featuredManhwas.map((manhwa) => (
            <CarouselItem key={manhwa.id} className="pl-1 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
              <div className="p-1 h-full">
                <Card className="border-none h-full bg-card/50 overflow-hidden">
                  <CardContent className="flex flex-col p-0 items-center h-full">
                    <div className="relative w-full aspect-[2/3] overflow-hidden rounded-lg">
                      <img 
                        src={manhwa.cover} 
                        alt={manhwa.title} 
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-primary text-white-foreground text-xs px-2 py-1 rounded-full">
                        {manhwa.views} views
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent flex items-end">
                        <div className="p-8 text-white w-full text-center">
                          <h3 className="font-black text-4xl leading-[0.9] tracking-[0.02em]">{manhwa.title}</h3>
                        </div>
                      </div>
                    </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </section>

        {/* Genre sections */}
        <section className="space-y-10">
          {/* Action section */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Action</h2>
              <a href="/category/action" className="text-sm text-primary hover:underline">View All</a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {genreData.action.map((manhwa) => (
                <ManhwaCard key={manhwa.id} title={manhwa.title} cover={manhwa.cover} />
              ))}
            </div>
          </div>
          
          {/* Fantasy section */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Fantasy</h2>
              <a href="/category/fantasy" className="text-sm text-primary hover:underline">View All</a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {genreData.fantasy.map((manhwa) => (
                <ManhwaCard key={manhwa.id} title={manhwa.title} cover={manhwa.cover} />
              ))}
            </div>
          </div>
          
          {/* Romance section */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Romance</h2>
              <a href="/category/romance" className="text-sm text-primary hover:underline">View All</a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {genreData.romance.map((manhwa) => (
                <ManhwaCard key={manhwa.id} title={manhwa.title} cover={manhwa.cover} />
              ))}
            </div>
          </div>
        </section>

        {/* Top 10 Rankings Section - Updated with gradient banners matching reference */}
        <section className="py-10">
  <div className="space-y-4">
    {topManhwaRankings.map((manhwa) => (
      <div
        key={manhwa.id}
        className="relative h-32 md:h-36  overflow-hidden border-2"
        style={{
          borderImage: `linear-gradient(to right, ${manhwa.borderColorStart}, ${manhwa.borderColorEnd}) 1`,
        }}
      >
        {/* Background image */}
        <img
          src={manhwa.image}
          alt={manhwa.title}
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/100 via-black/100 to-transparent" />

        {/* Content */}
        <div className="relative z-10 h-full px-6 flex flex-col justify-center">
  <p className="text-yellow-400 font-extrabold text-sm md:text-base uppercase leading-tight md:leading-none m-0 p-0">
    {manhwa.category}
  </p>
  <h3 className="text-white text-lg md:text-4xl font-black uppercase m-0 p-0 -mt-0.5 md:-mt-0.5">
    {manhwa.title}
  </h3>
</div>


      </div>
    ))}
  </div>
</section>


      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
