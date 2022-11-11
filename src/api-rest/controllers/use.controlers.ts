import { Request, Response } from "express";
import { db } from "..";
import User from "../models/user";
import bcrypt from "bcrypt";

interface IbodyUser {
  email: string;
  password: string;
  name: string;
}

export const signUp = (req: Request, res: Response) => {
  registerUser(req, res);
};

export const signIn = (req: Request, res: Response) => {
  res.send('enviado')
};

const registerUser = async (req: Request, res: Response) => {
  const { email = "", password = "", name = "" } = req.body as IbodyUser;
  await db.conect();
  const user = await User.findOne({ email });

  if (password.length < 6) {
    return res.status(400).json({
      message: "La contraseña debe de ser de 6 caracteres",
    });
  }
  if (name.length < 2) {
    return res.status(400).json({
      message: "Nombre demasiado corto",
    });
  }
  //TODO: Crear validacion de email
  if (user) {
    await db.disconnect();
    return res.status(400).json({ message: "EL correo ya ha sido registrado" });
  }

  const newUser = new User({
    email: email.toLocaleLowerCase(),
    password: bcrypt.hashSync(password, 10),
    role: "client",
    name,
  });

  try {
    await newUser.save({ validateBeforeSave: true });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Revisar logs de servidor" });
  }

  const { _id, role } = newUser;
  // const token = jwt.signToken({ _id, email });
  return res.status(200).json({
    // token: token,
    user: {
      email,
      role,
      name,
    },
    message: "Acceso Autorizado:",
  });
};
