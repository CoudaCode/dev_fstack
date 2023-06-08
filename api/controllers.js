import Blog from "./models.js";

class Db {
  static async insertPost(req, res) {
    try {
      const newPost = await Blog.create(req.body);
      console.log(newPost);
      res.status(200).json(newPost);
    } catch (error) {
      console.log(message.error);
      res.status(500).json({ message: "Error inserting post" });
    }
  }
  static async getPosts(req, res) {
    try {
      const post = await Blog.find({});
      console.log(post);
      res.status(200).json(post);
    } catch (error) {
      console.log(message.error);
      res.status(500).json({ message: "Error getting post" });
    }
  }
}

export default Db;
