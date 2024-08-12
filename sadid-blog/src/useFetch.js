import { useState, useEffect } from "react";

const useFetch = (urlStr) => {
    // creating new array of blogs
    const [data,setData] = useState(null);
    // now we will create a new loading condition to 
    //show a loader while the data will be fetched from the JSON.
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // fetching data
        fetch(urlStr)
        //fetch('http://localhost:8000/blogs')
        .then(response => {
          //console.log(response)
          if(!response.ok) {
            throw Error("Could not fetch the error for that resource");
          }
          return response.json()
        })
        .then((data) => {
          setData(data)
          setIsLoading(false);
          setError(null);
        }).catch(err => {
          setIsLoading(false);
          setError(err.message);
        })
      }, [urlStr])

    return ({data, isLoading, error});
}
 
export default useFetch;