const express = require("express");
const router = express.Router();
const {
  register, users, getByEmail, remove, update, sendmail, login, logout, refreshToken,updateI,usersI,getByEmailI,registerI,comparePasswords
} = require("../controllers/auth");
const { verifyTokenMiddleware } = require("../middleware/auth");
const { verify } = require("crypto");

router.route("/register").post(register);
router.route("/update/:email").put(update);

// Assurez-vous que verifyTokenMiddleware est une fonction middleware
router.route("/users").get( users);
router.route("/user/:email").get(getByEmail);
router.route("/email/:email/:code").get(sendmail);
router.route("/user/delete/:email").delete(remove);
router.route("/login").post(login);
router.route("/logout").post(logout);
router.route("/refresh").post(refreshToken);
//I
router.route("/updateI/:email").put(updateI);
router.route("/usersI").get(usersI);
router.route("/userI/:email").get(getByEmailI);
router.route("/registerI").post(registerI);
router.route("/comparePasswords").post(comparePasswords);

module.exports = router;
