import Navbar from './Navbar';
import Home from './Home';

function App() {
        // const title = "Welcome to the new blog";
        // const likes = 50;
  // we can not use objects as dynamic values
  // const person = { name: 'Sadid', age: 30 };
        // const link = "http://www.google.com"

  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        < Home/>
        {/* <h1>App Component</h1> */}
        {/* <h1>{title}</h1> */}
        {/* <p>Liked {likes}  times</p> */}

          {/* if we try to use the object here we will get an error */}
          {/* <p>{person}</p> */}

          {/* we can directly use string or number, array as value in curly braces */}
          {/* <p>{ 10 }</p> */}
        {/* <p>{ 'hello, cheta' }</p> */}
        {/* <p> { [1,2,3,4,5] }</p> */}
        {/* <p>{ Math.random() * 10}</p> */}

        {/* <a href={link}> Google Site </a> */}
      </div>
    </div>
  );
}

export default App;
