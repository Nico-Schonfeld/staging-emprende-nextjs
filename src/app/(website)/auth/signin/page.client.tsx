"use client";

import React from "react";

import Image from "next/image";
import { Link } from "next-view-transitions";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";

const SigninClient = () => {
  const [viewPass, setViewPass] = React.useState<boolean>(false);

  const handleChangeViewPass = () => {
    setViewPass(!viewPass);
  };

  return (
    <div className="w-full h-screen lg:grid lg:grid-cols-2">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Iniciar sesión</h1>
            <p className="text-balance text-muted-foreground">
              Ingrese su correo electrónico y contraseña a continuación para
              iniciar sesión en su cuenta
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@ejemplo.com"
                required
              />
            </div>
            <div className="grid gap-2 relative">
              <div className="flex items-center">
                <Label htmlFor="password">Contraseña</Label>

                <Link
                  href="/forgot-password"
                  className="ml-auto inline-block text-sm underline text-primary"
                >
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
              <Input
                id="password"
                type={viewPass ? "text" : "password"}
                name="password"
                placeholder="********"
                required
              />
              <Button
                type="button"
                size={"icon"}
                className="absolute bottom-0 right-0 cursor-pointer"
                variant={"outline"}
                onClick={handleChangeViewPass}
              >
                {viewPass ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </Button>
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
            {/*  <Button variant="outline" className="w-full">
              Login with Google
            </Button> */}
          </div>
          <div className="mt-4 text-center text-sm">
            ¿No tienes una cuenta?{" "}
            <Link href="/auth/signup" className="underline text-primary">
              Únete
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="/assets/photos/placeholderImage.svg"
          overrideSrc="/assets/photos/placeholderImage.svg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover"
          /* dark:brightness-[0.2] dark:grayscale */
        />
      </div>
    </div>
  );
};

export default SigninClient;
