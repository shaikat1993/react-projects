import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  // now to save the title and use it into the db 
  //we will create a constant that will store it and 
  //for that we will use useState hook

  const [title,setTitle] = useState("");
  const [body,setBody] = useState("");
  const [author, setAuthor] = useState("shaikat");

  const [isLoading, setIsLoading] = useState(false);

  // for redirecting to home for navigate back using useHistory hook from react router dom
  const navigate = useNavigate();


  // for submit action
  const onSubmitAction = (e) => {
    // preventing the default values if add blog button is pressed and no changes were found
    e.preventDefault();

    // after that we will create a blog object to 
    //store the datas so that we can include them into the db
    const blog = {title, body, author};
    setIsLoading(true);

    //console.log(blog);

    // now we need to create a post request to store the data into db
    fetch('http://localhost:8000/blogs', {
      method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify(blog)
    }).then(() => {
      //console.log("New Blog added")
      setIsLoading(false)
      // for popping back to the previous page
      // to be specfic for backtracing to previous page
      //https://developer.mozilla.org/en-US/docs/Web/API/History/go#delta
      navigate('/');
    });
    
  };

    return ( 
        <div className="create">
          <h2>Add a new blog</h2>  
          {/* now we want to create a form for posting data and add it into db */}

          {/* 1. first we will create a textfield to add the blog title */}
          <form onSubmit={onSubmitAction}>
            <label>Blog Title: </label>
            <input
            type="text"
            required
            value={title}
            onChange={(updatedTitle) => setTitle(updatedTitle.target.value)}
            />
            <label>Blog Body: </label>
            <textarea
            required
            value={body}
            onChange={(updatedBody) => setBody(updatedBody.target.value)}
            />
            <label>Blog Author: </label>
            <select
            value={author}
            onChange={(updatedAuthor) => setAuthor(updatedAuthor.target.value)}>
              <option value="shaikat">Shaikat</option>
              <option value="shayla">Shayla</option>
              <option value="meem">Meem</option>
              <option value="shayma">Shayma</option>
            </select>
            { !isLoading && <button>Add Blog</button>}
            { isLoading && <button disabled>Adding Blog...</button>}
            {/* <p>{ title }</p>
            <p>{ body }</p>
            <p>{ author }</p> */}
          </form>
        </div>
    );
}
 
export default Create;