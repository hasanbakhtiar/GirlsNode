import express from 'express';
import { productCreate, productUpdate, productDelete, productAllList } from '../controllers/product';
const route = express.Router();

route.get('/', productAllList);
route.post('/', productCreate);
route.put('/:id', productUpdate);
route.delete('/:id', productDelete)

export default route;
