import React, { useEffect, useState } from "react";
import { Grid, Container } from "@material-ui/core";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import { useDispatch } from "react-redux";
import { getPosts } from "../../actions/posts";
const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  // getPosts is an action and we dispatch it
  // use effect will trigger ----> the getposts action ----> that will take us to the posts reducer
  // we dispatch this action called getposts from here then the control goes to the posts reducers and there we handle the logic with the data received
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <Container>
      <Grid
        container
        justifyContent="space-between"
        alignItems="stretch"
        spacing={3}
      >
        <Grid item xs={12} sm={7}>
          <Posts setCurrentId={setCurrentId} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Form currentId={currentId} setCurrentId={setCurrentId} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
