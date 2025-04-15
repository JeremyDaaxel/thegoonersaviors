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


const followedManhwas = [
  { id: 1, title: "Secret Class", cover: "/popular_imgs/1.webp", lastRead: "Capítulo 123" },
  { id: 1, title: "Secret Class", cover: "/popular_imgs/1.webp", lastRead: "Capítulo 123" },
  { id: 1, title: "Secret Class", cover: "/popular_imgs/1.webp", lastRead: "Capítulo 123" },
  
];

const favoriteManhwas = [
  { id: 2, title: "Secret Class", cover: "/popular_imgs/1.webp", rating: "5/5" },
  { id: 5, title: "Stepmother's Friends", cover: "/popular_imgs/4.webp", rating: "4.5/5" },
  { id: 6, title: "Isai's Stepmother", cover: "/popular_imgs/5.webp", rating: "4.8/5" },
];


const profileIcons = [
  { id: 1, src: "profile_icons/P1.jpg", alt: "" },
  { id: 2, src: "profile_icons/P2.jpg", alt: "" },
  { id: 3, src: "profile_icons/P3.jpg", alt: "" },
  { id: 4, src: "profile_icons/P4.jpg", alt: "" },
  { id: 5, src: "profile_icons/P5.jpg", alt: "" },
  { id: 6, src: "profile_icons/P6.jpg", alt: "" },
  { id: 7, src: "profile_icons/P7.jpg", alt: "" },
  { id: 8, src: "profile_icons/P8.jpg", alt: "" },
  { id: 9, src: "profile_icons/P9.jpg", alt: "" },
  { id: 10, src: "profile_icons/P10.jpg", alt: "" },
  { id: 11, src: "profile_icons/P11.jpg", alt: "" },
  { id: 12, src: "profile_icons/P12.jpg", alt: "" },
  { id: 13, src: "profile_icons/P13.jpg", alt: "" },
  { id: 14, src: "profile_icons/P14.jpg", alt: "" },
  { id: 15, src: "profile_icons/P15.jpg", alt: "" },
  { id: 16, src: "profile_icons/P16.jpg", alt: "" },
  { id: 17, src: "profile_icons/P17.jpg", alt: "" },
  { id: 18, src: "profile_icons/P18.jpg", alt: "" },
  { id: 19, src: "profile_icons/P19.jpg", alt: "" },
  { id: 20, src: "profile_icons/P20.jpg", alt: "" },
];

const ManhwaCard = ({ title, cover, subtitle }: { title: string; cover: string; subtitle: string }) => {
  return (
    <div className="w-[180px] flex-shrink-0 rounded-lg overflow-hidden bg-card shadow hover:scale-[1.02] transition-transform">
      <img
        src={cover}
        alt={title}
        className="w-full h-[250px] object-cover"
      />
      <div className="px-3 py-2 flex flex-col justify-center">
        <h4 className="font-semibold text-sm line-clamp-2">{title}</h4>
        <p className="text-xs text-muted-foreground">{subtitle}</p>
      </div>
    </div>
  );
};


const Profile = () => {
  const [username, setUsername] = useState<string>("Usuario");
  const [avatarUrl, setAvatarUrl] = useState<string>(profileIcons[0].src);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn) {
      navigate('/login');
    } else {
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
                  <DialogTitle className="uppercase">Selecciona un Icono</DialogTitle>
                </DialogHeader>
                <div className="max-h-[450px] overflow-y-auto pr-2">
                  <div className="grid grid-cols-3 md:grid-cols-3 gap-4 py-4">
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
                <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-primary/50">
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
