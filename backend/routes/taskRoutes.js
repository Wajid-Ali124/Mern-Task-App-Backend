const express = require("express")
const { createTask, getTask, getTasks, deleteTask, updateTask } = require("../controllers/taskController")
const router = express.Router()

//Shorter way to define routes
// router.route("/").post(createTask).get(getTasks)
// router.route("/:id").get(getTask).delete(deleteTask).put(updateTask)

router.post("/", createTask)
router.get("/", getTasks)
router.get("/:id", getTask)
router.delete("/:id", deleteTask)
router.put("/:id", updateTask)



module.exports = router;