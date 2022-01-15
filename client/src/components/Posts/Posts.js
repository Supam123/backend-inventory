import React from "react";
import Post from "./Post/Post";
import useStyles from "./styles";
import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";

const Posts = ({ setCurrentId }) => {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts); // grabbed from the global posts state
  return !posts.length ? (
    []
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={2}
    >
      {posts.map((post) => (
        <Grid key={post.id} item xs={10} sm={4}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};
export default Posts;
