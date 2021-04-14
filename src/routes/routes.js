const express = require('express');
const ProdutoController = require ('../controllers/productController.js');
const router = express.Router();
 
router.post('/produto', ProdutoController.Insert);
router.get('/produto', ProdutoController.SelectAll);
router.get('/produto/:id', ProdutoController.SelectDetail);
 
module.exports = router;