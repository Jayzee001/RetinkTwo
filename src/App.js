import {useState, useEffect} from 'react'
import Home from './Retink_bodyTwo/Home'
import './App.css'
import AOS from 'aos';

function App() {
AOS.init();
  AOS.refresh();
  
  const [loading, setLoading] = useState(false);
     useEffect(() => {
         setLoading(true);
         setTimeout(() => {
             setLoading(false);
         }, 0);
}, []);
  return (
    <div>
      {loading ? (
        <div className='loader'>
<h1>I'm Johnmary, I'm a</h1>
<div className="containe">
            <div className="typed-out">Web Developer</div></div>
    </div>
      ) :(
        <div>
          <Home />
        </div>)
      }
    </div>
  )
}

export default App
