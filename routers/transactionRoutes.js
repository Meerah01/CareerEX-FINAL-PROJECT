const express = require("express")
const { userAuthorization } = require("../middleware")
const { handleMoneyTransfer, handleAllPastTransactions } = require("../controllers/transactionController")


const router = express.Router()


// money transfer
router.post("/transfer-money", userAuthorization, handleMoneyTransfer) 

// view list of past transactions
router.get("/all-transactions", userAuthorization, handleAllPastTransactions)


module.exports = router 