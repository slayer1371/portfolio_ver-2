import { useEffect, useState } from 'react';
import './App.css';
import Center from './components/Center';

const App = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Start animation after a short delay on component mount
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer); // Cleanup timeout on component unmount
  }, []);

  return (
    <div className="container">
      <div className={`center-component ${animate ? 'animate' : ''}`}><Center /></div>
      <div className={`pop-out one ${animate ? 'animate' : ''}`}>About</div>
      <div className={`pop-out two ${animate ? 'animate' : ''}`}>Hero</div>
      <div className={`pop-out four ${animate ? 'animate' : ''}`} style={{"height" : "40%"}}>Skills</div>
      <div className={`pop-out six ${animate ? 'animate' : ''}`}>Contact</div>
      <div className={`pop-out eight ${animate ? 'animate' : ''}`}>Projects</div>
      <div className={`pop-out five ${animate ? 'animate' : ''}`} >Experience</div>
      {/* <div className={`pop-out five ${animate ? 'animate' : ''}`}>Contact</div> */}
    </div>
  );
};

export default App;
