import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  // creating new array of blogs
    const [blogs,setBlogs] = useState(null);

    // now we will create a new loading condition to 
    //show a loader while the data will be fetched from the JSON.
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      // fetching data 
      fetch('http://localhost:8000/blogs')
      .then(response => {
        return response.json()
      })
      .then((data) => {
        setBlogs(data)
        setIsLoading(false);
      })
    }, [])

    return (  
        <div className="home">
          {isLoading && <div>Loading...</div>}
          {blogs && <BlogList blogs = {blogs} title = "All Blogs!"/>}
        </div>
    );
}
 
export default Home;