const router  = require("express").Router()
const task_1_controller = require('./controller_task1')



router.get("/" , task_1_controller.getString)

module.exports = router;