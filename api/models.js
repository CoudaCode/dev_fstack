import { Schema, model } from "mongoose";

const Blog = new Schema(
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

const AllBlog = model("Blog", Blog);

export default AllBlog;
