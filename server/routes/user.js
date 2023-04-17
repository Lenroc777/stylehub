const router = require("express").Router();
const {verifyToken, verifyTokenAndAuthorization} = require("./verifyToken")
const User = require("../models/User");
const CryptoJS = require("crypto-js");

router.put("/:id", verifyTokenAndAuthorization, async (req, res)=>{
    console.log(req.params.id);
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

module.exports = router;