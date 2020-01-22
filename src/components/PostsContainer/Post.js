// You will add code in this file

import React, { useState } from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

const Post = props => {
  // set up state for the likes
const [likes, setLikes] = useState(props.PostsData.likes);

const LikeNumber = () => {
  setLikes( likes => likes + 1);
}

  return (
    <div className="post-border">
      <PostHeader
        username={props.PostsData.username}
        thumbnailUrl={
          props.PostsData.thumbnailUrl
        }
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.PostsData.imageUrl}
        />
      </div>
      <LikeSection
      LikeNumber={LikeNumber}
      likes={likes}
      
      />
      <CommentSection
        postId={props.PostsData.imageUrl}
        comments={props.PostsData.comments}
      />
    </div>
  );
};

export default Post;
