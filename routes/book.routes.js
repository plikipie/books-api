const express = require("express");
const router = express.Router();

const book_controller = require("../controller/book.controller");

router.post("/create", book_controller.book_create);
router.get("/:id", book_controller.book_details);
router.get("/", book_controller.all_books);
router.put("/:id/update", book_controller.book_update);
router.delete("/:id/delete", book_controller.book_delete);

module.exports = router;
