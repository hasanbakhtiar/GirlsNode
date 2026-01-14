

const productAllList = (req, res) => {
    res.status(200).header("mydata", "Hello").send("Product_all_list");
}
let product = [{ "id": 1, "title": "test text", "price": 3000 }, { "id": 2, "title": "test text", "price": 3000 }];
const productSingleData = (req, res) => {
    res.send(req.params.id);
}

const productCreate = (req, res) => {
    product.push({
        id: req.body.id,
        title: req.body.title,
        price: req.body.price
    })
    res.status(201).send(product);
}

const productUpdate = (req, res) => {
    const productFind = product.find(p => p.id == req.params.id);

    res.send({
        id: productFind.id,
        title: req.body.title ? req.body.title : productFind.title,
        price: req.body.price ? req.body.price : productFind.price
    })
}

const productDelete = (req, res) => {

    const result = product.filter((item) => {
      return  item.id != req.params.id
    })
    res.send(result);
}

module.exports = { productAllList, productSingleData, productCreate, productUpdate, productDelete };