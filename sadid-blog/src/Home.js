import { useState } from "react";
const Home = () => {
    //let name = "sadid";
    const [initialName, setInitialName] = useState('sadid');
    const [age, setAge] = useState(25);

    const handleClick = () => {
      //console.log("Hello Sadid")
      //name = "Shaikat"
      //console.log(name)
      setInitialName("Shaikat");
      setAge(30);
    }

    // const handleClickAgain = (name,e) => {
    //   console.log("Hello " + name , e.target)
    // }

    return (  
        <div className="home">
          <h2>Homepage</h2>
          <p>{initialName} is {age} years old.</p>
          <button onClick={handleClick}>Click me</button> 
          {/* <button onClick={(e) => {
            handleClickAgain('Sadidur Rahman', e)
          }}>Click again</button>  */}
        </div>
    );
}
 
export default Home;