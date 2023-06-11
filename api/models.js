import { Schema, model } from "mongoose";

const blog = new Schema(
  {
    title: {
      type: String,
      required: true,
      description: true,
    },
    body: {
      type: String,
      required: true,
      description: true,
    },
  },
  {
    timestamps: true,
  }
);

const AllBlog = model("blog", blog);


export default AllBlog;
