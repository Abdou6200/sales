import express from 'express';
import auth from './auth/router';
import users from './user/router';
import categories from './category/router';
import menus from './menu/router';
import subCategories from './subCategory/router';
import products from './product/router';
import message from './message/router';


const router = express.Router();

router.use('/auth', auth);
router.use('/users', users);
router.use('/categories', categories);
router.use('/menus', menus);
router.use('/sub-categories', subCategories);
router.use('/products', products);
router.use('/messages', message);


export default router;
