import { Router } from "express";
import { createBlog } from "../controllers/blogs.controller.js";

export const blogs = Router();


blogs.post('/blogs', createBlog);
// blogs.get('/blogs', getAllBlogs);
// blogs.get('/blogs/:id', getOneBlog);
// blogs.put('/blogs/:id', putOneBlog);
// blogs.delete('/blogs/:id', deleteBlog);


