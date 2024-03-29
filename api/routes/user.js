const router = require("express").Router();
const {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin} = require("./verifyToken")
const User = require("../models/User");
const CryptoJS = require("crypto-js");

//UPDATE USER
router.put("/:id", verifyTokenAndAuthorization, async (req, res)=>{
    // console.log(req.params.id);
    if(req.body.password){
        let hashedPassword = CryptoJS.AES.encrypt(req.body.password, process.env.JWT_KEY).toString();
        req.body.password = hashedPassword;
    }

    try{
        console.log("Updating user with id:", req.params.id);
        console.log("New user data:", req.body);
        await User.findOneAndUpdate({_id: req.params.id}, {
            $set: req.body
        }, {new: true})
        const updatedUser = await User.findById(req.params.id);
        res.status(200).json(updatedUser);
    }catch(err){
        res.status(500).json(err)
    }
})

//DELETE USER
router.delete("/:id", verifyTokenAndAuthorization, async (req, res)=>{
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User has been deleted...")
    } catch (err) {
        res.status(500).json(err)
    }
})
//GET USER
router.get("/find/:id", verifyTokenAndAdmin, async (req, res)=>{
    try {
        const user = await User.findById(req.params.id)
        const {password, ...others} = user._doc
        res.status(200).json(others)
    } catch (err) {
        res.status(500).json(err)
    }
})

//GET ALL USERS
router.get("/", verifyTokenAndAdmin, async (req, res)=>{
    try {
        const users = await User.find()
        // const {password, ...others} = user._doc
        res.status(200).json(users)
    } catch (err) {
        res.status(500).json(err)
    }
})

//GET USER STATS
router.get("/stats", verifyTokenAndAdmin, async (req, res)=>{
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear()-1))
    
    try {
        
        const data = await User.aggregate([
            {
                $match: {
                    createdAt: {$gte: lastYear}
                },
            },
            {
                $project:{
                    month: {$month: "$createdAt"},
                },
            },
            {
                $group:{
                    _id: "$month",
                    total: {$sum: 1},
                },
            },
        ]);
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;