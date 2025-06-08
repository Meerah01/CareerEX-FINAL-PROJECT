const express = require("express")
const { userAuthorization } = require("../middleware")
const { handleAddMoneyToWallet, handleGetWalletBalance } = require("../controllers/walletController")


const router = express.Router()

// update user wallet
router.post("/add-money", userAuthorization, handleAddMoneyToWallet)

// view wallet balance
router.get("/wallet-balance", userAuthorization, handleGetWalletBalance)



module.exports = router 