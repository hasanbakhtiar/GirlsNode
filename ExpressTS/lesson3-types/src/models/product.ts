import Joi from 'joi';
import mongoose, { Document } from 'mongoose';
import type { ProductType } from '../types/productType';

const productSchema = new mongoose.Schema({
    title: String,
    price: Number,
    text: String,
}, { timestamps: true });

interface validateProductType extends ProductType, Document {};

export const productValidate = (product: Partial<validateProductType>) => {
    const schema = Joi.object({
        title: Joi.string().optional().allow('', null),
        price: Joi.number().optional().allow('', null),
        text: Joi.string().optional().allow('', null)
    });
    return schema.validate(product);
}

export const Product = mongoose.model<validateProductType>('Product', productSchema);
