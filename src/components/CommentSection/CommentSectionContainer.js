// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  const [comment] = useState(props.comments);
  console.log(comment);
  return  (
		<div>
      {props.comments.map(com =>
        <Comment comment={com} key={com.username} />
      )}
			<CommentInput />
		</div>
	);
};

export default CommentSection;
