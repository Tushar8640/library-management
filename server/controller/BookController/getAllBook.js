const { getAllBookmarks } = require("../../services/bookMarkServices");

// get all user
exports.getAllBookmark = async (req, res) => {
    try {
      const bookmarks = await getAllBookmarks();
     
      res.status(200).json({
        status: "success",
        bookmarks,
      });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({
        status: "fail",
        message: error.message,
      });
    }
  };
  