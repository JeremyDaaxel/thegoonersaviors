import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Header from '@/components/Header';

const Login = () => {
  const [message, setMessage] = useState(null);
  const [isError, setIsError] = useState(false);
  const [formData, setFormData] = useState({
    identifier: '',
    password: '',
  });

  const navigate = useNavigate(); // Hook para la redirección

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    setIsError(false);

    const reqOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identifier: formData.identifier,
        password: formData.password,
      }),
    };

    try {
      const req = await fetch('http://localhost:1337/api/auth/local', reqOptions);
      const res = await req.json();

      if (res.error) {
        setIsError(true);
        setMessage(res.error.message);
        return;
      }

      if (res.jwt && res.user) {
        setIsError(false);
        setMessage('¡Inicio de sesión exitoso!');

        // Guardar el token si es necesario (localStorage, contexto, etc.)
        localStorage.setItem('jwt', res.jwt); // Guardar el token en localStorage como ejemplo

        // Redirigir al home (o al índice)
        navigate('/');
      }
    } catch (error) {
      setIsError(true);
      setMessage('Error de conexión con el servidor.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-8 bg-card p-8 rounded-xl border border-border/50">
          <div className="text-center">
            <h1 className="text-2xl font-bold">¡Bienvenido Guap@!</h1>
            <p className="text-muted-foreground mt-2">Ingresa a tu cuenta</p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="identifier">Email/Username</Label>
              <Input
                id="identifier"
                type="text"
                name="identifier"
                placeholder="Enter your email or username"
                value={formData.identifier}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Contraseña</Label>
              </div>
              <Input
                id="password"
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <Button type="submit" className="w-full">Login</Button>
          </form>

          <Link to="/forgot-password" className="text-sm flex text-primary hover:underline">
                  ¿Olvidaste tu contraseña?
                </Link>

          {message && (
            <div
              className={`text-center mt-4 text-sm font-medium ${
                isError ? 'text-red-500' : 'text-green-500'
              }`}
            >
              {message}
            </div>
          )}

          <div className="text-center mt-4">
            <p className="text-sm text-muted-foreground">
              ¿No tienes una cuenta?{" "}
              <Link to="/register" className="text-primary hover:underline">
                Regístrate
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;


/* TEST LOGIN PAGE TO PROFILE
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import Header from '@/components/Header';

const Login = () => {
  const [message, setMessage] = useState(null);
  const [isError, setIsError] = useState(false);
  const [formData, setFormData] = useState({
    identifier: '',
    password: '',
  });
  const navigate = useNavigate(); // Hook para redirigir

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    setIsError(false);

    try {
      // Simulamos una autenticación exitosa
      if (formData.identifier && formData.password) {
        // En una implementación real, esto sería una llamada a la API
        
        // Guardamos el estado de autenticación
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', formData.identifier);
        
        setIsError(false);
        setMessage('¡Inicio de sesión exitoso!');
        
        // Mostrar toast
        toast({
          title: "¡Bienvenido!",
          description: "Has iniciado sesión correctamente",
        });
        
        // Redirigir al perfil
        setTimeout(() => navigate('/profile'), 1000);
        
      } else {
        setIsError(true);
        setMessage('Por favor, ingresa tu usuario/email y contraseña.');
      }
    } catch (error) {
      setIsError(true);
      setMessage('Error de conexión con el servidor.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-8 bg-card p-8 rounded-xl border border-border/50">
          <div className="text-center">
            <h1 className="text-2xl font-bold">¡Bienvenido Guapetón!</h1>
            <p className="text-muted-foreground mt-2">Ingresa a tu cuenta</p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="identifier">Email/Username</Label>
              <Input
                id="identifier"
                type="text"
                name="identifier"
                placeholder="Enter your email or username"
                value={formData.identifier}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Contraseña</Label>
                <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <Button type="submit" className="w-full">Login</Button>
          </form>

          {message && (
            <div
              className={`text-center mt-4 text-sm font-medium ${isError ? 'text-red-500' : 'text-green-500'}`}
            >
              {message}
            </div>
          )}

          <div className="text-center mt-4">
            <p className="text-sm text-muted-foreground">
              ¿No tienes una cuenta?{" "}
              <Link to="/register" className="text-primary hover:underline">
                Regístrate
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
*/
