import express from "express";

import {
  getPosts,
  getPost,
  createPost,
  updatePost,
  likePost,
  deletePost,
} from "../controllers/posts.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPost);
router.get("/:id", getPost);
router.patch("/:id", updatePost); // patch is used to update the exisitng things. For the editing we need the id to know which object we need to edit so its dynamic and we need the id
router.delete("/:id", deletePost);
router.patch("/:id/likePost", likePost);

export default router;
