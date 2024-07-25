import './App.css';
import { useEffect, useState} from "react"

// utilizes useState to track the current time 
// value and the “running” state of the stopwatch.

//Side effects with useEffect: useEffect is used to implement the logic for starting, stopping, and resetting the timer using setInterval and clearInterval.
function App() {
  const [time,setTime] = useState(0);
  const [running, setRunning] = useState(false)

  useEffect (() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10)
      }, 10);
    } else if (!running) {
      clearInterval(interval)
    }
    return () => clearInterval(interval);
  }, [running])
  return (
    <div
    className="h-screen w-screen bg-cover bg-center"
    style={{
    backgroundImage: `url('https://picsum.photos/2000/1000?gravity=center&blur=2')`,
    backgroundSize: '100vw 100vh',
    backgroundRepeat: 'no-repeat',
    
  }}
    >
    <div className='max-w-md mx-auto mt-10 p-4 bg-white rounded-md shadow-md'>
      <h1 className='text-3xl font-bold text-center mb-4'>stopwatch</h1> 
      <div className='lex justify-center space-x-4'>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)} : </span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)} : </span>
        <span>{("0" + (time / 10) % 100).slice(-2)}</span>
      </div>
      <div>
        {running ? (<button 
        className={`bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ${
          !running ? 'disabled' : ''
        }`}
        disabled={!running}
        onClick={() => {setRunning(false)}}>Stop</button>) 
        : (<button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
         onClick={() => {setRunning(true)}}>Start</button>)}
        <span className="mx-1" /> {/* add space between buttons */}
        <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {setTime(0)}}>Reset</button>
      </div>
    </div>
    </div>
  );
}

export default App;

/*
time calculation explanation
Calculating Minutes:

const minutes = Math.floor((time / 60000) % 60);
time / 60000: 
This converts milliseconds to minutes because there are 60,000 milliseconds in a minute.

% 60: This operation ensures that if the time exceeds 60 minutes, it wraps around. 

For example, if the time is 120,000 milliseconds (2 minutes), the calculation would yield 2, 
but if the time is 130,000 milliseconds (2 minutes and 10 seconds), 
it would yield 2 for the minutes part.

Math.floor(): This rounds down to the nearest whole number, giving you the complete minutes.
*/

/*
Calculating Seconds:

const seconds = Math.floor((time / 1000) % 60);
time / 1000: 
This converts milliseconds to seconds since there are 1,000 milliseconds in a second.
% 60: Similar to the minutes calculation, 
this ensures that the seconds wrap around correctly. 
It only returns the remainder after dividing by 60,
which gives you the seconds portion of the time.
Again, Math.floor() rounds down to the nearest whole number.
*/