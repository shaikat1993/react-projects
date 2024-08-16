import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const {blogID} = useParams();

    //reusing custom hooks
    const {data: blog,error,isLoading} = useFetch('http://localhost:8000/blogs/' + blogID);

    // for redirecting to home for navigate back using useHistory hook from react router dom
    const navigate = useNavigate();

    // create a delete function
    const onDeletePressed = () => {
        fetch("http://localhost:8000/blogs/" + blogID, {
            method: "DELETE"
        })
        .then((response) => {
            if (!(response.ok)) {
                throw new Error('Failed to delete the blog from json')
            } 
            return response.json();
        } )
        .then(() => {
            navigate("/");
        })
        .catch(err => {
            console.log('Error:', err);
        })
    };

    return ( 
        <div className="blog-details">
            { isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                   <h2> {blog.title} </h2> 
                   <p>Written by { blog.author }</p>
                   <div>{ blog.body }</div>
                   <button onClick={onDeletePressed}>Delete Blog</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;