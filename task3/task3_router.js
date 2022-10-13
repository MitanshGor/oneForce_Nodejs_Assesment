const router  = require("express").Router()
const task_3_controller = require('./controller_task3')



router.get("/" , task_3_controller.getUser)
router.post("/" , task_3_controller.saveUser)

module.exports = router;

