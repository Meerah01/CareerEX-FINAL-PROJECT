const authRoutes = require("./authRoutes")
const transactionRoutes = require("./transactionRoutes")
const walletRoutes = require("./walletRoutes")


const routes = [
    authRoutes,
    transactionRoutes,
    walletRoutes
]


module.exports = routes