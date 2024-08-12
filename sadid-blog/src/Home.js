import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  // creating new array of blogs
    // const [blogs,setBlogs] = useState([
    //   {title: "My new website", body: "lorem ipsum...", author: "shaikat", id: 1},
    //   {title: "Welcome party!", body: "lorem ipsum...", author: "shayla", id: 2},
    //   {title: "Web development tips!", body: "lorem ipsum...", author: "meem", id: 3},
    //   {title: "React learning!", body: "lorem ipsum...", author: "shayma", id: 4},
    // ])

    const [name, setName] = useState('shaikat');

    useEffect(() => {
      console.log("Use effect ran");
      console.log(name);
    }, [name])
    const handleDelete =(id) => {
      const newBlogs = blogs.filter(blog => blog.id !== id)
      setBlogs(newBlogs)
    }

    return (  
        <div className="home">
          <BlogList blogs = {blogs} title = "All Blogs!" handleDelete={handleDelete}/>
          {/* <BlogList blogs = {blogs.filter((blog) => blog.author === 'shaikat')} title = "Sadid's Blogs!!" /> */}
          <button onClick={ () => setName('sadidur') }>Change name</button>
          <p> {name} </p>
        </div>
    );
}
 
export default Home;