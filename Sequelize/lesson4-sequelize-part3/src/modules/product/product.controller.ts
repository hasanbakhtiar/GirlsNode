import { Request, Response } from "express";
import {
  createMessage,
  errorMessage,
  deleteMessage,
  editMessage,
} from "../../utils/infoMessage";
import { Products, validateProduct } from "./product.model";

export const listProduct = async (req: Request, res: Response) => {
  try {
    const product = await Products.findByPk(Number(req.params.id));
    res.status(200).json({
      data: product,
    });
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