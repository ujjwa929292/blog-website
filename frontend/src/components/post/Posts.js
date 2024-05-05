import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Posts.css"; // Importing the CSS file
import { fetchPosts } from "../../api";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts()
      .then((data) => {
        console.log("Fetched posts:", data);
        setPosts(data);
      })
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <div className="posts">
      {posts.map((post, index) => (
        <div className="post" key={index}>
          <img className="postImg" src={post.image} alt="" />
          <div className="postInfo">
            <h3 className="postTitle">
              <Link to={`/post/${index}`} className="link">
                {post.title}
              </Link>
            </h3>
            <div className="postMeta">
              <span className="postDate">{post.date}</span>
            </div>
            <p className="postDesc">{post.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
