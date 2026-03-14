import { Request, Response } from 'express';
import { items, Item } from '../models/item.model';

// Create an item
export const createItem = (req: Request, res: Response) => {
    try {

    } catch (error) {
        res.status(400).send(error);
    }
};

// Read all items
export const getItems = (req: Request, res: Response) => {
    try {
        res.json(items);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Read single item
export const getItemById = (req: Request, res: Response) => {
    try {

    } catch (error) {
        res.status(400).send(error);
    }
};

// Update an item
export const updateItem = (req: Request, res: Response) => {
    try {

    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete an item
export const deleteItem = (req: Request, res: Response) => {
    try {

    } catch (error) {
        res.status(400).send(error);
    }
};