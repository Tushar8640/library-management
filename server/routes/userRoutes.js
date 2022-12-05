const express = require("express");
const router = express.Router();
const {userLogin} = require("../controllers/user/userLogin");
const {userSignUp} = require("../controllers/user/userSignUp");

const {deleteUser, findUserByEmail, getAllUser, updateUser} = require("../controllers/userController");

router.post("/addUser", userSignUp);
router.post("/authenticateUser", userLogin);
router.delete("/deleteUser/:email", deleteUser);
router.get("/findUser/:email", findUserByEmail);
router.get("/allusers", getAllUser);
router.patch("/updateUser/:email", updateUser);

module.exports = router;
