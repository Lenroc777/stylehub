const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// REGISTER
router.post("/register", async (req, res) => {
  try {
    // Generowanie soli i hashowanie hasła
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Tworzenie nowego użytkownika
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    // Zapisywanie nowego użytkownika do bazy danych
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    // Sprawdzanie, czy nazwa użytkownika istnieje w bazie danych
    const user = await User.findOne({ username: req.body.username });
    if (!user) return res.status(401).json("Nieprawidłowe dane uwierzytelniające");

    // Porównywanie wprowadzonego hasła z zahaszowanym hasłem w bazie danych
    const isPasswordValid = await bcrypt.compare(req.body.password, user.password);

    // console.log(isPasswordValid);

    if (!isPasswordValid) {
      return res.status(401).json("Nieprawidłowe dane uwierzytelniające");
    }

    // Tworzenie tokena dostępu JWT
    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_KEY,
      { expiresIn: "3d" }
    );

    // Usuwanie hasła z obiektu użytkownika i zwracanie danych użytkownika wraz z tokenem dostępu
    const { password, ...userData } = user._doc;
    res.status(200).json({ ...userData, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
