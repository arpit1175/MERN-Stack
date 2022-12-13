const User = require("../Models/User");
const { verifytokenandauth, verifytokenAdmin } = require("./verifyToken");

const router = require("express").Router();

//using .put because we are updating 
router.put("/:id", verifytokenandauth, async (req, res) => {
    if (req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.Pass_sec_key).toString()

    }
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body, }, { new: true });
        res.status(200).json(updatedUser)
    } catch (err) {
        res.status(500).json(err)
    }
});

//delete
router.delete("/:id", verifytokenandauth, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("user deleted")
    } catch (err) {
        res.status(500).json(err)
    }
})

//get user by user id
router.get("/find/:id", verifytokenAdmin, async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        const { password1, ...others } = user._doc;
        res.status(200).json(others);

    } catch (err) {
        res.status(500).json(err)
    }
})

//get all users
router.get("/", verifytokenAdmin, async (req, res) => {
    const query = req.query.new;
    try {
        const users = query ? await User.find().sort({ _id: -1 }).limit(5)
            : await User.find();

        res.status(200).json(users);

    } catch (err) {
        res.status(500).json(err)
    }
});

//get user stats.

router.get("/stats", verifytokenAdmin, async (req, res) => {
    const date = new Date();
    const lastyear = new Date(date.setFullYear(date.getFullYear() - 1));
    try {
        //to get user stats per month, we need to group the items  using mongo db aggregate

        const data = await User.aggregate([
            { $match: { createdAt: { $gte: lastyear } } },
            { $project: { month: { $month: "$createdAt" }, }, },
            {
                $group: {
                    _id: "$month",
                    total: { $sum:1 }
                },
            }
        ])
        res.status(200).json(data);

    } catch (err) {
        res.status(500).json(err)
    }
});






module.exports = router;
