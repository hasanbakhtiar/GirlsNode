import { Request, Response } from "express";

import { Product, productValidate } from "../models/product";


export const productAllList = async (req: Request, res: Response) => {
    const product = await Product.find();
    res.status(200).json({
        dataLength: product.length,
        data: product
    });
}


export const productCreate = async (req: Request, res: Response) => {
    const { error } = productValidate(req.body);
    if (error) {
        return res.send(400).json({
            message: 'validate error ' + error,
        })
    }
    const product = new Product(req.body);
    const result = await product.save();
    res.status(201).send(result);
}

export const productUpdate = async (req: Request, res: Response) => {
    const { error } = productValidate(req.body);
    if (error) {
        return res.send(400).json({
            message: 'validate error ' + error
        })
    }
    const product = await Product.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(product);
}

export const productDelete = async (req: Request, res: Response) => {
    const product = await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({
        statusMessage: "product were deleted!",
        data: product
    })

}