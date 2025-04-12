
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, LogIn, User } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  return (
<header className="w-full py-5 px-6 flex justify-between items-center bg-transparent backdrop-blur-sm sticky top-0 z-50 border-b border-border/10">
  <Link to="/" className="flex items-center ml-2">
    <img
      src="logos/Sextoonslogo.png"
      alt="Logo de ManhwaVerse"
      className="h-6 w-auto object-contain"
    />
  </Link>
      
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent">Categorias</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid grid-cols-2 gap-4 p-4 w-[400px]">
                <Link to="/category/action" className="block p-2 hover:bg-accent rounded-md">
                  Action
                </Link>
                <Link to="/category/romance" className="block p-2 hover:bg-accent rounded-md">
                  Romance
                </Link>
                <Link to="/category/fantasy" className="block p-2 hover:bg-accent rounded-md">
                  Fantasy
                </Link>
                <Link to="/category/comedy" className="block p-2 hover:bg-accent rounded-md">
                  Comedy
                </Link>
                <Link to="/category/drama" className="block p-2 hover:bg-accent rounded-md">
                  Drama
                </Link>
                <Link to="/category/horror" className="block p-2 hover:bg-accent rounded-md">
                  Horror
                </Link>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/latest" className="px-4 py-2 text-sm text-foreground hover:text-primary transition-colors">
              Latest
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/popular" className="px-4 py-2 text-sm text-foreground hover:text-primary transition-colors">
              Popular
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/completed" className="px-4 py-2 text-sm text-foreground hover:text-primary transition-colors">
              Completed
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/artwork" className="px-4 py-2 text-sm text-foreground hover:text-primary transition-colors">
              Artwork
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex items-center gap-4">
        <button className="p-2 text-foreground hover:text-primary transition-colors">
          <Search size={20} />
        </button>

        {/* Add login section */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="outline" size="sm" asChild>
            <Link to="/login" className="flex items-center gap-2">
              <LogIn size={16} />
              <span>Iniciar Sesión</span>
            </Link>
          </Button>
          <Button size="sm" asChild>
            <Link to="/register" className="flex items-center gap-2">
              <User size={16} />
              <span>Registrarse</span>
            </Link>
          </Button>
        </div>

        {/* Mobile menu button and dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="p-2">
              <Menu size={20} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuItem asChild>
              <Link to="/category/action">Action</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/category/romance">Romance</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/category/fantasy">Fantasy</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/category/comedy">Comedy</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/latest">Latest</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/popular">Popular</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/completed">Completed</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/artwork">Artwork</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/login" className="flex items-center gap-2">
                <LogIn size={16} />
                <span>Login</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/register" className="flex items-center gap-2">
                <User size={16} />
                <span>Register</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;