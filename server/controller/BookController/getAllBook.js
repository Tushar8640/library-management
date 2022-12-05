const { getAllBooks } = require("../../services/bookServices");

// get all user
exports.getAllBooks = async (req, res) => {
    try {
      const books = await getAllBooks();
     
      res.status(200).json({
        status: "success",
        books,
      });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({
        status: "fail",
        message: error.message,
      });
    }
  };
  