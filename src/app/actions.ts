"use server";

import { userRegister } from "@/types/user.type";
import { registerAuth } from "@/utils/auth/authOptions";
import { z } from "zod";

export async function registerFunctionAction(userRegister: userRegister) {
  const name = z.string({ required_error: "Campo obligatorio" });
  const nameShop = z.string({ required_error: "Campo obligatorio" });
  const phone = z.string({ required_error: "Campo obligatorio" });
  const email = z.string({ required_error: "Campo obligatorio" }).email();
  const password = z.string({ required_error: "Campo obligatorio" });
  const confirmPassword = z.string({ required_error: "Campo obligatorio" });

  const resName = name.safeParse(userRegister.name);
  const resNameShop = nameShop.safeParse(userRegister.nameShop);
  const resPhone = phone.safeParse(userRegister.phone);
  const resEmail = email.safeParse(userRegister.email);
  const resPassword = password.safeParse(userRegister.password);
  const resConfirmPassword = confirmPassword.safeParse(
    userRegister.confirmPassword
  );

  if (!resName.success)
    return {
      error: true,
      success: false,
      input: "name",
      message: "Campo obligatorio",
    };

  if (!resNameShop.success)
    return {
      error: true,
      success: false,
      input: "nameShop",
      message: "Campo obligatorio",
    };

  if (!resPhone.success)
    return {
      error: true,
      success: false,
      input: "phone",
      message: "Campo obligatorio",
    };

  if (!resEmail.success)
    return {
      error: true,
      success: false,
      input: "email",
      message: "Formato de email invalido",
    };

  if (!resPassword.success)
    return {
      error: true,
      success: false,
      input: "password",
      message: "Campo obligatorio. Minimo 3 caracteres",
    };

  if (!resConfirmPassword.success)
    return {
      error: true,
      success: false,
      input: "confirmPassword",
      message: "Campo obligatorio. Minimo 3 caracteres",
    };

  if (userRegister.password !== userRegister.confirmPassword)
    return {
      error: true,
      success: false,
      input: "verifyPassword",
      message: "Las contraseñas no son iguales",
    };

  const res = registerAuth(userRegister);

  return res;
}
