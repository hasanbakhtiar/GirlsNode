const {
  createMessage,
  errorMessage,
  deleteMessage,
  editMessage,
} = require("../../utils/infoMessage");
const { Products, validateProduct } = require("./product.model");

exports.listProduct = async (req, res) => {
  try {
    const product = await Products.findByPk(req.params.id);
    res.status(200).json({
      data: product,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.createProduct = async (req, res) => {
  try {
    const { error } = validateProduct(req.body);
    if (error) {
      res.status(400).json(errorMessage("Validate error", error));
    } else {
      const product = await Products.create(req.body);
      res.status(200).json(createMessage("Product", product));
    }
  } catch (error) {
    res.status(500).json(errorMessage("Something went wrong", error));
  }
};

exports.editProduct = async (req, res) => {
  try {
    const { error } = validateProduct(req.body);
    if (error) {
      return res.status(400).json(errorMessage("Validate error", error));
    }

    const product = await Products.findByPk(req.params.id);
    if (!product) {
      return res.status(404).json(errorMessage("Product not found"));
    }

    await product.update(req.body);
    res.status(200).json(editMessage("Product updated", product));
  } catch (error) {
    res.status(500).json(errorMessage("Something went wrong", error));
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const product = await Products.findByPk(req.params.id);
    if (product) {
      await product.destroy();
      res.status(200).json(deleteMessage("Product", product));
    } else {
      res.status(404).json(errorMessage("Not found product"));
    }
  } catch (error) {
    console.log(error);
  }
};
