//Complete the necessary code in this file
import React from "react";
import Post from "./Post";
import "./Posts.css";

// pass the data from App.js down as props then map through the data
const PostsPage = props => {
  //console.log("the props", props);
  return (
    <div className="posts-container-wrapper">
      {props.PostsData.map(p => (
        <Post key ={p.imageUrl} PostsData={p}/>
        ))}
    </div>
  );
};

export default PostsPage;

