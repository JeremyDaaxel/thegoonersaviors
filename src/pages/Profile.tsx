
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { BookMarked, Heart, UserRound } from 'lucide-react';

// Simulación de datos de manhwas seguidos y favoritos
const followedManhwas = [
  { id: 1, title: "The Study Group", cover: "/ranking_imgs/Sexstudy.png", lastRead: "Capítulo 45" },
  { id: 2, title: "Secret Class", cover: "/popular_imgs/1.webp", lastRead: "Capítulo 123" },
  { id: 3, title: "Silent War", cover: "/popular_imgs/2.webp", lastRead: "Capítulo 67" },
  { id: 4, title: "Queen Bee", cover: "/popular_imgs/3.webp", lastRead: "Capítulo 89" },
];

const favoriteManhwas = [
  { id: 2, title: "Secret Class", cover: "/popular_imgs/1.webp", rating: "5/5" },
  { id: 5, title: "Stepmother's Friends", cover: "/popular_imgs/4.webp", rating: "4.5/5" },
  { id: 6, title: "Isai's Stepmother", cover: "/popular_imgs/5.webp", rating: "4.8/5" },
];

// Iconos para cambiar el avatar del perfil (guardado en cache)
const profileIcons = [
  { id: 1, src: "profile_icons/P1.jpg", alt: "A Yogurt Lady" },
  { id: 2, src: "profile_icons/P2.jpg", alt: "Icono de mono" },
  { id: 3, src: "profile_icons/P3.jpg", alt: "Icono de elfo" },
  { id: 4, src: "profile_icons/P1.jpg", alt: "Icono de superhéroe" },
  { id: 5, src: "profile_icons/P5.jpg", alt: "Icono amarillo" },
  { id: 6, src: "profile_icons/P6.jpg", alt: "Icono azul" },
  { id: 7, src: "profile_icons/P7.jpg", alt: "Icono rosa" },
  { id: 8, src: "profile_icons/P8.jpg", alt: "Icono de erizo" },
  { id: 9, src: "profile_icons/P9.jpg", alt: "Icono de chica" },
  { id: 10, src: "profile_icons/P10.jpg", alt: "Icono de slime" },
  { id: 11, src: "profile_icons/P11.jpg", alt: "Icono de gato" },
  { id: 12, src: "profile_icons/P12.jpg", alt: "Icono de Mii" },
];

const ManhwaCard = ({ title, cover, subtitle }: { title: string; cover: string; subtitle: string }) => {
  return (
    <div className="flex items-center space-x-4 p-3 border border-border/50 rounded-lg hover:bg-accent/20 transition-colors">
      <img
        src={cover}
        alt={title}
        className="h-16 w-14 object-cover rounded"
      />
      <div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </div>
    </div>
  );
};

const Profile = () => {
  const [username, setUsername] = useState<string>("Usuario");
  const [avatarUrl, setAvatarUrl] = useState<string>(profileIcons[0].src);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  // Comprobar si el usuario ha iniciado sesión
  useEffect(() => {
    // En una implementación real, habría que verificar si hay un token válido
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn) {
      navigate('/login');
    } else {
      // Cargar datos del usuario
      const savedUsername = localStorage.getItem('username');
      const savedAvatarUrl = localStorage.getItem('avatarUrl');
      
      if (savedUsername) setUsername(savedUsername);
      if (savedAvatarUrl) setAvatarUrl(savedAvatarUrl);
    }
  }, [navigate]);

  const handleAvatarChange = (iconSrc: string) => {
    setAvatarUrl(iconSrc);
    localStorage.setItem('avatarUrl', iconSrc);
    setIsDialogOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20 border-2 border-primary">
              <AvatarImage src={avatarUrl} alt={username} />
              <AvatarFallback><UserRound size={40} /></AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold">{username}</h1>
              <p className="text-muted-foreground">Miembro desde Abril 2025</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="outline">Cambiar Avatar</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle>Selecciona un Icono</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-3 md:grid-cols-4 gap-4 py-4">
                  {profileIcons.map(icon => (
                    <button
                    key={icon.id}
                    onClick={() => handleAvatarChange(icon.src)}
                    className="relative overflow-hidden aspect-square rounded-full border-2 hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                    >
                    <img
                        src={icon.src}
                        alt={icon.alt}
                        className="w-full h-full object-cover rounded-full"
                    />
                    </button>

                  ))}
                </div>
              </DialogContent>
            </Dialog>
            
            <Button variant="destructive" onClick={handleLogout}>Cerrar Sesión</Button>
          </div>
        </div>

        <Tabs defaultValue="following" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="following" className="flex items-center gap-2">
              <BookMarked size={16} />
              <span>Siguiendo</span>
            </TabsTrigger>
            <TabsTrigger value="favorites" className="flex items-center gap-2">
              <Heart size={16} />
              <span>Favoritos</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="following" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <div className="grid gap-4">
                  {followedManhwas.length > 0 ? (
                    followedManhwas.map(manhwa => (
                      <ManhwaCard 
                        key={manhwa.id}
                        title={manhwa.title}
                        cover={manhwa.cover}
                        subtitle={manhwa.lastRead}
                      />
                    ))
                  ) : (
                    <p className="text-center py-10 text-muted-foreground">No estás siguiendo ningún manhwa.</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="favorites" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <div className="grid gap-4">
                  {favoriteManhwas.length > 0 ? (
                    favoriteManhwas.map(manhwa => (
                      <ManhwaCard 
                        key={manhwa.id}
                        title={manhwa.title}
                        cover={manhwa.cover}
                        subtitle={`Calificación: ${manhwa.rating}`}
                      />
                    ))
                  ) : (
                    <p className="text-center py-10 text-muted-foreground">No has agregado ningún manhwa a favoritos.</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;
