const { query } = require("express");
const Product = require("../Models/Product");
const { verifytokenandauth, verifytokenAdmin } = require("./verifyToken");

const router = require("express").Router();

//create new product
router.post("/", verifytokenAdmin, async (req, res) => {
    const newProduct = new Product(req.body)
    try {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct)
    } catch (err) {
        res.status(500).json(err)
    }
})


//using .put because we are updating 
router.put("/:id", verifytokenAdmin, async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, { $set: req.body, }, { new: true });
        res.status(200).json(updatedProduct)
    } catch (err) {
        res.status(500).json(err)
    }
});



//delete
router.delete("/:id", verifytokenAdmin, async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json("Product is deleted")
    } catch (err) {
        res.status(500).json(err)
    }
})

//get Product by user id
router.get("/find/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);

    } catch (err) {
        res.status(500).json(err)
    }
})

//get all users
router.get("/",  async (req, res) => {
    const queryNew = req.query.new;
    const querycategories = req.query.category;
    try {
        let products;

        if(queryNew){
            products = await Product.find().sort({createdAt: -1}).limit(5)
        } else if(querycategories){
            products = await Product.find({categories : {
                $in : [querycategories],
            }})
        }else{
            products = await Product.find();
        }
        res.status(200).json(products);

    } catch (err) {
        res.status(500).json(err)
    }
});





module.exports = router;
