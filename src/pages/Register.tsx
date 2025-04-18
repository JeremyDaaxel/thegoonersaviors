import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Header from '@/components/Header';

const Register = () => {
  const [message, setMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState<boolean>(false);
  const [formData, setFormData] = useState<{
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
  }>({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    setIsError(false);

    // Validar si las contraseñas coinciden
    if (formData.password !== formData.confirmPassword) {
      setIsError(true);
      setMessage("Las contraseñas no coinciden.");
      return;
    }

    const reqOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: formData.username,
        email: formData.email,
        password: formData.password,
      }),
    };

    try {
      // URL de tu servidor backend (cámbiala por la de tu servidor real)
      const apiUrl = 'https://tgsaviors.onrender.com/register'; // Cambia esto a la URL pública de tu backend
      const req = await fetch(apiUrl, reqOptions);
      const res = await req.json();

      if (res.error) {
        setIsError(true);
        setMessage(res.error);
        return;
      }

      if (res.message) {
        setIsError(false);
        setMessage('¡Registro exitoso! Ahora puedes iniciar sesión.');
      }
    } catch (error) {
      setIsError(true);
      setMessage('Error al conectar con el servidor. Intenta de nuevo.');
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-8 bg-card p-8 rounded-xl border border-border/50">
          <div className="text-center">
            <h1 className="text-2xl font-bold">¡Regístrate aquí lind@!</h1>
            <p className="text-muted-foreground mt-2">Bienvenido a la familia.</p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                name="username"
                placeholder="Choose a username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                name="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input
                id="confirm-password"
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            <Button type="submit" className="w-full">Register</Button>
          </form>

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
              ¿Ya tienes una cuenta?{" "}
              <Link to="/login" className="text-primary hover:underline">
                Iniciar sesión
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;