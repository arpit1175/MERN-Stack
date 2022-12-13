const { query } = require("express");
const Cart = require("../Models/Cart");
const { verifytokenandauth, verifytokenAdmin, verifyToken } = require("./verifyToken");

const router = require("express").Router();

//create new product
router.post("/", verifyToken, async (req, res) => {
    const newCart = new Cart(req.body)
    try {
        const savedCart = await newCart.save();
        res.status(200).json(savedCart)
    } catch (err) {
        res.status(500).json(err)
    }
})


//UPDATE - using .put because we are updating 
router.put("/:id", verifytokenandauth, async (req, res) => {
    try {
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id, { $set: req.body, }, { new: true });
        res.status(200).json(updatedCart)
    } catch (err) {
        res.status(500).json(err)
    }
});



//delete
router.delete("/:id", verifytokenandauth, async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json("Cart is deleted")
    } catch (err) {
        res.status(500).json(err)
    }
})

//get CArt by user id
router.get("/find/:userId", verifytokenandauth,  async (req, res) => {
    try {
        const cart = await Cart.findOne({userID: req.params.userId});
        res.status(200).json(cart);

    } catch (err) {
        res.status(500).json(err)
    }
})

//get all 
router.get("/", verifytokenAdmin, async (req, res) => {
    
    try {
        const carts = await Cart.find();
        res.status(200).json(carts);
        
    } catch (err) {
        res.status(500).json(err)
    }
});



module.exports = router;
