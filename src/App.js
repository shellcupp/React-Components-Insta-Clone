/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React, { useState } from "react";
import SearchBar from "../src/components/SearchBar/SearchBarContainer";
import "../src/components/SearchBar/SearchBar.css"
import PostsPage from "../src/components/PostsContainer/PostsPage"
import "./App.css";
import dummyData from "./dummy-data";

// import the PostsPage and SearchBar and add them to the App
// import dummydata

const App = () => {
  // set up state for the dummy data and pass to your PostsPage
  const [data] = useState(dummyData);
  console.log(data);
  return (
    <div className="App">
      <SearchBar />
      <PostsPage PostsData={data} />
      
    </div>
  );
};

export default App;
