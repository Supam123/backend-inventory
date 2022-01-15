import axios from "axios";
// from here we will connect the front end with the back end ,yeah
const url = "https://shop-project76.herokuapp.com/posts"; // this gives us all the posts

export const fetchPosts = () => axios.get(url);

export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
