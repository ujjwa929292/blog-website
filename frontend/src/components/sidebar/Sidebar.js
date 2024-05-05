import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
          style={{
            maxWidth: "100%",
            height: "auto",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            marginBottom: "15px",
          }}
        />
        <p>
          Helllo My Name is ujjwal vij good to see you 
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link className="link" to="/category/life">
              Life
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/category/music">
              Music
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/category/sport">
              Sport
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/category/style">
              Style
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/category/tech">
              Tech
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/category/cinema">
              Cinema
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <a
            href="https://www.facebook.com/profile.php?id=100013830945092"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="sidebarIcon fab fa-facebook-square"></i>
          </a>
          <a
            href="https://www.instagram.com/__ujjwal.vij__/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="sidebarIcon fab fa-instagram-square"></i>
          </a>
          <a
            href="https://in.pinterest.com/today/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="sidebarIcon fab fa-pinterest-square"></i>
          </a>
          <a
            href="https://twitter.com/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="sidebarIcon fab fa-twitter-square"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
