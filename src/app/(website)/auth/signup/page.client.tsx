import React from "react";

import Image from "next/image";
import { Link } from "next-view-transitions";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Upload } from "lucide-react";

const SignupClient = () => {
  return (
    <section className="w-full h-screen lg:grid lg:grid-cols-2">
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
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Únete</h1>
            <p className="text-balance text-muted-foreground">
              Ingresa tu información para crear una cuenta
            </p>
          </div>
          <form action={"test"} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">
                Tu nombre <span className="text-red-500 font-bold">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                name="name"
                placeholder="Lucas"
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">
                Nombre del emprendimiento{" "}
                <span className="text-red-500 font-bold">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                name="name"
                placeholder="CompraShop"
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">
                Email <span className="text-red-500 font-bold">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="password">
                Contraseña <span className="text-red-500 font-bold">*</span>
              </Label>
              <Input
                id="password"
                type="password"
                name="password"
                placeholder="********"
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="password">
                Repetir contraseña{" "}
                <span className="text-red-500 font-bold">*</span>
              </Label>
              <Input
                id="password"
                type="password"
                name="password"
                placeholder="********"
                required
              />
            </div>

            <div className="grid gap-2">
              <Label>Logo del emprendimiento (opcional)</Label>
              <div className="flex aspect-square w-full h-[10rem] items-center justify-center rounded-md border border-dashed relative">
                <Upload className="h-4 w-4 text-muted-foreground" />
                <span className="sr-only">Upload</span>

                <input
                  type="file"
                  accept="image/*"
                  name="logo"
                  className="bg-red-500 w-full h-full absolute top-0 left-0 opacity-0 cursor-pointer"
                />
              </div>
            </div>

            <Button type="submit" className="w-full">
              Unirse
            </Button>
            {/*  <Button variant="outline" className="w-full">
              Login with Google
            </Button> */}
          </form>
          <div className="mt-4 text-center text-sm">
            ¿Ya tienes una cuenta?{" "}
            <Link href="/auth/signin" className="underline text-primary">
              Iniciar sesión
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupClient;
