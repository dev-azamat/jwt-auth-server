const Router = require('express').Router
const { registration, login, logout, activate, refresh, getUsers } = require('../controllers/userController')

const router = new Router()

router.post('/registration', registration)
router.post('/login', login)
router.post('/logout', logout)
router.get('/activate/:link', activate)
router.get('/refresh', refresh)
router.get('/users', getUsers) // test endpoint

module.exports = router
