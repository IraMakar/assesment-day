const Router = require('express')
const peopleController = require('../controllers/peopleController')
const router = new Router()


router.post('/', peopleController.create)
router.get('/', peopleController.getAll)
router.get('/:id', peopleController.getOne)
router.put('/update', peopleController.updateAll)
router.put('/update/:id', peopleController.updateOne)
router.delete('/delete/:id', peopleController.deleteOne)

module.exports = router;