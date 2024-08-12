import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  // creating new array of blogs
    const [blogs,setBlogs] = useState(null);

    const [name, setName] = useState('shaikat');

    useEffect(() => {
      // fetching data 
      fetch('http://localhost:8000/blogs')
      .then(response => {
        return response.json()
      })
      .then((data) => {
        console.log(data);
        setBlogs(data) 
      })
      //console.log("Use effect ran");
    }, [])

    // const handleDelete =(id) => {
    //   const newBlogs = blogs.filter(blog => blog.id !== id)
    //   setBlogs(newBlogs)
    // }

    return (  
        <div className="home">
          {blogs && <BlogList blogs = {blogs} title = "All Blogs!"/>}
        </div>
    );
}
 
export default Home;