const express = require("express");
const User = require("../model/User");
const bcrypt=require('bcrypt')
const router = express.Router();


router.post("/register", async (req, res) => {
  let user = req.body.Formdata;
  let email = await User.findOne({ Email: user.Email });
  if (email != null) {
    res.send("User is Already Exists... Try Again with Other Email");
  } else {
    let HashedPass = await bcrypt.hash(user.password, 11);
    let newUser = await User.create({
      username: user.username,
      Email: user.Email,
      PhoneNumber: user.PhoneNumber,
      role: user.role,
      password: HashedPass,
    });
    res.send("User Created Successfully");
  }
});

router.post("/login", async (req, res) => {
  let userData = req.body;
  let UserInfo;
  try {
    UserInfo = await User.findOne({ username: userData.username });
  } catch (error) {
    res.send("Something went Wrong while DB login process !!!");
  }
  // console.log(UserInfo);
  if (UserInfo===null) {
    return res.status(400).send("Please registered first");
  }else{
    const UserValid = await bcrypt
      .compare(userData.password, UserInfo.password)
      .catch((err) => {
        return res.send(err);
      });
    if (!UserValid) {
        return res.status(400).send('Incorrect Credentials');
    }else{
      res.status(200).send(UserInfo)
    }
  }
});

router.get('/logout',(req,res)=>{
  res.clearCookie('token');
  return res.json({logout:true});
})

module.exports = router;