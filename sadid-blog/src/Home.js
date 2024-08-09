import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  // creating new array of blogs
    const [blogs,setBlogs] = useState([
      {title: "My new website", body: "lorem ipsum...", author: "shaikat", id: 1},
      {title: "Welcome party!", body: "lorem ipsum...", author: "shayla", id: 2},
      {title: "Web development tips!", body: "lorem ipsum...", author: "meem", id: 3},
      {title: "React learning!", body: "lorem ipsum...", author: "shayma", id: 4},
    ])

    return (  
        <div className="home">
          <BlogList blogs = {blogs} title = "All Blogs!" />
        </div>
    );
}
 
export default Home;