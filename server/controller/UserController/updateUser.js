
// update user by email
exports.updateUser = async (req, res) => {
    try {
      const {email} = req.params;
      console.log(email);
      const data = req.body;
      console.log(data);
      const user = await updateUser(email, data);
      console.log("user---->", user);
  
      if (user?.modifiedCount == 1) {
        return res.status(200).json({
          status: "success",
          message: "User Successfully updated",
          user,
        });
      }
      if (user?.modifiedCount !== 1) {
        return res.status(500).json({
          status: "Fail",
          message: "user can not updated ",
          user,
        });
      }
    } catch (error) {
      console.log(error.message);
      res.status(500).json({
        status: "fail",
        message: error.message,
      });
    }
  };
  