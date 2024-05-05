import { useLocation } from "react-router";
import "./HomePage.css";
import Header from "../../components/header/Header";
import Posts from "../../components/post/Posts";
import Sidebar from "../../components/sidebar/Sidebar";

export default function HomePage() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
}
