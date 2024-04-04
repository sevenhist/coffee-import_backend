const shopService = require("../service/shop-service");

class ShopController {
  async getCategories(req, res, next) {
    try {
      const categories = await shopService.getCategories();

      return res.json(categories);
    } catch (e) {
      next(e);
    }
  }

  async getOneCategory(req, res, next) {
    try {
      const { categoryId } = req.params;
      const category = await shopService.getOneCategory(categoryId);

      return res.json(category);
    } catch (e) {
      next(e);
    }
  }

  async getProducts(req, res, next) {
    try {
      const { categoryId } = req.query;
      const products = await shopService.getProducts(categoryId);

      return res.json(products);
    } catch (e) {
      next(e);
    }
  }

  async getTopProducts(req, res, next) {
    try {
      const products = await shopService.getTopProducts();
      return res.json(products);
    } catch (e) {
      next(e);
    }
  }

  async getOneProduct(req, res, next) {
    try {
      const { productId } = req.params;
      const product = await shopService.getOneProduct(productId);

      return res.json(product);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new ShopController();
