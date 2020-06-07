import express from 'express';
import PointsControllers from './controllers/PointsControllers';
import ItemsControllers from './controllers/ItemsControllers';
import multer from 'multer';

import multerConfig from './config/multer'

const routes = express.Router();
const upload = multer(multerConfig);

const pointsControllers = new PointsControllers();
const itemsControllers = new ItemsControllers;

routes.get('/items', itemsControllers.index);
routes.post('/points', upload.single('image'), pointsControllers.create);
routes.get('/points/:id', pointsControllers.show);
routes.get('/points', pointsControllers.index);

//index, show(apenas 1 caso), create, update, delete
export default routes;