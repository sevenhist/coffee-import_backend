const ApiError = require("../exceptions/api-error");
const categories = require("../shopData/categories");
const products = require("../shopData/products");

class ShopService {
  async getCategories() {
    return categories;
  }

  async getProducts(categoryId) {
    let filteredProducts = products;

    if (categoryId) {
      filteredProducts = products.filter(
        (product) => product.categoryId === categoryId
      );
    }

    return filteredProducts;
  }

  async getOneProduct(productId) {
    const currentProduct = products.find((product) => product.id === productId);
    if (!currentProduct) {
      throw ApiError.NotFound("Такого продукту не існує");
    }

    return currentProduct;
  }
}

module.exports = new ShopService();
