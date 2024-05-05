import React from "react";
import { Link } from "react-router-dom";
import "./Posts.css";

export default function Posts() {
  const posts = [
    {
      img: "https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      categories: ["Nature", "Travel"],
      title: "Exploring the Serene Mountains",
      date: "3 days ago",
      content:
        "Embark on a journey through the majestic mountains, where every step unveils breathtaking landscapes and awe-inspiring vistas.",
    },
    {
      img: "https://images.pexels.com/photos/6758029/pexels-photo-6758029.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      categories: ["Food", "Cooking"],
      title: "Gourmet Delights: Culinary Adventures",
      date: "1 week ago",
      content:
        "Savor the flavors of exotic cuisines and indulge in gastronomic delights with our culinary journey around the world.",
    },
    {
      img: "https://images.pexels.com/photos/6711867/pexels-photo-6711867.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      categories: ["Technology", "Innovation"],
      title: "Tech Trends: Future of Innovation",
      date: "2 weeks ago",
      content:
        "Stay ahead of the curve with our exploration of cutting-edge technologies and groundbreaking innovations shaping the future.",
    },
    {
      img: "https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      categories: ["Fashion", "Style"],
      title: "Fashion Forward: Trends to Watch",
      date: "3 weeks ago",
      content:
        "Step into the world of haute couture and runway glamour as we unveil the latest trends and style inspirations.",
    },
    {
      img: "https://images.pexels.com/photos/4916559/pexels-photo-4916559.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      categories: ["Health", "Wellness"],
      title: "Wellness Wisdom: Journey to Self-Care",
      date: "1 month ago",
      content:
        "Discover the path to holistic wellness and inner balance as we explore mindful practices and self-care rituals.",
    },
    {
      img: "https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      categories: ["Nature", "Travel"],
      title: "Exploring the Serene Mountains",
      date: "3 days ago",
      content:
        "Embark on a journey through the majestic mountains, where every step unveils breathtaking landscapes and awe-inspiring vistas.",
    },
  ];


  return (
    <div className="posts">
      {posts.map((post, index) => (
        <div className="post" key={index}>
          <img className="postImg" src={post.img} alt="" />
          <div className="postInfo">
            <div className="postCats">
              {post.categories.map((category, index) => (
                <span className="postCat" key={index}>
                  <Link className="link" to={`/posts?cat=${category}`}>
                    {category}
                  </Link>
                </span>
              ))}
            </div>
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
