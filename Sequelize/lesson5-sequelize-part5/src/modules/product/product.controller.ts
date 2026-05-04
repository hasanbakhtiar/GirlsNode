import { Request, Response } from "express";
import {
  createMessage,
  errorMessage,
  deleteMessage,
  editMessage,
} from "../../utils/infoMessage";
import { Products, validateProduct } from "./product.model";
import Categories from "../category/category.model";

export const allProducts = async (req: Request, res: Response) => {
  try {
    const products = await Products.findAll({
      include: [{ model: Categories, attributes: ["id", "title"] }],
    });
    res.status(200).json({ data: products });
  } catch (error) {
    console.log(error);
  }
};

export const singleProduct = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ message: "Invalid id" });
    }

    const product = await Products.findByPk(id, {
      include: [{ model: Categories, attributes: ["id", "title"] }],
    });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ data: product });
  } catch (error) {
    console.log(error);
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { error } = validateProduct(req.body);
    if (error) {
      return res.status(400).json(errorMessage("Validate error", error));
    }

    const product = await Products.create(req.body);
    res.status(200).json(createMessage("Product", product));
  } catch (error) {
    res.status(500).json(errorMessage("Something went wrong", error));
  }
};

export const editProduct = async (req: Request, res: Response) => {
  try {
    const { error } = validateProduct(req.body);
    if (error) {
      return res.status(400).json(errorMessage("Validate error", error));
    }

    const product = await Products.findByPk(Number(req.params.id));
    if (!product) {
      return res.status(404).json(errorMessage("Product not found"));
    }

    await product.update(req.body);
    res.status(200).json(editMessage("Product updated", product));
  } catch (error) {
    res.status(500).json(errorMessage("Something went wrong", error));
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const product = await Products.findByPk(Number(req.params.id));
    if (!product) {
      return res.status(404).json(errorMessage("Product not found"));
    }

    await product.destroy();
    res.status(200).json(deleteMessage("Product", product));
  } catch (error) {
    res.status(500).json(errorMessage("Something went wrong", error));
  }
};