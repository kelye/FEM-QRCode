import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='main-container'>
      <div className='qr-container'><img src={require("./image-qr-code.png")} width="286px" height="286px"></img></div>
      <h2>Improve your front-end skills by building projects</h2> 
      <h4>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</h4>
    </div>
  );
}

export default App;
