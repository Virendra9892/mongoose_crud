var express = require('express');
var router = express.Router();
const categoryController = require("../controllers/categoryController")
const productController = require("../controllers/productController")
const brandController = require("../controllers/brandController")
const subCatController = require("../controllers/subCategoryController");
/* Category page. */
router.post('/category', categoryController.addCategory);


/* Product page. */
router.post("/product",productController.addProduct)
router.get("/product",productController.getProduct)
router.get("/productById/:id",productController.getProductById)
router.get("/productByquery",productController.getProductByQuery)
router.get("/productLook",productController.getProductBylookup)
/* Brand page. */

router.post("/brand",brandController.createBrand)


/* SubCategory page. */


router.post("/subCat",subCatController.createSubCat)
module.exports = router;
