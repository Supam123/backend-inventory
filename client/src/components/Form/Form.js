import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    title: "",
    info: "",
    selectedFile: "",
  });
  const dispatch = useDispatch();
  const classes = useStyles();
  const post = useSelector((state) =>
    currentId ? state.posts.find((post) => post._id === currentId) : null
  ); // this is how we get the post that was clicked by finding the id of the clicked post

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (postData.title == "" || postData.info == "") {
      alert("please fill in the required fields :)");
    } else {
      if (currentId) {
        dispatch(updatePost(currentId, postData));
      } else {
        dispatch(createPost(postData));
      }
    }

    // handle submit triggers the action create posts
    // create posts runs
    // create posts makes an api cal to db to make a post
    // then dispacthes it to the reducer with the payload
    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setPostData({
      title: "",
      info: "",
      selectedFile: "",
    });
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={classes.form}
        onSubmit={handleSubmit}
      >
        <Typography variant="h5"> Create a Inventory Item</Typography>

        <TextField
          required
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => {
            setPostData({ ...postData, title: e.target.value });
          }}
        />
        <TextField
          required
          name="info"
          variant="outlined"
          label="Information"
          fullWidth
          value={postData.info}
          onChange={(e) => {
            setPostData({ ...postData, info: e.target.value });
          }}
        />

        <div className={classes.fileInput}>
          <FileBase
            type="file/"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button variant="contained" size="medium" onClick={clear} fullWidth>
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
