import bcrypt from "bcrypt";
import type { Request, Response } from "express";
import mongoose from "mongoose";

import User from "../models/user.js";

export const createUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw Object.assign(new Error("Todos los campos son obligatorios"), {
      statusCode: 400,
    });
  }

  if (password.length < 8) {
    throw Object.assign(new Error("La contraseña debe tener al menos 8 caracteres"), {
      statusCode: 400,
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await User.create({ name, email, password: hashedPassword });

    res.status(201).send({ _id: user._id, name: user.name, email: user.email });
  } catch (err: unknown) {
    if (err instanceof mongoose.mongo.MongoServerError && err.code === 11000) {
      throw Object.assign(new Error("Ese correo ya está en uso"), {
        statusCode: 409,
      });
    }

    throw err;
  }
};
