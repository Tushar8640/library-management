const express = require("express");
const { addBook } = require("../controller/BookController/addBook");
const { getAllBooks } = require("../controller/BookController/getAllBook");
// const { addBookmark } = require("../controllers/bookmarks/addBookmark");
// const { deleteBookmark } = require("../controllers/bookmarks/deleteBookmark");
// const { getAllBookmark } = require("../controllers/bookmarks/getAllBookmark");
// const { getBookmarkById } = require("../controllers/bookmarks/getBookmarkById");
// const { updateBookmark } = require("../controllers/bookmarks/updateBookmark");
const router = express.Router();

router.post("/addBook", addBook);
// router.post("/getBookmarkById", getBookmarkById);
// router.post("/deleteBookmark/:id", deleteBookmark);
router.get("/getAllBooks", getAllBooks);
// router.post("/updateBookmark/:id", updateBookmark);

module.exports = router;