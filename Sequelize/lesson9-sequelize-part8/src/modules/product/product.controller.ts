import { Request, Response } from "express";
import {
  createMessage,
  errorMessage,
  deleteMessage,
  editMessage,
} from "../../utils/infoMessage";
import { Products, validateProduct } from "./product.model";
import Categories from "../category/category.model";
import slugify from 'slugify';
import { Op } from "sequelize";


export const allProducts = async (req: Request, res: Response) => {
  try {
    const products = await Products.findAll();
    res.status(200).json({ data: products });
  } catch (error) {
    console.log(error);
  }
};

export const singleProduct = async (req: Request, res: Response) => {
  try {
    const param = req.params.id;

    const isNumeric = !isNaN(Number(param));

    const product = await Products.findOne({
      where: {
        [Op.or]: [
          ...(isNumeric ? [{ id: Number(param) }] : []),
          { slug: param },
        ],
      },
      include: [{ model: Categories, as: "category", attributes: ["id", "title"] }],
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

    if (req.body.slug) {
      req.body.slug = slugify(req.body.slug, { lower: true, strict: true });
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