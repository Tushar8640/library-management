// const { addBookmark } = require("../../services/bookMarkServices");

const { addBook } = require("../../services/bookServices");

exports.addBook = async (req, res) => {
  try {
    const data = req?.body;
  

    const book = await addBook(data);
    console.log("book---->", req.body);
    if (book) {
      res.status(200).json({
        status: "success",
        message: "Book added Successfully",
        book: book,
      });
    } else {
      res.status(200).json({
        status: "failed",
        message: "Unable to add new book",
      });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
};
