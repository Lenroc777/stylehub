const router = require("express").Router();
const User = require("../models/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

//REGISTER

router.post("/register", async (req, res) => {

    try{
        //generate salt and hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        //creating new user
        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password: hashedPassword
        })

        //save new user to database
        const user = await newUser.save();
        res.status(200).json(user);

    }catch(err){
        res.status(500).json(err)
    }
    

 
});

//LOGIN
router.get("/login", async (req, res)=>{
    try{
        //checking if username exist in database
        const user = await User.findOne({username: req.body.username})
        if(!user) return res.status(401).json("Wrong credentials")
        
        //comparing entered password with a password in the database 
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if(!validPassword) return res.status(401).json("Wrong credentials")

        const accessToken = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin,
        }, process.env.JWT_KEY, {expiresIn: "3d"})

        const {password, ...others} = user._doc;

        res.status(200).json({...others, accessToken});

    }catch(err){
        res.status(500).json(err)
    }

})

module.exports = router;