import React from "react";
import { Link } from "react-router-dom";
import "./Heading.css";

export default function Heading() {
  return (
    <div className="top">
      <div className="topLeft">
        <a
          href="https://www.facebook.com/profile.php?id=100013830945092"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="topIcon fab fa-facebook-square"></i>
        </a>
        <a
          href="https://www.instagram.com/__ujjwal.vij__/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="topIcon fab fa-instagram-square"></i>
        </a>
        <a
          href="https://in.pinterest.com/today/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="topIcon fab fa-pinterest-square"></i>
        </a>
        <a
          href="https://twitter.com/home"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="topIcon fab fa-twitter-square"></i>
        </a>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/Write">
              WRITE
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        <Link className="link" to="/">
          <img
            className="topImg"
            src={require("../../images/ujjwal.jpg")}
            alt=""
          />
        </Link>
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
