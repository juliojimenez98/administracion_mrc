import { Request, Response } from "express";
import Test from "../models/test";

export const helloWorld = async (req: Request, res: Response) => {
  const test = await Test.findAll();
  res.json({
    test: test,
  });
};

export const createTest = async (req: Request, res: Response) => {
  const { body } = req;
  try {
    const existEmail = await Test.findOne({
      where: {
        correo: body.correo,
      },
    });

    if (existEmail) {
      return res.status(400).json({
        msg: "Ya existe un usuario con ese correo",
      });
    }

    const test = Test.build(body);
    await test.save();

    res.json({
      test,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Error en el servidor",
    });
  }
};
