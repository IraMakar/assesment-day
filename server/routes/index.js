const Router = require('express')
const router = new Router()
const peopleRouter = require('./peopleRouter')

router.use('/people', peopleRouter)

module.exports = router