const router = require("express").Router();
const itemController = require("../controller/itemController")


// for creating data in mongodb 
router.post("/", itemController.createItem);

// for fetching all data in mongodb 
router.get("/", itemController.getAllItem);

// for fetching single data in mongodb 
router.get("/:productId", itemController.getSingleItem);

// for updating data in mongodb 
router.put("/:productId", itemController.updateItem);

// for deleting single data in mongodb 
router.delete("/:productId", itemController.deleteItem);

module.exports = router;




