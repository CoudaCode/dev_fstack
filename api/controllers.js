import post from "./models.js";

class Db {
  static async insertPost(req, res) {
    try{
      const newPost = await post.create(req.body);
      console.log(newPost);
      res.status(200).json(newPost);
    } catch (error){
      console.log(error);
      res.status(500).json({ message: "Error inserting post" });
    }
  }
  static async getPosts(req, res) {
    try{
      const getpost = await post.find({});
      console.log(post);
      res.status(200).json(getpost);
    }catch(error){
      console.log(error);
      res.status(500).json({ message: "Error getting post" });
    }
  }
}

export default Db;
