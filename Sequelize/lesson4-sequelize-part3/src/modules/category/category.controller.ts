import { Request, Response } from "express";
import Categories from "./category.model";

export const listCategory = async (req: Request, res: Response) => {
  try {
    const category = await Categories.findByPk(Number(req.params.id));
    res.status(200).json({
      data: category,
    });
  } catch (error) {
    console.log(error);
  }
};

export const createCategory = async (req: Request, res: Response) => {
  try {
    const category = await Categories.create(req.body);
    res.status(200).json({
      data: category,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error });
  }
};