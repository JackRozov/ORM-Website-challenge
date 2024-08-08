const router = require('express').Router();
const categoryRoutes = require('./categoryroutes');
const productRoutes = require('./productroutes');
const tagRoutes = require('./nameroutes');

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

module.exports = router;