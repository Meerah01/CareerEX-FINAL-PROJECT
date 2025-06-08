const express = require("express")
const { validateRegister, validateLogin, userAuthorization, adminAuthorization } = require("../middleware")
const { handleUserRegistration, handleUserLogin, handleForgotPassword, handleResetPassword, handleGetAllUsers } = require("../controllers")

const router = express.Router()

// user registration
router.post("/register", validateRegister, handleUserRegistration) 

// user login
router.post("/login", validateLogin, handleUserLogin)


// forgotten password
router.post("/forgot-password", userAuthorization, handleForgotPassword)

// resetting and updating password
router.patch("/reset-password", userAuthorization, handleResetPassword)


// getting all registered users
router.get("/all-users", adminAuthorization, handleGetAllUsers)


module.exports = router 