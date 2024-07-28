"use client";

import React from "react";

import Image from "next/image";
import { Link } from "next-view-transitions";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Eye, EyeOff, Upload } from "lucide-react";
import { registerFunctionAction } from "@/app/actions";

const SignupClient = () => {
  const [viewPass, setViewPass] = React.useState<boolean>(false);

  const handleChangeViewPass = () => {
    setViewPass(!viewPass);
  };

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
          <form
            action={async (formData: FormData) => {
              const name = formData.get("name") as string;
              const nameShop = formData.get("nameShop") as string;
              const phone = formData.get("phone") as string;
              const email = formData.get("email") as string;
              const password = formData.get("password") as string;
              const confirmPassword = formData.get("confirmPassword") as string;

              const user = {
                name,
                nameShop,
                phone,
                email,
                password,
                confirmPassword,
              };

              const res = await registerFunctionAction(user);

              alert(JSON.stringify(res, null, 2));
            }}
            className="grid gap-4"
          >
            <div className="grid gap-2">
              <Label htmlFor="name">
                Tu nombre <span className="text-red-500 font-bold">*</span>
              </Label>
              <Input id="name" type="name" name="name" placeholder="Lucas" />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="nameShop">
                Nombre del emprendimiento{" "}
                <span className="text-red-500 font-bold">*</span>
              </Label>
              <Input
                id="nameShop"
                type="text"
                name="nameShop"
                placeholder="CompraShop"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">
                Email <span className="text-red-500 font-bold">*</span>
              </Label>
              <Input
                id="email"
                type="text"
                name="email"
                placeholder="m@example.com"
              />
            </div>

            <div className="grid gap-2 relative">
              <Label htmlFor="phone">
                Telefono <span className="text-red-500 font-bold">*</span>
              </Label>
              <Input
                id="phone"
                type="text"
                name="phone"
                placeholder="3513988446"
                className="ps-12"
              />
              <Button
                type="button"
                size={"icon"}
                disabled
                className="absolute bottom-0 left-0"
                variant={"outline"}
              >
                +54
              </Button>
            </div>

            <div className="grid gap-2 relative">
              <Label htmlFor="confirmPassword">
                Contraseña <span className="text-red-500 font-bold">*</span>
              </Label>
              <Input
                id="confirmPassword"
                type={viewPass ? "text" : "password"}
                name="confirmPassword"
                placeholder="********"
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

            <div className="grid gap-2 relative">
              <Label htmlFor="password">
                Confirmar contraseña{" "}
                <span className="text-red-500 font-bold">*</span>
              </Label>
              <Input
                id="password"
                type={viewPass ? "text" : "password"}
                name="password"
                placeholder="********"
              />{" "}
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

            {/* Logo Input */}
            {/*   <div className="grid gap-2">
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
            </div> */}

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
