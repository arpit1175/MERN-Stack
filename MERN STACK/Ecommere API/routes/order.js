const { query } = require("express");
const Order = require("../Models/Order");
const { verifytokenandauth, verifytokenAdmin, verifyToken } = require("./verifyToken");

const router = require("express").Router();




//create new Order
router.post("/", verifyToken, async (req, res) => {
    const newOrder = new Order(req.body)
    try {
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder)
    } catch (err) {
        res.status(500).json(err)
    }
})


//UPDATE - using .put because we are updating 
router.put("/:id", verifytokenAdmin, async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, { $set: req.body, }, { new: true });
        res.status(200).json(updatedOrder)
    } catch (err) {
        res.status(500).json(err)
    }
});



//delete
router.delete("/:id", verifytokenAdmin, async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id)
        res.status(200).json("Order is deleted")
    } catch (err) {
        res.status(500).json(err)
    }
})

//get Order by user id
router.get("/find/:userId", verifytokenandauth,  async (req, res) => {
    try {
        const orders = await Order.find({userID: req.params.userId});
        res.status(200).json(orders);

    } catch (err) {
        res.status(500).json(err)
    }
})

//get all 
router.get("/", verifytokenAdmin, async (req, res) => {
    
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
        
    } catch (err) {
        res.status(500).json(err)
    }
});


//Get monthly income - stats

router.get("/income", verifytokenandauth, async (req,res)=>{
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth()-1))
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth()-1));
    try{
        const income = await Order.aggregate([
            {$match : { createdAt : { $gte : previousMonth}}},
            {
                $project :
               { month : { $month: "$createdAt"},
               sales : "$amount",
            },
            
            },
            {
                $group:{
                    _id : "$month",
                    total : {$sum: "$sales"}
                }
            }

        ]);
        res.status(200).json(income);
    }catch(err){
        res.status(500).json(err)
    }
})


module.exports = router;
